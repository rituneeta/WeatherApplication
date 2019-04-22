import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {WeatherComponent} from './weather/weather.component';
import { Clouds } from './weather/weather.component';
import 'rxjs/add/operator/map';
import { RootObject} from './weatherData';

@Injectable( /*{providedIn:'root'}*/)
export class DataService {

  public c:Clouds[];
  
url = 'http://api.openweathermap.org/data/2.5/weather?q=London';
  constructor(private http: HttpClient) { }
getFact(name: string) {
  return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&APPID=a5716569db0057ccef7a9b74c1f937b4`);
  //.map((response: Response) => <RootObject> response.json());

}



}
