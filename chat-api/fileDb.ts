import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Message, MessageMutation,} from './types';

const filename = './db.json';
let data: Message[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(filename);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },
  async getItems() {
    return data;
  },
  async addItem(item: MessageMutation) {
    const id = crypto.randomUUID();
    const datetime = new Date().toISOString();
    const message = {id, ...item, datetime};
    data.push(message);
    await this.save();
    return message;
  },
  async deleteItem(id: string) {
    const messageLength = data.length;
    data = data.filter((message) => message.id !== id);
    if (data.length < messageLength) {
      await this.save();
      return true;
    }
    return false;
  },
  async save() {
    return fs.writeFile(filename, JSON.stringify(data, null, 2));
  }
};

export default fileDb;