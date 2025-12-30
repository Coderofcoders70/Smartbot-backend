import cors from 'cors';
import express, { Request, Response } from 'express';
import chatRoutes from './routes/chat-route';

console.log('App file loaded');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', chatRoutes);

// health check
app.get('/', (_req: Request, res: Response) => {
  res.json({ status: 'Backend is running' });
});

export default app;
