const express = require('express');

const app = express();
const server = require('http').createServer(app);

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ data: 'working!' });
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
