import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { projectsRouter } from './routes/projects.routes.js';
import { skillsRouter } from './routes/skills.routes.js';
import { experienceRouter } from './routes/experience.routes.js';
import { contactRouter } from './routes/contact.routes.js';

dotenv.config();

const app = express();

const PORT = process.env['PORT'] || 5000;
const FRONTEND_URL = process.env['FRONTEND_URL'] || 'http://localhost:4200';

app.use(
  cors({
    origin: FRONTEND_URL,
  })
);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio API is running.',
  });
});

app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/experience', experienceRouter);
app.use('/api/contact', contactRouter);

app.use((_req, res) => {
  res.status(404).json({
    message: 'Route not found.',
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});