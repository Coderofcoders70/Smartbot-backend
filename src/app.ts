import cors from 'cors';
import express from 'express';
import chatRoutes from './routes/chat-route'

console.log('App file loaded');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', chatRoutes);

// check route health
app.get('/', (_req, res) => {
  res.json({ status: 'Backend is running' });
});

export default app;
