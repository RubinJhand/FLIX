import { createServer } from 'http';

import app from './app';
import { PORT } from './constants/port.js';

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
