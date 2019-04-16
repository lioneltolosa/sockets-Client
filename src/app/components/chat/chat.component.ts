import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    texto = '';

    constructor(public chatService: ChatService) { }

    ngOnInit() {
        this.chatService.getMessages()
            .subscribe(msg => {
                console.log(msg);
            });
    }

    enviar() {
        console.log(this.texto);
        this.chatService.sendMessage(this.texto);

        this.texto = '';
    }
}
