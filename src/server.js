import express from 'express';
import { SERVER_PORT } from './config';

const app = express();

app.get('/*', (req, res) => {
  const content = '<div>Starter Template</div>';

  res.send(content);
});

app.listen(SERVER_PORT);
