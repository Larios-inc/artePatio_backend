import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const { phoneNumber } = new PrismaClient()

interface DataStateType {
    idPhoneNumber: string
    phone_number: string
    ContactId: string
}

export const createPhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdPhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
export const updatePhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
export const deletePhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
export const getAllPhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
  