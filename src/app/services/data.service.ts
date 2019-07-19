import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get(`https://swapi.co/api/planets/`).pipe(
      map((data: any) => data.results));
  }

  getSpecies(): Observable<any> {
    return this.http.get(`https://swapi.co/api/species/`).pipe(
      map((data: any) => data.results));
  }

  getStarships(): Observable<any> {
    return this.http.get(`https://swapi.co/api/starships/`).pipe(
      map((data: any) => data.results));
  }

  getVehicles(): Observable<any> {
    return this.http.get(`https://swapi.co/api/vehicles/`).pipe(
      map((data: any) => data.results));
  }

  getPeopleByCutom(url: string): Observable<any> {
    return this.getResults(url).pipe(
      map((data: any) => {
        return data.results;
      }));
  }
  getViaAjax(url: string): Observable<any>  {
    return ajax.get(url).pipe(
      map((response: any) => {
        return response.response.results;
      })
    );
  }
  getResults(url: string): Observable<any> {
    return Observable.create((observer) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = () => {
        if (request.status === 200) {
          observer.next(JSON.parse(request.response));
          observer.complete();
        } else {
          observer.error(new Error(request.statusText));
        }
      };
      request.onerror = () => {
        observer.error(new Error('Unknown error'));
      };
      request.send();
    });
  }
}
