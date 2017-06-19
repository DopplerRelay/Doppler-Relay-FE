import { Injectable } from '@angular/core';
import { HttpProxyService } from "app/shared/services/infrastructure/http-proxy/http-proxy.service";
import { Observable } from 'rxjs/Rx';
import { EventItem } from "app/shared/models/event-item";
import { ApiEventItemCollection } from "app/shared/models/api/api-event-item-collection";
import { ApplicationError } from "app/shared/services/infrastructure/application-error";
import { AuthService } from "app/shared/services/auth/auth.service";
import { Identity } from "app/shared/models/identity";

@Injectable()
export class ReportsService {

  constructor(private http: HttpProxyService, private authService: AuthService) { 
  }

  getEventsStatistics(from: Date, to: Date): Observable<EventItem[]>{

      let params = {
        per_page: 200, // TODO: move this hardcoded value to setting
        from: from.toISOString(),
        to: to.toISOString()
      };

      return this.http.get(`accounts/${this.authService.currentIdentity.relayAccounts[0]}/statistics/events/by_day`, { params: params })
      .map(
        response => 
        {
          var apiItems = response.json() as ApiEventItemCollection;
          
          var modelItems = new Array<EventItem>();

          apiItems.items.forEach(element => {
            modelItems.push(new EventItem(element));
          });

          return modelItems;
      });
    }
}
