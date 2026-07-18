import { Router } from 'express';
import { experiences } from '../data/portfolio.data.js';

export const experienceRouter = Router();

experienceRouter.get('/', (_req, res) => {
  res.json(experiences);
});