import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    public socketStatus = false;

    constructor(private socket: Socket) {
        this.checkStatus();
    }

    checkStatus() {
        this.socket.on('connect', () => {
            console.log('User connected to the Server');
            this.socketStatus = true;
        });

        this.socket.on('disconnect', () => {
            console.log('User disconnect to the Server');
            this.socketStatus = false;
        });
    }

    // Disparar un evento al servidor
    emit( evento: string, payload?: any, callback?: Function) {

        console.log('Emitiendo', evento);
        // emit('EVENTO', payload, callback?)
        this.socket.emit( evento, payload, callback );
    }

    listen ( evento: string ) {
        return this.socket.fromEvent( evento );
    }
}
