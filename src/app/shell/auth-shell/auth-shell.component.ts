import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss'],
})
export class AuthShellComponent implements OnInit {
  array = [1, 2, 3];
  constructor() {}

  ngOnInit() {}
}
