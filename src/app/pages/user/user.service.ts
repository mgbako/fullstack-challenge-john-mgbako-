import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { LoggerService } from 'src/app/services/logger.service';

const routes = {
  users: '/users',
};

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<any> {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  onGetUsers() {
    return this.httpClient.get(`${routes.users}`);
  }

  onGetUserByEmail(email: string) {
    return this.httpClient.get(`${routes.users}/${email}`);
  }
}
