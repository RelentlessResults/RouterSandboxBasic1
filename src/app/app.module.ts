import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListComponent,
    DetailComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
