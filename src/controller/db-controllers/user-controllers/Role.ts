import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { DataRole } from '../../../ts/interfaces/user.interfaces';

const { role } = new PrismaClient();

export const createRole = async (req:Request, res: Response, next: NextFunction) => {

    const {role_Name, permissionsId}:DataRole = req.body

    try {
        
        const id:string = uuidv4()

        const roleCreate:DataRole = {
            idRole: id,
            role_Name,
            permissionsId
        }

        await role.create({
            data: roleCreate
        })

        return res.status(202).json({
            msg:'ROLE CREATED',
            roleCreate
        })

    } catch (error) {
        next(error)
    }

}
export const getByIdRole = async (req:Request, res: Response, next: NextFunction) => {

    const { idRole } = req.params

    try {
    
        const getOneRole = await role.findUnique({
            where:{ idRole},
            include:{ user: true }
        })

        return res.status(200).json({
            msg:'found role',
            getOneRole
        })

    } catch (error) {
        next(error)
    }

}

export const updateRole = async (req:Request, res: Response, next: NextFunction) => {
    
    const { idRole } = req.params
    const {role_Name, permissionsId }:DataRole = req.body

    try {
        
        const updateInfo = {
            role_Name,
            permissionsId
        }

        await role.update({
            where:{idRole},
            data:updateInfo
        })

        return res.status(202).json({
            msg:`updated ${updateInfo.role_Name}`
        })

    } catch (error) {
        next(error)
    }


}

export const deleteRole = async (req:Request, res: Response, next: NextFunction) => {

    const { idRole } = req.params

    try {
        
        const roleRemove = await role.delete({where:{idRole}})

        return res.status(204).json(roleRemove)

    } catch (error) {
        next(error)
    }

}

export const getAllRole = async (req:Request, res: Response, next: NextFunction) => {

    try {
        
        const allRoles = await role.findMany()

        return res.status(200).json(allRoles)

    } catch (error) {
        next(error)
    }

}
    