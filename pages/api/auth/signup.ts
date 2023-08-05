import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from 'validator';

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

    return res.status(200).json({ name: "hello" });
  }
}
