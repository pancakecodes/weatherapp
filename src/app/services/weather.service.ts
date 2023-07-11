import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

apiKey = '33d90e191e974b7ca53174440231107';
URI: string = '';

  constructor(private httpClient: HttpClient) {
   this.URI = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}`;

   }

   getWeather(cityName: string){
      return this.httpClient.get(`${this.URI}&q=${cityName}`);
    }
}
