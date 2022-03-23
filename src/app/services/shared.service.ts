import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { defer, Observable } from 'rxjs';
import { BaseService } from '../core/base.service';
import { AppResponseModel, CountryModel } from '../app.model';

const routes = {
  rate: '/Rate',
  country: '/Country',
  occupation: '/Occupation',
};

@Injectable({
  providedIn: 'root',
})
export class SharedService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http);
  }

  onGetRate(
    sendingCurrencyCode: string,
    receivingCurrencyCode: string
  ): Observable<any> {
    return this.sendGet(`${routes.rate}`, {
      params: { sendingCurrencyCode, receivingCurrencyCode },
    });
  }

  onGetExchangeRate(): Observable<any> {
    return this.sendGet(`${routes.rate}/exchangerate`);
  }
  onGetOccupation(): Observable<any> {
    return this.sendGet(`${routes.occupation}`);
  }

  onGetCountries(): Observable<any> {
    return this.sendGet(`${routes.country}`);
  }

  onGetCountry(): Observable<any> {
    return defer(() => {
      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/countries.json');
        req.onload = () => {
          resolve(JSON.parse(req.response));
        };

        req.send();
      });
    });
  }
}
