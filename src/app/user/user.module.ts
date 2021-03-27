import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UserListComponent, UserDataComponent, UserEditorComponent],
  imports: [
    CommonModule, AppRoutingModule, FormsModule
  ],
  exports: [UserComponent, UserListComponent, UserDataComponent]
})
export class UserModule { }
