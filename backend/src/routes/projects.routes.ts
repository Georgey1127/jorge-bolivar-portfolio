import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const projectsRouter = Router();

projectsRouter.get('/', async (_req, res) => {
  const projects = await prisma.project.findMany({
    orderBy: {
      sortOrder: 'asc',
    },
  });

  res.json(projects);
});

projectsRouter.get('/:id', async (req, res) => {
  const project = await prisma.project.findUnique({
    where: {
      id: req.params.id,
    },
  });

  if (!project) {
    res.status(404).json({
      message: 'Project not found',
    });
    return;
  }

  res.json(project);
});