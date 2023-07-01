import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const {  } = new PrismaClient()

interface DataStateType {
    idPhoneNumber: string
    phone_number: string
    ContactId: string
}

export const createUser =async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdUser =async (req:Request, res: Response, next: NextFunction) => {}
export const updateUser =async (req:Request, res: Response, next: NextFunction) => {}
export const deleteUser =async (req:Request, res: Response, next: NextFunction) => {}
export const getAllUsers =async (req:Request, res: Response, next: NextFunction) => {}
  