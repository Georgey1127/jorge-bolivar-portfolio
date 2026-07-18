import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const skillsRouter = Router();

skillsRouter.get('/', async (_req, res) => {
  const skills = await prisma.skillCategory.findMany({
    orderBy: {
      sortOrder: 'asc',
    },
  });

  res.json(skills);
});