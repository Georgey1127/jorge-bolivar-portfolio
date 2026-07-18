import { Router } from 'express';

export const contactRouter = Router();

contactRouter.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: 'Name, email, and message are required.',
    });
  }

  console.log('New contact message:', {
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  });

  return res.status(201).json({
    message: 'Message received successfully.',
  });
});