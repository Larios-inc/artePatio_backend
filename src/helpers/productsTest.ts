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