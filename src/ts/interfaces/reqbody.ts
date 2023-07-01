export interface DataAddress {
    idAddress     : string
    address_line_1: string
    address_line_2: string
    address_line_3: string
    city          : string
    type_state    : string
    zip_code      : number
    ContactId     : string
}

export interface DataUser {
    idUser    : string
    username  : string
    email     : string
    password  : string
    is_Active?: boolean
    roleId    : string
}
export interface DataStateType {
    idTypeState: string
    type_state : string
} 

export interface DataContactInfo {
    idContact   :string
    name        :string
    last_Name   :string
    userId      :string
}

export interface DataPhone {
    idPhoneNumber: string
    phone_number : string
    ContactId    : string
}

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