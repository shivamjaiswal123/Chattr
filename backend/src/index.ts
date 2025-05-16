import { app } from './app';
import { connectDatabase } from './config/db';

const port = process.env.PORT || 3000;

const startHTTPServer = async () => {
  try {
    await connectDatabase();
    console.log('Connected to DB');

    app.listen(port, () => {
      console.log('HTTP Server started on port: 3000');
    });
  } catch (error) {
    console.error('Error while running the server: ', error);
  }
};

startHTTPServer();
