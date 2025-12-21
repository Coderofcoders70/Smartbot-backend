import cors from 'cors';
import express from 'express';
import chatRoutes from './routes/chat-routes';

console.log('App file loaded');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// app.use((req, _res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });


app.use('/api', chatRoutes);

// Health check route
app.get('/', (_req, res) => {
  res.json({ status: 'Backend is running' });
});

export default app;
