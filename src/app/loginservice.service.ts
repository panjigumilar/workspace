import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

//implements
import {ILoginservice} from './login';
import {Hero} from './hero';

import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {

  constructor(private http:HttpClient) { }
  httpdata;
  data_validas
  private _url: string = "/assets/data/employes.json";
  private _url2: string = "/assets/data/employes2.json";
  private _url3: string = "/assets/data/hero.json";
  private heroesUrl:string="/assets/data/hero.json";

  
  tes(): Observable<ILoginservice[]>{
    return this.http.get<ILoginservice[]>(this._url); 
  }

  testing(){
    return this.http.get<ILoginservice[]>(this._url2);
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this._url3, hero, httpOptions);
  }    

  deleteHero (id: number): Observable<{}> {
    const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();

    const options = term ?
    { params: new HttpParams().set('name', term) } : {};  
    return this.http.get<Hero[]>(this.heroesUrl, options)

  }

  updateHero (hero: Hero): Observable<Hero> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');
    return this.http.put<Hero>(this.heroesUrl, hero, httpOptions);
  }

}
