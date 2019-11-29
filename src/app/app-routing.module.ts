import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {AuthGuard} from './auth.guard';
import {GroupListComponent} from './group-list/group-list.component';


const routes: Routes = [
  {path: 'home', component: TodoComponent, canActivate: [AuthGuard]},
  {path: 'groups', component: GroupListComponent, canActivate: [AuthGuard]},
  {path: 'users', component: TodoComponent, canActivate: [AuthGuard]},
  {path: 'prayers', component: TodoComponent, canActivate: [AuthGuard]},
  {path: 'feedback', component: TodoComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
