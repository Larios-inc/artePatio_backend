import { Request, Response, NextFunction } from 'express';
const { request } = require('express')
// import { v4 as uuidv4 } from 'uuid';
import bcryptjs from 'bcryptjs'

import { DataUser } from '../../../ts/interfaces/user.interfaces';
import prismadb from '../../../models/prismadb';

//hashing pass
const salt = bcryptjs.genSaltSync()

export const createUser = async (
    req: Request, 
    res: Response, 
    next:NextFunction
) => {

    const { username, email, password, img }:DataUser = req.body


    try {

        // const id:string = uuidv4()

        const postUser:DataUser = {
            username,
            email,
            img,
            google: false,
            password,
            roleId: "USER"
        }
        
        // setting the has to encript the password
        postUser.password = bcryptjs.hashSync(password, salt)

        await prismadb.user.create({
            data: postUser
        })

        return res.status(201).json({
            postUser
        })
        
    } catch (error) {
        next(error)
    }

}

export const getByIdUser =async (
    req: typeof request, 
    res: Response, 
    next: NextFunction
) => {

    const { idUser } = req.params

    try {
        
        const userAuth = req.user

        const getOneUser = await prismadb.user.findUnique({
            where:{idUser},
            include:{
                role:true
            }
        })

        if(userAuth.idUser !== getOneUser.idUser ){

            return res.status(401).json({
                msg:'token does not belong from same token id'
            })
        }else{
            if( getOneUser.is_Active === true ){
                return res.status(200).json({
                    getOneUser,
                    userAuth
                })
            }else{
                res.status(400).json({
                    msg:'user not found in DB'
                })
            }
        }
        
    } catch (error) {
        next(error)
    }

}

export const updateUser =async (
    req: typeof request, 
    res: Response, 
    next: NextFunction
) => {

    const { idUser } = req.params
    const { password, roleId, ...rest}:DataUser = req.body
    const userToken = req.user

    try {
        
        const userUpdate = {
            password,
            roleId,
            ...rest
        }

        userUpdate.password = bcryptjs.hashSync(password, salt)

        await prismadb.user.update({
            where:{
                idUser
            },
            data:{
                password: userUpdate.password,
                roleId:userUpdate.roleId,
                ...rest
            }
        })

        if( userToken.idUser !== idUser ){
            return res.status(401).json({
                msg:'incorrect token - login first to update user'
            })
        }

        return res.status(200).json({
            userUpdate
        })

    } catch (error) {
        next(error)
    }

}

export const deleteUser = async (
    req: typeof request, 
    res: Response, 
    next: NextFunction
) => {

    const { idUser } = req.params
    const authUser = req.user

    try {

        if( authUser.idUser !== idUser){

            return res.status(401).json({msg:`unable to delete`})

        }else{

            const userDelete = await prismadb.user.update({
                where:{idUser},
                data:{
                    is_Active:false
                }
            })
    
            return res.status(204).json(userDelete)    
        }
        
    } catch (error) {
        next(error)
    }

}

export const getAllUsers = async ( 
    req:Request, 
    res: Response, 
    next: NextFunction
) => {

    try {
        
        const allUsers = await prismadb.user.findMany({
            where:{
                is_Active:true
            }
        })

        return res.status(200).json({
            msg:'all users',
            allUsers
        })

    } catch (error) {
        next(error)
    }

}
  