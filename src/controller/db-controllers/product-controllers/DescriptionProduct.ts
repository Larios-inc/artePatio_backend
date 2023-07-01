import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

import { DataDescription } from '../../../ts/interfaces/reqbody';

const { descriptionProduct } = new PrismaClient()

export const getAllDescription = async (req:Request, res:Response, next:NextFunction) => {
    
    try {
        
        const allDescription = await descriptionProduct.findMany({include:{descImg:true}})

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
                descImg: true
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

    const { desc, desc_1, stock, productId } = req.body

    try {

        const id = uuidv4()

        const postDescription: DataDescription = {
            idDescription: id,
            desc,
            desc_1,
            stock,
            productId
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

    const { idDescription } = req.params
    const { desc, stock, ...resto }:DataDescription = req.body

    try {
        
        const updateDescription = {
            desc,
            stock,
            resto
        }

        await descriptionProduct.update({
            where:{
                idDescription
            },
            data: updateDescription
        })

        res.status(202).json({
            msg:'description posted',
            updateDescription
        })

    } catch (error) {
        return console.log(
            res.status(401).json(next(error))
        );
    }

}

export const deleteDescription = async (req:Request, res:Response, next:NextFunction) => {

    const { idDescription } = req.params

    try {
        
        const description = await descriptionProduct.delete({
            where:{
                idDescription
            }
        })

        return res.status(206).json(description)

    } catch (error) {
        return console.log(
            res.status(401).json(next(error))
        );
    }

}