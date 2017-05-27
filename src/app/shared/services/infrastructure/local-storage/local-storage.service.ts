import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class LocalStorageService {
  
  static readonly ACCESS_TOKEN_KEY = "accesssToken";

  newSetItem = new Subject<any>();
  removedItem = new Subject<string>();
  
  constructor() { }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
    this.newSetItem.next({ key: key, value: value });
  }

  public getItem(key: string) : string {
    return localStorage.getItem(key);
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
    this.removedItem.next(key);
  }
}
