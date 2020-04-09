import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import * as Parse from 'parse';

@Component({
  selector: 'novy-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  onEnter(messageText: string) {
    this.messageService.broadcast(messageText, Parse.User.current());
  }

}
