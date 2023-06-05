import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
// Imports de Material Angular
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ANGULAR MATERIALS:
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {}

  currentRouteIsContact(): boolean {
    return this.router.url === '/contacto';
  }
  defaultMessage: string = "Hola. Necesito tu ayuda.";
  chatInput: string = '';

  openChat() {
    // Abre el chat o realiza cualquier acción necesaria para mostrar el chat

    // Asigna el mensaje predeterminado al campo de entrada del chat
    this.chatInput = this.defaultMessage;

    // O emite automáticamente el mensaje predeterminado
    this.sendMessage(this.defaultMessage);
  }

  sendMessage(message: string) {
    // Lógica para enviar el mensaje al chat
  }
 }
