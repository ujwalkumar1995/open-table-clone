import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from 'validator';
import bcrypt from 'bcrypt';
import * as jose from 'jose';
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST'){
        const errors: string[] = [];
        const {email, password} = req.body;

        const validatationSchema = [
            {
                valid: validator.isEmail(email),
                errorMessage: 'Email is invalid'
            }, 
            {
                valid: validator.isLength(password, {
                    min: 1
                }),
                errorMessage: 'Password is invalid'
            }
        ];

        validatationSchema.forEach(check => {
            if (!check.valid){
                errors.push(check.errorMessage)
            }
        });

        if (errors.length){
            return res.status(400).json({ errorMessage: errors[0]})
        }

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (!user){
            return res.status(401).json({
                errorMessage: 'Email or password is invalid'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch){
            return res.status(401).json({
                errorMessage: 'Email or password is invalid'
            })
        }

       
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const algorithm = "HS256";
        const token = await new jose.SignJWT({email})
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