import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDrawer,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { NavigationHistoryComponent } from './navigation-history/navigation-history.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListComponent,
    DetailComponent,
    ChatWindowComponent,
    NavigationHistoryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
