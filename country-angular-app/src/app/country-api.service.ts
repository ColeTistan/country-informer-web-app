import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  constructor(private _http:HttpClient) { }

  urlBase = 'https://restcountries.eu/rest/v2'

  // Constructs http get request
  httpConstructor(httpEndpoint: any)
  {
    return this._http.get(httpEndpoint);
  }

  // gets all countries
  getAllCountries():Observable<any>
  {
    return this.httpConstructor(`${this.urlBase}/all`);
  }

  // gets countries by user search. Ex: United
  getCountryByName(searchQuery: String)
  {
    return this.httpConstructor(`${this.urlBase}/name/${searchQuery}`)
                .pipe(catchError(this.handleError));
  }

  // handles server or http request errors
  handleError(error: any) 
  {
    return throwError(error.message || "Server Error")
  }
}
