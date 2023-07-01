import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { DataPhone } from '../../../ts/interfaces/user.interfaces';

const { phoneNumber } = new PrismaClient()

export const createPhoneNumber =async (req:Request, res: Response, next: NextFunction) => {

    const { ContactId, phone_number }:DataPhone = req.body 

    try {
        
        const id = uuidv4()

        const phoneCreate: DataPhone = {
            idPhoneNumber: id,
            ContactId,
            phone_number
        }

    } catch (error) {
        next(error)
    }

}

export const getByIdPhoneNumber =async (req:Request, res: Response, next: NextFunction) => {

    const { idPhoneNumber } = req.params

    try {
        
    } catch (error) {
        next(error)
    }
}


export const updatePhoneNumber =async (req:Request, res: Response, next: NextFunction) => {

    const { ContactId, phone_number }:DataPhone = req.body
    const { idPhoneNumber } = req.params 

    try {
        
    } catch (error) {
        next(error)
    }   

}
export const deletePhoneNumber =async (req:Request, res: Response, next: NextFunction) => {

    const { idPhoneNumber } = req.params

    try {
        
    } catch (error) {
        next(error)
    }

}
export const getAllPhoneNumber =async (req:Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        next(error)
    }
}
  