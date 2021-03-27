import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditorComponent } from './user/user-editor/user-editor.component';
import { UserGuard } from './user/user.guard';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      // Take a look here:
      // the { user: UserGuard } is telling you what you'll find inside the x argument
      // in the UserEditorComponent -> resolver subscription... the User object will
      // be placed into an object with the user key, like this
      //
      // { user: User }
      { path: ':name', component: UserEditorComponent, resolve: { user: UserGuard } },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
