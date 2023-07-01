import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { DataUser } from '../../../ts/interfaces/user.interfaces';

const {  } = new PrismaClient()

export const createUser =async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdUser =async (req:Request, res: Response, next: NextFunction) => {}
export const updateUser =async (req:Request, res: Response, next: NextFunction) => {}
export const deleteUser =async (req:Request, res: Response, next: NextFunction) => {}
export const getAllUsers =async (req:Request, res: Response, next: NextFunction) => {}
  