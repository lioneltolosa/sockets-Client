import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { MesagesComponent } from './pages/mesages/mesages.component';

const config: SocketIoConfig = {
    url: environment.wsUrl, options: {}
};

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        ChatComponent,
        ListaUsuariosComponent,
        LoginComponent,
        MesagesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SocketIoModule.forRoot(config),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
