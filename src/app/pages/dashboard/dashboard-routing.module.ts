import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from 'src/app/shell/shell.service';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
