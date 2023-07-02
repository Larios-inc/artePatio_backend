import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { DataAddress } from '../../../ts/interfaces/user.interfaces';

const {  } = new PrismaClient()



export const createRole = async (req:Request, res: Response, next: NextFunction) => {}
export const getByIdRole = async (req:Request, res: Response, next: NextFunction) => {}
export const updateRole = async (req:Request, res: Response, next: NextFunction) => {}
export const deleteRole = async (raeq:Request, res: Response, next: NextFunction) => {}
export const getAllRole = async (req:Request, res: Response, next: NextFunction) => {}
    