import { Observable, of } from 'rxjs';
import { IWeatherService } from '../iweather-service';
import { ICurrentWeather } from '../icurrent-weather';

export class WeatherServiceFake implements IWeatherService{
  private fakeWeather: ICurrentWeather = {
    city: 'Bellevue',
    country: 'US',
    date: new Date(),
    image: '',
    temperature: 61,
    description: 'light rain'
  }

  public getCurrentWeather(city: string, country: string) : Observable<ICurrentWeather>{
    return of(this.fakeWeather);
  }
}
