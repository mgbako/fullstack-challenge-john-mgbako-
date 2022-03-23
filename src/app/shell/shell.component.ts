import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../pages/auth/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isCollapsed = false;
  user: any;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.credentials
  }

  logout() {
    this.authService.logout();
  }

  getFirstLetter(name:string){
    return name[0].toUpperCase();
  }

}
