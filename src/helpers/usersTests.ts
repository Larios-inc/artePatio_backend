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
    
    const Roles = await role.findFirst({
        where:{ role_Name}
    })

    if( Roles ) throw new Error(`role already in DB unable to Create or Update`)

}