import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { LoggerService } from 'src/app/services/logger.service';

const routes = {
  dashboard:"/api/Dashboard",
  dashboardTnx:"/api/Dashboard/tnx/lumpsum",
  dashboardTnxGraph:"/api/Dashboard/tnx/graph",
  analytics:"/api/Transaction/Analytics",
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService<any>{

  constructor(private logger:LoggerService, public httpClient: HttpClient) {
    super(httpClient);
   }


   onGetdasboard(){
     return this.httpClient.get(`${routes.dashboard}` );
  }
   onGetdAnalytics(){
     return this.httpClient.get(`${routes.analytics}` );
  }
   onGetdasboardTnx(interval:string='Daily'){
     return this.httpClient.get(`${routes.dashboardTnx}`, {params: {interval}} );
  }
  onGetDashboardTnxGraph(interval:string='Daily'){
     return this.httpClient.get(`${routes.dashboardTnxGraph}`, {params: {interval}} );
  }
}
