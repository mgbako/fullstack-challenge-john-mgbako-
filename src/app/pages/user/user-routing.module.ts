import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from 'src/app/shell/shell.service';
import { UserComponent } from './user.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', component: UserComponent, data: { title: 'User' } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
