import { Injectable } from '@angular/core';
import { HttpProxyService } from "app/shared/services/infrastructure/http-proxy/http-proxy.service";

@Injectable()
export class ReportsService {

  constructor(private http: HttpProxyService) { }

}
