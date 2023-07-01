import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { DataContactInfo } from '../../../ts/interfaces/products.interfaces';

const {  } = new PrismaClient()

export const createContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
export const updateContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
export const deleteContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
export const getAllContactInfo = async (req:Request, res: Response, next: NextFunction) => {}
  