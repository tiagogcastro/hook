import 'reflect-metadata';
import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
// import uploadConfig from '@config/upload';

import '@shared/infra/typeorm';
import AppError from '@shared/errors';
import '@shared/container';

const app = express();

app.use(cors());

app.use(express.json());
// app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    name: err.stack,
    message: 'Internal server error.'
  });
});

const port = 3333;
app.listen(port, () => {
  console.log(`Backend server Hook stated on port ${port}`)
});