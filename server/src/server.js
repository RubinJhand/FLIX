import { createServer } from 'http';

import { app } from './config';
import { PORT } from './constants';

const server = createServer(app);

server.listen(PORT, (error) => {
  if (error) {
    console.log('Server start error:', error);
  }
  console.log(`Server is running on port: ${PORT}`);
});
