import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {WeatherComponent} from './weather/weather.component';
import { Clouds } from './weather/weather.component';
//import { RootObject } from './weatherData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  url:string;
  name: string;
   marks: any[];
   cloudData: RootObject;
   dayToDayData: List[]=[];
   


  constructor(private data: DataService) {
    // this.name='fg';
  }
  getData(){
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    this.data.getFact(this.name).subscribe((d: RootObject)=>{

         this.cloudData = d;
         this.dayToDayData=[];

         this.dayToDayData.push(this.cloudData.list[0]);
         this.dayToDayData.push(this.cloudData.list[2]);
         this.dayToDayData.push(this.cloudData.list[11]);
         this.dayToDayData.push(this.cloudData.list[21]);
         this.dayToDayData.push(this.cloudData.list[31]);
         this.dayToDayData.push(this.cloudData.list[35]);
         
         let tempdata = this.dayToDayData.map((data)=>{
          data['day'] = days[new Date(data.dt_txt).getDay()];
          return data;
       })
       
       this.dayToDayData = tempdata;

        console.log ( this.dayToDayData );


         console.log ( this.cloudData );

     });
  }
  getCloudData()
  {

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

