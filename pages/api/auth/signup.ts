import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from 'validator';
import bcrypt from 'bcrypt';
import * as jose from 'jose';
import { setCookie } from "cookies-next";

const primsa = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST'){
    const {firstName, lastName, email, phone, city, password} = req.body;
    const errors: string[] = [];
    const validatationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20
        }),
        errorMessage: "First name is invalid"
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20
        }),
        errorMessage: "Last name is invalid"
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is invalid"
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Phone number is invalid"
      },
      {
        valid: validator.isLength(city, {
          min: 1,
          max: 20
        }),
        errorMessage: "City is invalid"
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Password is invalid"
      }
    ]

    validatationSchema.forEach((check) => {
      if (!check.valid){
        errors.push(check.errorMessage);
      }
    })

    if (errors.length){
      return res.status(400).json({errorMessage: errors[0]});
    }

    const userWithEmail = await primsa.user.findFirst({
      where: {
        email
      }
    })

    if (userWithEmail){
      return res.status(400).json({errorMessage: "Email is associated with another account"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await primsa.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        password: hashedPassword,
        city: city,
        phone: phone,
        email: email
      }
    })

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const algorithm = "HS256";
    const token = await new jose.SignJWT({email: user.email})
                  .setProtectedHeader({alg: algorithm})
                  .setExpirationTime("24h")
                  .sign(secret);
    setCookie("jwt", token, {req, res, maxAge: 60 *6 * 24});
    return res.status(200).json({
      firstName: user.first_name,
      lastName: user.last_name,
      city: user.city,
      phone: user.phone,
      email: user.email
    });
  }
  return res.status(404).json("Unknown endpoint");
}
