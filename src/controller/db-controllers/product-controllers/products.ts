import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

const { product } = new PrismaClient()

interface DataProducts {
    idProduct:    string
    name_Product: string
    price:        number
    img_Main_Product:string
    categoryId:  string
}

export const createProduct = async( req:Request, res:Response, next:NextFunction ) => {

    const {name_Product, price, img_Main_Product, categoryId}:DataProducts = req.body

    try {
        
        const id = uuidv4()

        const postProduct: DataProducts = {
            idProduct: id,
            name_Product,
            price,
            img_Main_Product,
            // descriptionId,
            categoryId
        }

        await product.create({ data: postProduct})

        res.status(201).json({
            msg:'product posted succesfull :) ',
            postProduct
        })

    } catch (error) {
        next(error)
    }

}
export const getAllProducts = async( req:Request, res:Response, next:NextFunction ) => {

    try {
    
        const allProducts = await product.findMany({
            where:{
                is_Active: true
            }
        })

        return res.status(200).json({
            msg:'all products',
            allProducts
        })
        
    } catch (error) {
        next(error)
    }


}
export const getByIdProduct = async( req:Request, res:Response, next:NextFunction ) => {

    const { idProduct } = req.params

    try {

        const getProduct = await product.findUnique({
            where:{
                idProduct
            },
            include:{
                orderItems: true,
                monthlySale : true,
                topSale: true,
                description: true
            }
        })

        res.status(200).json({
            msg:'get one product',
            getProduct
        })
        
    } catch (error) {
        next(error)
    }

}

export const UpdateProduct = async( req:Request, res:Response, next:NextFunction ) => {

    const { idProduct } = req.params
    const {name_Product, price, ...resto }:DataProducts = req.body

    try {
        
        const putProduct :DataProducts = {
            name_Product,
            price,
            ...resto
        }

        await product.update({
            where:{
                idProduct
            },
            data: putProduct
        })

        return res.status(202).json({
            msg:"product updated succesfully",
            putProduct
        })

    } catch (error) {
        next(error)
    }

}

export const DeleteProduct = async( req:Request, res:Response, next:NextFunction ) => {

    const {idProduct } = req.params

    try {

        const productDelete = await product.update({
            where:{
                idProduct
            },
            data:{
                is_Active: false
            }
        })

        res.status(204).json(productDelete)
        
    } catch (error) {
        next(error)
    }

}