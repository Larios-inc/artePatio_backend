import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { DataAddress } from '../../../ts/interfaces/user.interfaces';

const {  } = new PrismaClient()



export const createAddress = async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdAddress = async (req:Request, res: Response, next: NextFunction) => {}
export const updateAddress = async (req:Request, res: Response, next: NextFunction) => {}
export const deleteAddress = async (raeq:Request, res: Response, next: NextFunction) => {}
export const getAllAddresses = async (req:Request, res: Response, next: NextFunction) => {}
  