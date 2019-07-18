import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor( private http: HttpClient) {}

  getFilms(): Observable<any> {
    return this.http.get(`https://swapi.co/api/films/`).pipe(
      map((data: any) => data.results));
  }

  getFilmsByCutom(url: string): Observable<any> {
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
