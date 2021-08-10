import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  constructor(private _http:HttpClient) { }

  getAllCountries():Observable<any>
  {
    return this._http.get('https://restcountries.eu/rest/v2/all');
  }
}
