import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  url: string = "./../assets/Json/credManager.json"
  constructor(private http: HttpClient) { }

  public validatUser() {
    return this.http.get(this.url).pipe(map(resp => {
      return resp;
    }));
  }
  fetchUserData() {
    return this.http.get("https://randomuser.me/api/0.8/?results=20").pipe(map(resp => {
      return resp;
    }));
  }
}
