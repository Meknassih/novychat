import { Injectable } from '@angular/core';
import * as Parse from 'parse';

const Message = Parse.Object.extend('Message');

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  async broadcast(messageText: string, user: Parse.User): Promise<Parse.Object> {
    const message = new Message();
    message.set('text', messageText);
    message.set('userPtr', user);
    return await message.save();
  }
}
