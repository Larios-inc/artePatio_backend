import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const {  } = new PrismaClient()

interface DataStateType {
    idPhoneNumber: string
    phone_number: string
    ContactId: string
}

export const createAddress =async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdAddress =async (req:Request, res: Response, next: NextFunction) => {}
export const updateAddress =async (req:Request, res: Response, next: NextFunction) => {}
export const deleteAddress =async (req:Request, res: Response, next: NextFunction) => {}
export const getAllAddresses =async (req:Request, res: Response, next: NextFunction) => {}
  