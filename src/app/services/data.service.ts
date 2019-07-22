import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {Planets} from '../entities/classes/planets';
import {People} from '../entities/classes/people';
import {Starships} from '../entities/classes/starships';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) {}

  getPeople(pageUrl = "https://swapi.co/api/people/?page=1"): Observable<People[]>{
    return this.http.get(pageUrl).pipe(
      map((data: any) => data));
  }

  getPlanets(pageUrl = "https://swapi.co/api/planets/?page=1"): Observable<Planets[]>{
    return this.http.get(pageUrl).pipe(
      map((data: any) => data));
  }

  getStarships(pageUrl = "https://swapi.co/api/starships/?page=1"): Observable<Starships[]>{
    return this.http.get(pageUrl).pipe(
      map((data: any) => data));
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
