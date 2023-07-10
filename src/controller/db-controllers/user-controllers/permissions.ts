import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { DataPermissions } from '../../../ts/interfaces/user.interfaces';
import prismadb from '../../../models/prismadb';

export const createPermissions = async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {

    const { permission, descriptionPermission }:DataPermissions = req.body

    try {

        const id:string = uuidv4()

        const permissionCreate:DataPermissions = {
            idPermissions:id,
            permission,
            descriptionPermission
        }
        
        await prismadb.permissions.create({
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

export const getByIdPermissions = async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {

    const {idPermissions} = req.params

    try {

        const getOnePermission = await prismadb.permissions.findFirst({
            where: { idPermissions },
            include:{ role: true }
        })

        return res.status(200).json({
            msg:'permission found',
            getOnePermission
        })
        
    } catch (error) {
        next(error)
    }

}

export const updatePermissions = async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {

    const {idPermissions} = req.params
    const { permission, descriptionPermission }:DataPermissions = req.body

    try {
        
        const permissUpdate = await prismadb.permissions.update({
            where:{ idPermissions },
            data:{ 
                permission,
                descriptionPermission
            }
        })

        return res.status(202).json({
            msg:`updated ${permissUpdate.permission}`,
            permissUpdate
        })

    } catch (error) {
        next(error)
    }
}

export const deletePermissions = async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {
    
    const {idPermissions} = req.params

    try {
        
        const permissDelete = await prismadb.permissions.delete({ where : {idPermissions}})

        return res.status(204).json(permissDelete)

    } catch (error) {
        next(error)
    }
}

export const getAllPermissions = async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {
    
    try {
        
        const allPermiss = await prismadb.permissions.findMany()

        return res.status(200).json(allPermiss)

    } catch (error) {
        next(error)
    }

}