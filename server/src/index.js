import './utils/env.js';
import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

// ----- Constants -----
const ENV = process.env;

const PORT = ENV.PORT;

// ----- Routes -----
app.get('/', (req, res) => {
  res.json({ data: 'working!' });
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
