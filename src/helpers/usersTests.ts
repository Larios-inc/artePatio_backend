import { PrismaClient } from "@prisma/client";


const { permissions,
        user, address } = new PrismaClient()

export const permissionIdExist = async (idPermissions:string)=>{

    const idPerrmissionsExist = await permissions.findUnique({
        where:{ idPermissions }
    })

    if(!idPerrmissionsExist ){
        throw new Error(`permission ${idPermissions} does not exist`)
    }

}