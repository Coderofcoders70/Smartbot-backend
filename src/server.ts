import app from './app';

console.log('Server file loaded');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  // console.log(`Server listening on http://localhost:${PORT}`);
});
