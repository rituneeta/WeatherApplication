import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Clouds {
  public arrayclouds: Object[];
 };

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
@Input() view;
@Input() cityName;
url:string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.url = 'http://openweathermap.org/img/w/' + this.view.weather[0].icon + '.png';


  }
 



}
