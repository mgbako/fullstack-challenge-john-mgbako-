import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public dashboardService: DashboardService) {}
  users: { email: string }[];
  loader: boolean;

  ngOnInit() {
    this.onGetUsers();
  }

  onGetUsers() {
    this.loader = true;

    this.dashboardService
      .onGetUsers()
      .pipe(finalize(() => (this.loader = false)))
      .subscribe((res: any) => {
        res.status = this.users = res.data;
      });
  }
}
