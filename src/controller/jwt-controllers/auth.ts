import { PrismaClient } from "@prisma/client";
import { Request, NextFunction, Response } from 'express';
import bcryptjs from 'bcryptjs';

import { generateJWT } from "../../helpers/generateJWT";



const { user } = new PrismaClient()

export const login = async (req:Request, res:Response, next:NextFunction) => {
    
    const {email, password} = req.body;

    try {
        
        const userdb = await user.findFirst({ 
            where:{ email }
        })

        if(!userdb) {
            return res.status(400).json({ msg: 'User / Password are not correct'})
        }

        const validPass = bcryptjs.compareSync(password, userdb.password)

        if( !validPass ) {
            return res.status(400).json({ msg: 'User / Password are not correct'})
        }

        const token = await generateJWT( userdb.idUser )

        return res.status(201).json({
            userdb,
            token
        })

    } catch (error) {

        next(error)
        
        return res.status(500).json({
            msg:'Go with admin'
        })
    }

}

export const googleSignIn = async (req:Request, res:Response, next: NextFunction) => {

    const { id_token } = req.body

    res.json({
        msg:'Todo Ok',
        id_token
    })

}