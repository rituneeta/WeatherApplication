import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getWeatherData(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=81f3c296f2458fc59b8469bfc8c8bb4e`);
  }
}
