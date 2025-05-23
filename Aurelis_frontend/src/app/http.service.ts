import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getData(): any {
    return this.http.get(
      'http://szklarnia-api-final-v2.dth7caa6bqd9b6hr.polandcentral.azurecontainer.io/dane',
    );
  }
}
