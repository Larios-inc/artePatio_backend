import { PrismaClient } from '@prisma/client';
// import { request, response, NextFunction } from 'express';
const {request, response, NextFunction} = require('express')
const jwt = require('jsonwebtoken')


const { user } = new PrismaClient()

export const validJWT = async (
    req:typeof request, 
    res: typeof response, 
    next: typeof NextFunction
) => {

    const token = req.header('x-token');

    if( !token ) return res.status(400).json({msg:'Missing Token'})

    try {
        
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        const userJWT = await user.findFirst({
            where:{
                idUser: uid
            }
        })

        if( !userJWT ){
            return res.status(401).json({
                msg:'Token no valid Or User id not valid'
            })
        }

        req.user = userJWT
        // req.
        next()

    } catch (error) {
        next(error)

        res.status(401).json({msg:'No valid Token'})
    }

}