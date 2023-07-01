// PRODUCTS  --------------------------
// category 
export interface DataCate {
    idCategory   : string
    categoryName : string
}
// descImg 
export interface DataDescImg {
    idDescImg : string
    imgs      : string
    DescriptionProductID: string
}
// DescriptionProduct 
export interface DataDescription {
    idDescription : string
    desc          : string
    desc_1?       : string
    stock         : number
    productId     : string
}
// product 
export interface DataProducts {
    idProduct     :  string
    name_Product  :  string
    price         :  number
    img_Main_Product:string
    categoryId    :  string
}