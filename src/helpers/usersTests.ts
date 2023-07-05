import { PrismaClient } from "@prisma/client";


const { permissions, role,
        user, address } = new PrismaClient()

export const permissionIdExist = async (idPermissions:string)=>{

    const idPerrmissionsExist = await permissions.findUnique({
        where:{ idPermissions }
    })

    if(!idPerrmissionsExist ){
        throw new Error(`permission ${idPermissions} does not exist`)
    }

}

export const roleIdExist = async (idRole:string) =>{

    const idRoleExist = await role.findUnique({ where: { idRole }})

    if(!idRoleExist) throw new Error(`role ${idRole} does nost exist`)

}

export const testRoleIfExist =async (role_Name:string) => {
    
    const Roles = await role.findFirst({where:{ role_Name}})

    if( Roles ) throw new Error(`role already in DB unable to Create or Update`)

}

export const testUserNameExist = async ( username:string ) =>{

    const UserNameExistAlready = await user.findFirst({where:{username}})

    if( UserNameExistAlready ) throw new Error(`User name unable to use already exist into DB`)

}

export const idUserValid = async ( idUser: string ) => {

    const idExistByUser = await user.findUnique({where: {idUser}})

    if( !idExistByUser ) throw new Error(`User id ${idUser} does not exist`)
}

export const mailExist = async (email:string) => {
    
    const emailIntoDB = await user.findFirst({where:{email}})

    if( emailIntoDB ) throw new Error(`using exist email, unable to use ${email} to create or updte`)

}