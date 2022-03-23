import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AppResponseModel } from 'src/app/app.model';
import { BaseService } from 'src/app/core/base.service';

export interface Credentials {
  token: string;
  email: string;
}
export interface UserModel {
  email: string;
  emailConfirmationDate: string;
  firstName: string;
  id: string;
  isActive: boolean;
  isEmailConfirmed: boolean;
  lastName: string;
  phoneNumber: string;
}

interface RegistrationModel {
  email: string;
  password: string;
}

interface LoginModel {
  email: string;
  password: string;
}

const routes = {
  register: '/users/signup',
  login: '/users/login',
};

// api​/Transaction​/verifyaccount

const credentialsKey = 'credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<any> {
  private _credentials: Credentials | null = null;
  private _saveToken: any;

  user = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private router: Router) {
    super(http);
    const savedCredentials =
      sessionStorage.getItem(credentialsKey) ||
      localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  onLoggedin(context: Credentials): Observable<Credentials> {
    // Replace by proper authentication call
    this.setCredentials(context);
    return of(context);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout() {
    // Customize credentials invalidation here
    this.setCredentials();
    this.router.navigate(['/', 'auth', 'login']);
    location.reload();
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  get isAuthenticated(): boolean {
    return !!this.credentials;
  }

  get token(): any {
    if (this._credentials) {
      this._saveToken = this._credentials.token;
    } else {
      this._saveToken = null;
    }
    return this._saveToken;
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  public setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }

  signup(data: RegistrationModel): Observable<AppResponseModel<any>> {
    return this.sendPost<AppResponseModel<any>>(`${routes.register}`, data);
  }

  login(data: LoginModel): Observable<AppResponseModel<Credentials>> {
    return this.sendPost<AppResponseModel<Credentials>>(
      `${routes.login}`,
      data
    );
  }
}
