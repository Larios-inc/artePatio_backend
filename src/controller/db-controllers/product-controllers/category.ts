import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const { category } = new PrismaClient()

interface DataCate {
    idCategory: string,
    categoryName: string,
}

export const getAllCategories = async (req:Request, res:Response, next:NextFunction) => {
    
    try {
        
        const allCategories = await category.findMany()

        res.status(200).json({allCategories})

    } catch (error) {
        return console.log(
            res.status(401).json(next(error))
        );
    }

}

export const getCategory = async (req:Request, res:Response, next:NextFunction) => {

    const { idCategory } = req.params

    try {
        
        const categoryById = await category.findUnique({
            where:{
                idCategory: idCategory
            },
            include:{
                product: true
            }
        })

        // if(!categoryById.idCategory) throw new Error()

        res.status(200).json({
            msg:'get one category',
            categoryById
        })

    } catch (error) {
        next(error)
        return console.log(
            res.status(401).json({msg: `unable to find category ${idCategory}`})
        );
    }

}

export const createCategory = async (req:Request, res:Response, next:NextFunction) => {

    const { categoryName } = req.body;

    try {
        
        const id = uuidv4()

        const postCate: DataCate = {
            idCategory: id,
            categoryName
        }


        await category.create({ data: postCate})

        res.status(201).json({
            msg:'category created',
            postCate
        })

    } catch (error) {
        next(error)
    }

}

export const updateCategory = async (req:Request, res:Response, next:NextFunction) => {

    const { idCategory } = req.params
    const { categoryName } = req.body

    try {
        
        const updateCate = {
            categoryName
        }

        await category.update({
            where:{
                idCategory : idCategory
            },
            data: updateCate
        })

        return res.status(202).json({
            msg:'category updated',
            updateCate
        })

    } catch (error) {
        next(error)
        return res.status(403).json(error)
    }

}

export const deleteCategory = async (req:Request, res:Response, next:NextFunction) => {

    const { idCategory } = req.params

    try {
        
        const categoryDelete = await category.delete({
            where:{
                idCategory: idCategory
            }
        })

        return res.status(204).json(categoryDelete)

    } catch (error) {
        return next(error)
    }

}