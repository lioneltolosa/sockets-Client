import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MesagesComponent } from './pages/mesages/mesages.component';

const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'mensajes', component: MesagesComponent},
    { path: '**', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
