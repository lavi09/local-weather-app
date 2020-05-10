 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentWeather } from '../icurrent-weather';
import { environment } from 'src/environments/environment';

interface ICurrentWeatherData{
  weather: [
    {
     description: string,
     icon: string
    }
  ],
  main: {
    temp: number
  },
  dt: number,
  sys: {
    country: string
  },
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getCurrentWeather(city: string, country: string){
    return this.httpClient.get<ICurrentWeatherData>
     `${environment.baseUrl}`api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}
    }
}
