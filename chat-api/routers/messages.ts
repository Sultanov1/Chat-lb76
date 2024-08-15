import express from 'express';
import {MessageMutation} from '../types';
import fileDb from '../fileDb';

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const queryDate = req.query.datetime as string;

  let date: Date | null = null

  if (queryDate) {
    date = new Date(queryDate);

    if (isNaN(date.getDate())) {
      return res.status(400).send({error: 'Datetime is not correct'});
    }
  }

  let messages = await fileDb.getItems();

  if (queryDate) {
    messages = messages.filter(message => {
      return message.datetime > queryDate;
    });
  }

  return res.send(messages.slice(-30));
});

messagesRouter.post('/', async (req, res) => {
  if (!req.body.author || !req.body.message) {
    return res.status(400).json({'error': 'Author and message must be present in the request'});
  }

  const message: MessageMutation = {
    author: req.body.author,
    message: req.body.message
  };

  const savedProduct = await fileDb.addItem(message);
  return res.send(savedProduct);
})

messagesRouter.delete('/:id', async (req, res) => {
  const {id}  = req.params;

  try {
    const deletedMessage = await fileDb.deleteItem(id);

    if (!deletedMessage) {
      return res.status(404).send({ error: 'Message not found' });
    }

    return res.send({ success: true });
  } catch (error) {
    return res.status(400).send({ error: 'Failed to delete message' });
  }
})

export default messagesRouter;