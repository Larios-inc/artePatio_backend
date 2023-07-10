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
    phone_number : number
    ContactId    : string
}

export interface DataPermissions {
    idPermissions         : string
    permission            : string
    descriptionPermission : string
}

export interface DataRole {
    idRole       : string
    role_Name    : string
    permissionsId: string
}