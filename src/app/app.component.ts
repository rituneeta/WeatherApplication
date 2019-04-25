import { Component } from '@angular/core';
import {DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
   forecast: RootObject;
   city: string;
   url: string;
  comment: string;
  temp: number;
  pressure: number;
   dayList: List[] = [];
  constructor(private data: DataService) {

  }
  getData() {
    this.dayList = [];
    this.data.getWeatherData(this.city).subscribe((data: RootObject) => {
      this.forecast = data;
      console.log(this.forecast);
      this.url = 'http://openweathermap.org/img/w/' + this.forecast.list[0].weather[0].icon + '.png';
      this.comment = this.forecast.list[0].weather[0].description;
      this.temp = this.forecast.list[0].main.temp;
      this.pressure = this.forecast.list[0].main.pressure;
      this.dayList.push(this.forecast.list[8]);
      this.dayList.push(this.forecast.list[16]);
      this.dayList.push(this.forecast.list[24]);
      this.dayList.push(this.forecast.list[32]);
    });
    console.log(this.forecast);
    
  }

}
export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  pod: string;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
}

export interface RootObject {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}
