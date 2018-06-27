import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit 
{
  inputCity;
  weatherCity;
  city = 'London';
  temp;

    constructor(private http: Http) { }

  ngOnInit() 
  {
  }

  searchCity()
  {
      this.inputCity = this.city;

      this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.inputCity + '&appid=ae63f754a64fccd1530faab96dca1fac').subscribe(
        (res: Response)=>
        {
          this.weatherCity = res.json();
          console.log(this.weatherCity);
                  
          this.temp = Math.round(parseInt(this.weatherCity.main.temp) - 273.15); //from kelvin to celsius and rounding
          
        })
  }

}
