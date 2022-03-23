import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent implements OnInit {
  isCollapsed = false;
  user: any;

  constructor(private router: Router, private actRoute: ActivatedRoute) {}

  ngOnInit() {}

  logout() {
    //this.authService.logout();
  }
}
