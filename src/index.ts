import app from './app';
import environment from './config/environment';
import { sequelize } from './db';
// import { gitDataHandler } from './helpers/FetchData';
import { gitDataHandler } from './helpers/gitData';

const port = environment.port;

app.listen(port, async () => {
  console.log('server running in http://localhost:8080');
  await sequelize
    .authenticate()
    .then(async () => {
      console.log('Database connection has been established successfully.');
    })
    .catch((error: any) => {
      console.error('Unable to connect to the database:', error);
    });
  // await gitDataHandler();
});

/// ///push the client side changes
