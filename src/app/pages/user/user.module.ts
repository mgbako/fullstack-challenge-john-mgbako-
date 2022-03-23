import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';

import { SharedModule } from 'src/app/shared/shared.module';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    NzTableModule,
    UserRoutingModule,
  ],
  declarations: [UserComponent],
})
export class UserModule {}
