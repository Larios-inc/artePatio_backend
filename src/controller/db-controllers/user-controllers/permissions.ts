import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { DataPermissions } from '../../../ts/interfaces/user.interfaces';

const { permissions } = new PrismaClient()

export const createPermissions = async (req:Request, res: Response, next: NextFunction) => {

    const { permission }:DataPermissions = req.body

    try {

        const id:string = uuidv4()

        const permissionCreate = {
            idPermissions:id,
            permission
        }
        
        await permissions.create({
            data:permissionCreate
        })

        return res.status(202).json({
            msg:'created',
            permissionCreate
        })

    } catch (error) {
        next(error)
    }

}

export const getByIdPermissions = async (req:Request, res: Response, next: NextFunction) => {

    const {idPermissions} = req.params

    try {

        const getOnePermission = await permissions.findFirst({
            where: { idPermissions },
            include:{ role: true }
        })

        return res.status(200).json({
            msg:'updated permission',
            getOnePermission
        })
        
    } catch (error) {
        next(error)
    }

}

export const updatePermissions = async (req:Request, res: Response, next: NextFunction) => {

    const {idPermissions} = req.params

    try {
        
    } catch (error) {
        next(error)
    }
}

export const deletePermissions = async (req:Request, res: Response, next: NextFunction) => {
    const {idPermissions} = req.params

    try {
        
    } catch (error) {
        next(error)
    }
}
export const getAllPermissions = async (req:Request, res: Response, next: NextFunction) => {
    
    res.json({msg:'done'})

}
  