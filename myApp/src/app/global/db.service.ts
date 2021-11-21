import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) {}

  add(url: string, data: any) {
    return this.http.post(`${environment.api_url}/${url}`, data);
    // return this.http.post(environment.api_url + '/' + url, data);
  }
}
