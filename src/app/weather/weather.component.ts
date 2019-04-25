import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() data: List;
  url: string;
  comment: string;
  temp_min: number;
  temp_max: number;
  pressure: number;
  date: string;
  datetime: Date;
  weekDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  constructor() {
   }
 
  ngOnInit() {
    this.url = 'http://openweathermap.org/img/w/' + this.data.weather[0].icon + '.png';
    this.comment = this.data.weather[0].description;
    this.temp_min = this.data.main.temp_min;
    this.temp_max = this.data.main.temp_max;
    this.pressure = this.data.main.pressure;
    this.datetime = new Date(this.data.dt_txt);
    this.date = this.weekDays[this.datetime.getDay()];
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

