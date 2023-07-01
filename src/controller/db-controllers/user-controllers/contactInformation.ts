import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const {  } = new PrismaClient()

interface DataStateType {
    idPhoneNumber: string
    phone_number: string
    ContactId: string
}

export const createContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
export const updateContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
export const deleteContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
export const getAllContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
  