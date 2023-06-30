import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const { typeState } = new PrismaClient()

interface DataStateType {
    idTypeState: string
    type_state: string
}

export const createTypeState =async (req:Request, res: Response, next: NextFunction) => {
    
    const { type_state }:DataStateType = req.body
    
    try {
        
        const id:string = uuidv4()

        const postTState:DataStateType = {
            idTypeState: id,
            type_state
        }

        await typeState.create({
            data: postTState
        })

        return res.status(201).json({
            msg:'type state created',
            postTState
        })

    } catch (error) {
        next(error)
    }
}

export const getTypeState =async (req:Request, res: Response, next: NextFunction) => {
    
    const {idTypeState} = req.params
    
    try {
        
        const oneTypeState = await typeState.findUnique({
            where:{ idTypeState },
            include:{ address:true }
        })

        return res.status(200).json({oneTypeState})
        
    } catch (error) {
        next(error)
    }

}

export const updateTypeState =async (req:Request, res: Response, next: NextFunction) => {
    
    const {idTypeState} = req.params
    const { type_state }:DataStateType = req.body
    
    try {
        
        const putTypeState = await typeState.update({
            where:{idTypeState},
            data: {type_state}
        })

        return res.status(202).json({
            msg:`updated ${putTypeState.type_state}`,
            putTypeState
        })
        
    } catch (error) {
        next(error)
    }

}

export const DeleteTypeState =async (req:Request, res: Response, next: NextFunction) => {
    
    const {idTypeState} = req.params
    
    try {
        
        const typeStateDelete = await typeState.delete({
            where:{idTypeState}
        })

        return res.status(204).json(typeStateDelete)
        
    } catch (error) {
        next(error)
    }

}

export const getAllTypeStates =async (req:Request, res: Response, next: NextFunction) => {
    
    const {idTypeState} = req.params
    
    try {
        
        const allTypeStates = await typeState.findMany()

        return res.status(200).json(allTypeStates)
        
    } catch (error) {
        next(error)
    }

}