import { Component, OnInit } from '@angular/core';
import { CountryApiService } from '../country-api.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private _service:CountryApiService) { }

  countries:any = []

  ngOnInit(): void {
    this._service.getAllCountries().subscribe((result) => {
      console.log(result)
      this.countries = result;
    });
  }
}
