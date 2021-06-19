import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

// ----- Constants -----
const PORT = 3000;

// ----- Routes -----
app.get('/', (req, res) => {
  res.json({ data: 'working!' });
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
