import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';


const routes: Routes = [
  { path: 'home', component: TodoComponent },
  { path: 'groups', component: TodoComponent },
  { path: 'users', component: TodoComponent },
  { path: 'prayers', component: TodoComponent },
  { path: 'feedback', component: TodoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
