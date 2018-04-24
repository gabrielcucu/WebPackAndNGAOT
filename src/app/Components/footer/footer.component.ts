import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  msgs: Message[] = [];

  constructor(private messageService: MessageService) {


  }

  ngOnInit() {
    this.messageService.messageObserver.subscribe((res:Message)=>
      {
        this.msgs = [];
        this.msgs.push(res);
      }
    );
  }

}
