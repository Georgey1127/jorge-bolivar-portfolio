import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const experienceRouter = Router();

experienceRouter.get('/', async (_req, res) => {
  const experiences = await prisma.experience.findMany({
    orderBy: {
      sortOrder: 'asc',
    },
  });

  res.json(experiences);
});