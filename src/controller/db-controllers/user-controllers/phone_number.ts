import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { DataPhone } from '../../../ts/interfaces/reqbody';

const { phoneNumber } = new PrismaClient()

export const createPhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdPhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
export const updatePhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
export const deletePhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
export const getAllPhoneNumber =async (req:Request, res: Response, next: NextFunction) => {}
  