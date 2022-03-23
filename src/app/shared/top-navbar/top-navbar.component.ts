import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent implements OnInit {
  isCollapsed = false;
  isLoggedIn: boolean;
  user: any;
  @Input() logo: string = 'assets/svgs/logo.svg';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }
}
