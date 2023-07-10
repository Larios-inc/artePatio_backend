import { Request, Response, NextFunction } from 'express';

import { DataPhone } from '../../../ts/interfaces/user.interfaces';
import prismadb from '../../../models/prismadb';


export const createPhoneNumber =async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {

    const { ContactId, phone_number}:DataPhone = req.body 

    try {

        const phoneCreate = {
            ContactId,
            phone_number
        }

        await prismadb.phoneNumber.create({
            data: phoneCreate
        })

    } catch (error) {
        next(error)
    }

}

export const getByIdPhoneNumber =async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {

    const { idPhoneNumber } = req.params

    try {
        
    } catch (error) {
        next(error)
    }
}


export const updatePhoneNumber = async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {

    const { ContactId, phone_number }:DataPhone = req.body
    const { idPhoneNumber } = req.params 

    try {
        
    } catch (error) {
        next(error)
    }   

}
export const deletePhoneNumber = async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {

    const { idPhoneNumber } = req.params

    try {
        
    } catch (error) {
        next(error)
    }

}
export const getAllPhoneNumber = async (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        
    } catch (error) {
        next(error)
    }
}
  