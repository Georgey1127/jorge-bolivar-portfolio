import { Router } from 'express';
import { projects } from '../data/portfolio.data.js';

export const projectsRouter = Router();

projectsRouter.get('/', (_req, res) => {
  res.json(projects);
});

projectsRouter.get('/:id', (req, res) => {
  const project = projects.find((item) => item.id === req.params.id);

  if (!project) {
    return res.status(404).json({
      message: 'Project not found',
    });
  }

  return res.json(project);
});