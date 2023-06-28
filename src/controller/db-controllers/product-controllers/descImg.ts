import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const { descImg } = new PrismaClient()

interface DataDescImg {
    idDescImg: string
    imgs: string
}

export const getAllDescImg = async (req: Request, res: Response, next:NextFunction) =>{

    try {
        
        const alldescimg = await descImg.findMany()

        res.status(200).json({alldescimg})

    } catch (error) {
        next(error)
    }

}

export const getOneDescImg = async (req: Request, res: Response, next:NextFunction) =>{

    const { idDescImg } = req.params

    try {

        const onedescImg = await descImg.findFirst({ 
            where:{
                idDescImg 
            },
            include:{
                product:true
            }
        })

        res.status(200).json({
            msg:'ond desc IMG',
            onedescImg
        })
        
    } catch (error) {
        next(error)
    }    

}

export const createDescImg = async (req: Request, res: Response, next:NextFunction) =>{
    
    const { imgs } = req.body

    try {
        
        const id = uuidv4()

        const postDesImg: DataDescImg = {
            idDescImg: id,
            imgs
        }

        await descImg.create({ data: postDesImg})

        res.status(201).json({
            msg:'img added',
            postDesImg
        })

    } catch (error) {
        next(error)
    }

}

export const updateDescImg = async (req: Request, res: Response, next:NextFunction) =>{

    const { idDescImg } = req.params
    const { imgs } = req.body

    try {
        
        const updateImg = {
            imgs
        }

        await descImg.update({
            where:{
                idDescImg
            },
            data: updateImg
        })

        return res.status(202).json({
            msg:'img updated',
            updateImg
        })

    } catch (error) {
        next(error)
    }

}

export const DELETEdescImg = async (req: Request, res: Response, next:NextFunction) =>{

    const { idDescImg } = req.params

    try {
        
        const imgsDelete = await descImg.delete({
            where:{
                idDescImg
            }
        })

        return res.status(204).json(imgsDelete)

    } catch (error) {
        next(error)
    }

}