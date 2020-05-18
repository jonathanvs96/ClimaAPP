import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  llave = '5f5aa95f8a1428ad92ab2482cabe8523';
  baseUrl = 'http://api.ipstack.com/check';

  constructor(private http: HttpClient) {}

  getinfo() {
    const params = new HttpParams().set('access_key', this.llave);

    return this.http.get(this.baseUrl, {params}).pipe(mergeMap(
      (info: any) => {
        const params = {
          lat: info.latitude,
          lon: info.logitude,
          product: 'civillight',
          output:'json'
        };
        return this.http.get('http://www.7timer.info/bin/api.pl', {params}).pipe(
            map(clima => ({clima, info}))
          );
      }
    ));
  }

}
