import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    public userService: UserService,
    private actRoute: ActivatedRoute
  ) {}
  user: { email: string };
  loader: boolean;

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      const email = params['email'];
      this.onGetUser(email);
    });
  }

  onGetUser(email: string) {
    this.loader = true;

    this.userService
      .onGetUserByEmail(email)
      .pipe(finalize(() => (this.loader = false)))
      .subscribe((res: any) => {
        res.status = this.user = res.data;
      });
  }
}
