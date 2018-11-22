import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'chat',
    component: ChatWindowComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
