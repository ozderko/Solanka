import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class HttpWrapper {
  private baseAppUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public post(url: string, body: any, options?: any): Observable<any> {
    return this.http.post(this.baseAppUrl + url, body, options);
  }

  public get(url: string, options?: any): Observable<any> {
    return this.http.get(this.baseAppUrl + url, options);
  }

  public put(url: string, body: any, options?: any): Observable<any> {
    return this.http.put(this.baseAppUrl + url, body, options);
  }

  public delete(url: string, options?: any): Observable<any> {
    return this.http.delete(this.baseAppUrl + url, options);
  }
}
