import { PrismaClient } from "@prisma/client";

const { category,
        product, 
        descImg, 
        descriptionProduct } = new PrismaClient()

export const existCategoryId =async (idCategory :string) => {
    
    const existIdCate = await category.findFirst({
        where:{
            idCategory:idCategory
        }
    })

    if(!existIdCate) throw new Error(`Id ${idCategory} does not exist`)

}

export const existCategory = async (categoryName: string) =>{

    const categoryEx = await category.findFirst({
        where:{
            categoryName:categoryName
        }
    })

    if( categoryEx ) throw new Error(`Category ${categoryName} already in data base / UNABLE TO CREATE OR UPDATE`)

}

export const existProductById = async ( idProduct: string ) => {

    const existidProduct = await product.findFirst({
        where:{
            idProduct: idProduct
        }
    })

    if( !existidProduct ) throw new Error(`Product ${idProduct} does not exist`)

}

export const activeProductTrue =  async (idProduct: string) =>{

    const getProduct = await product.findFirst({where:{idProduct:idProduct}})

    if( getProduct.is_Active === false) {
        throw new Error(`product ${getProduct.name_Product } not at inventory`)
    }
}

export const NameProduct = async (name_Product:string) =>{

    const products = await product.findFirst({
        where:{ name_Product:name_Product }
    })

    if( products ) throw new Error(`Product ${products.name_Product} already in DB / unable to create OR update`)

}