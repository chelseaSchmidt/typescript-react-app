import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;
const isProd = process.env.MODE === 'PROD';
const HOME_URL = `http://localhost:${PORT}`;

const server = express();

server.use(express.static(path.resolve(__dirname, '..', 'client', 'public')));

server.listen(PORT, () =>
  console.log(`Listening at ${HOME_URL} in ${isProd ? 'prod' : 'dev'} mode`),
);
