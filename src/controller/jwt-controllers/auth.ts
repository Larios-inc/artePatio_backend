import { Request, NextFunction, Response, json } from 'express';
import bcryptjs from 'bcryptjs';

import { generateJWT } from "../../helpers/generateJWT";
import { googleVerify } from "../../helpers/google-verify";
import prismadb from "../../models/prismadb";


export const login = async (req:Request, res:Response, next:NextFunction) => {
    
    const {email, password} = req.body;

    try {
        
        const userdb = await prismadb.user.findFirst({ 
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

    try {
        
        const { name, picture, email } = await googleVerify( id_token )

        // this is a user getting by google trying to find if there is a user with same mail 
        let user = await prismadb.user.findFirst({
            where:{
                email
            }
        })

        if( !user ){
            const data = {

            }

            google
        }

        res.json({
            msg:'Todo Ok',
            id_token
        })

    } catch (error) {
        
        res.status(400).json({
            ok: false,
            msg: 'Token not valid'
        })

    }

}