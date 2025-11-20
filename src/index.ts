import Express from 'express';
import morgan from 'morgan'; // logger
import { configDotenv } from 'dotenv';
import cors from 'cors';
import baseRouter from './routes';
import GlobalErrorUtil from './utils/globalErrorUtil';
configDotenv({ path: `${__dirname}/../.env` });

const app = Express();

app.set('port', process.env.PORT || 3000);

app.use(Express.json());
app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'tiny'));
app.use(Express.urlencoded({ extended: true })); // enable this to handle form-data and multipart/form-data

app.use('/', baseRouter);

app.use(GlobalErrorUtil);

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')} in ${app.get('env')} mode`);
});
