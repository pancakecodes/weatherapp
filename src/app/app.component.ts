import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Weather } from './weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-weather';

  weather: any = {};



constructor(private weatherService: WeatherService){

}

  ngOnInit(){
   
  }

  getWeather(cityName: string){
    this.weatherService.getWeather(cityName)
    .subscribe(
      res => { console.log(res); 
      this.weather = res},
      err => console.log(err)
    )
  }


  submitLocation(cityName: HTMLInputElement){
   if(cityName.value) {
    this.getWeather(cityName.value);
    cityName.value = '';
   } else {
      alert('Please. Insert a city name');
    }
    cityName.focus();
    return false;
  }

}
