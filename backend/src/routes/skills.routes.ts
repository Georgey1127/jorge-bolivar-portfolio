import { Router } from 'express';
import { skills } from '../data/portfolio.data.js';

export const skillsRouter = Router();

skillsRouter.get('/', (_req, res) => {
  res.json(skills);
});