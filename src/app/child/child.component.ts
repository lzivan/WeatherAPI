import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {WeatherService} from "../service/weather-service";
import {weatherdata} from "../models/weather-model";

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() cityname: string = '';




  title = 'httpClient';
  currentWeather = {
    temperature: 0,
    humidity: 0
  };

  constructor(private wxService: WeatherService, private form: FormBuilder) {}

  //@ts-ignore
  weatherData: weatherdata;


  ngOnInit(): void {

    this.getWXData(this.cityname);
    this.cityname = '';
  }

  onSubmit(){
    this.getWXData(this.cityname);
    this.cityname= '';
  }
  getWXData(cityName: string) {
    this.wxService.getWXData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        }
      });
  }
}
