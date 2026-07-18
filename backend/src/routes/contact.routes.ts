import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const contactRouter = Router();

contactRouter.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({
      message: 'Name, email, and message are required.',
    });
    return;
  }

  const contactMessage = await prisma.contactMessage.create({
    data: {
      name,
      email,
      message,
    },
  });

  res.status(201).json({
    message: 'Message received successfully.',
    id: contactMessage.id,
  });
});