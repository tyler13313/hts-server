import express from 'express';
import { createServer, Server } from 'http';

import controller from './controller';
import database from './config/database';

const app = express();

// eslint-disable-next-line @typescript-eslint/no-floating-promises
database.sync({
  alter: true,
});

app.use(express.json());
app.use(controller);

const server = createServer(app);
server.listen(process.env.PORT || 5000);
