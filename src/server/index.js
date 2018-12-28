import express from 'express';
import path from 'path';
import config from '../config';
import render from './render';

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/*', (req, res) => {
  const content = render(req.url);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(content);
});

app.listen(config.SERVER_PORT);
