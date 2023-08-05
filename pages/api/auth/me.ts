import { NextApiRequest, NextApiResponse } from "next";
import * as jose from 'jose';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const bearerToken = req.headers["authorization"] as string;
    if (!bearerToken){
        return res.status(401).json({errorMessage: "Unauthorized request"});
    }

    const token = bearerToken.split(" ")[1];

    if (!token){
        return res.status(401).json({errorMessage: "Unauthorized request"});
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    try {
        await jose.jwtVerify(token, secret);
    }
    catch (error) {
        return res.status(401).json({errorMessage: "Unauthorized request"});
    }


    return res.json({me: "test"})
}