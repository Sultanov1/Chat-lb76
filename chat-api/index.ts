import express from "express";
import messagesRouter from './routers/messages';
import cors from 'cors';
import config from './config'
import fileDb from './fileDb';

const app = express();
const port = 8000;

app.use(cors(config.corsOptions))
app.use(express.json());
app.use('/messages', messagesRouter);

const run = async () => {
  await fileDb.init();

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
};

run().catch(console.error);