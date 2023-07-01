import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const {  } = new PrismaClient()

interface DataAddress {
    idAddress: string
    address_line_1: string
    address_line_2: string
    address_line_3: string
    ContactId: string
}

export const createAddress =async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdAddress =async (req:Request, res: Response, next: NextFunction) => {}
export const updateAddress =async (req:Request, res: Response, next: NextFunction) => {}
export const deleteAddress =async (raeq:Request, res: Response, next: NextFunction) => {}
export const getAllAddresses =async (req:Request, res: Response, next: NextFunction) => {}
  