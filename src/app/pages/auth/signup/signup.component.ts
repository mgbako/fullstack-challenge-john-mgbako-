import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { finalize } from 'rxjs';
import { CountryModel } from 'src/app/app.model';
import { SharedService } from 'src/app/services/shared.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  authForm: FormGroup;
  formloader: boolean;
  showPassword: boolean = false;
  validations: any[];
  strength: any;
  show: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.formloader = true;

    const data = {
      email: this.authForm.value.email,
      password: this.authForm.value.password,
    };

    this.authForm.value.countryCode = this.authService
      .signup(data)
      .pipe(
        finalize(() => {
          this.formloader = false;
        })
      )
      .subscribe(
        (res: any) => {
          if (!res.status)
            return this.createNotification(
              'error',
              'Registration',
              res.message
            );
          this.authService.setCredentials(res.data);

          this.createNotification('success', 'Registration', res.message);
          this.route.queryParams.subscribe((params) =>
            this.router.navigate([params.redirect || '/auth/login'], {
              replaceUrl: true,
            })
          );
        },
        (error) => {
          let er = JSON.parse(error);
          this.createNotification('error', 'Registration', er.error.message);
          console.log(er);
        }
      );
  }

  onValidate(event: any) {
    const password = event.target.value;

    const total = password.length > 5;
    const character = password.search(/[A-Z]/) > -1;
    const numeric = password.search(/[0-9]/) > -1;
    const specialCharacter = password.search(/[$&:;+,=?@#.]/) > -1;
    this.validations = [total, character, numeric, specialCharacter];

    this.strength = this.validations.reduce((acc, cur) => acc + cur);
  }

  onValidatePassword(event: any) {
    const confirmPassword = event.target.value;
    if (this.authForm.value.password !== this.authForm.value.confirmPassword) {
      this.authForm.setErrors({ confirmPassword: true });
    } else {
      this.authForm.setErrors(null);
    }
  }

  createForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, EmailValidator]],
      password: ['', [Validators.required]],
      terms: [false, [Validators.required]],
    });
  }

  createNotification(type = 'info', title: string, message: string): void {
    this.notification.create(type, title, message);
  }

  onShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
