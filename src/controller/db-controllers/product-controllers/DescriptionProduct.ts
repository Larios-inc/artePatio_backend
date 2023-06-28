import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const { descriptionProduct } = new PrismaClient()

interface DataDescription {
    idDescription : string
    desc : string
    stock : number
    descImgId: string
}

export const getAllDescription = async (req:Request, res:Response, next:NextFunction) => {
    
    try {
        
        const allDescription = await descriptionProduct.findMany()

        res.status(200).json({allDescription})

    } catch (error) {
        return console.log(
            res.status(401).json(next(error))
        );
    }

}

export const getOneDescription = async (req:Request, res:Response, next:NextFunction) => {

    const { idDescription } = req.params;

    try {

        const categoryById = await descriptionProduct.findUnique({
            where:{
                idDescription
            },
            include:{
                product: true
            }
        })

        res.status(200).json({
            msg:'get one description',
            categoryById
        })
        
    } catch (error) {
        return console.log(
            res.status(401).json(next(error))
        );
    }

}

export const createDescription = async (req:Request, res:Response, next:NextFunction) => {

    const { desc, stock, descImgId } = req.body

    try {

        const id = uuidv4()

        const postDescription: DataDescription = {
            idDescription: id,
            desc,
            stock,
            descImgId
        }

        await descriptionProduct.create({ data: postDescription})

        res.status(201).json({
            msg:'description posted',
            postDescription
        })
        
    } catch (error) {
        return console.log(
            res.status(401).json(next(error))
        );
    }

}

export const updateDescription = async (req:Request, res:Response, next:NextFunction) => {


}

export const deleteDescription = async (req:Request, res:Response, next:NextFunction) => {



}