import app from './app';
import environment from './config/environment';
// import { gitDataHandler } from './helpers/gitData';
import { sequelize } from './db';
import { gitDataHandler } from './helpers/gitData';

const port = environment.port;

app.listen(port, async () => {
  console.log('server running in http://localhost:8080');
  await sequelize
    .authenticate()
    .then(async () => {
      console.log('Database connection has been established successfully.');
    })
    .catch(error => {
      console.error('Unable to connect to the database:', error);
    });
  // await sequelize.sync();
  await gitDataHandler();
  // })

  // }, 5000);
});
