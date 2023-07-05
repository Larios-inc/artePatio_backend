import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
const {request} = require('express')
import { v4 as uuidv4 } from 'uuid';
import bcryptjs from 'bcryptjs'

import { DataUser } from '../../../ts/interfaces/user.interfaces';

const { user } = new PrismaClient()

export const createUser =async (req:Request, res: Response, next: NextFunction) => {

    const { username, email, password, roleId }:DataUser = req.body

    try {

        const id:string = uuidv4()

        const postUser:DataUser = {
            idUser: id,
            username,
            email,
            password,
            roleId
        }

        //hashing pass
        const salt = bcryptjs.genSaltSync()

        postUser.password = bcryptjs.hashSync(password, salt)

        await user.create({
            data: postUser
        })

        return res.status(201).json({
            postUser
        })
        
    } catch (error) {
        next(error)
    }

}
export const getByIdUser =async (req: typeof request, res: Response, next: NextFunction) => {

    const { idUser } = req.params

    try {
        
        const getOneUser = await user.findUnique({
            where:{idUser},
            include:{
                role:true
            }
        })

        return res.status(200).json(getOneUser)
        
    } catch (error) {
        next(error)
    }

}
export const updateUser =async (req:Request, res: Response, next: NextFunction) => {

    const { idUser } = req.params
    const { username, email, password, roleId }:DataUser = req.body

}

export const deleteUser =async (req:Request, res: Response, next: NextFunction) => {

    const { idUser } = req.params

    try {
        
        const userDelete = await user.update({
            where:{idUser},
            data:{
                is_Active:false
            }
        })

        return res.json(userDelete)

    } catch (error) {
        next(error)
    }

}

export const getAllUsers = async (req:Request, res: Response, next: NextFunction) => {

    try {
        
        const allUsers = await user.findMany()

        return res.status(200).json({
            msg:'all users',
            allUsers
        })

    } catch (error) {
        next(error)
    }

}
  