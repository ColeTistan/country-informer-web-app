import { Component, OnInit } from '@angular/core';
import { CountryApiService } from '../country-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _service:CountryApiService) { }

  searchQuery:String = '';
  countries:any = [];

  getCountryData(): void
  {
    if (this.searchQuery !== '') {
        this._service.getCountryByName(this.searchQuery).subscribe((data) => {
          console.log(data)
          this.countries = data
        }, (error) => {
          console.log(error)
        })
      }
    }

  getAllCountries() :void 
  {
    this._service.getAllCountries().subscribe((result) => {
      console.log(result)
      this.countries = result;
    })
  } 

  ngOnInit(): void {
    this.getCountryData()
    this.getAllCountries()  
  }
}
