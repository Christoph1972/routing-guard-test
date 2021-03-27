import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditorComponent } from './user/user-editor/user-editor.component';
import { UserGuard } from './user/user.guard';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: ':name', component: UserEditorComponent, resolve: { user: UserGuard } },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
