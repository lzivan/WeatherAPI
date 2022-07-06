import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {WeatherService} from "../service/weather-service";
import {weatherdata} from "../models/weather-model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
//   title = 'httpClient';
//   currentWeather = {
//     temperature: 0,
//     pressure: 0,
//     humidity: 0
//   };
//
//   city: string = "Boston";
//   units: string = "imperial";
// //Moved these into the FormGroup for Way 3
//   cityControl2: FormControl = new FormControl('boston', [Validators.required,Validators.max(6)]);
//   unitsControl2: FormControl = new FormControl('imperial');
//
//   weatherFormGroup = this.form.group({
//     cityControl: ['boston', Validators.required],
//     unitsControl: [''],
//     subform: this.form.group({
//       detail: ['']
//     })
//   })
//
//   constructor(private wxService: WeatherService, private form: FormBuilder) {}
//
//   getWeather() {
//     this.wxService.getWeather().subscribe(
//       response => {
//         this.currentWeather = response['current']['temp']// similar to current.temp
//
//       }
//     );
//   }
//   getWX(){
//     this.wxService.getWeather(this.city).subscribe(
//       response => {
//         console.log(`WX: ${response}`);
//       }
//     )
//   }
//   getWeatherByCity() {
//     this.wxService.getWeatherByCity(this.city, this.units).subscribe(
//       response => {
//         this.currentWeather = response['main'];// similar to current.temp
//         this.currentWeather = {
//           temperature: response['main']['temp'],
//           pressure: response['main']['pressure'],
//           humidity: response['main']['humidity'],
//         }
//         console.log(`main looks like this: ${response['main']}`)
//       }
//     );
//   }
//   getWeatherByCityWay2() {
//     this.wxService.getWeatherByCity(this.cityControl2.value, this.unitsControl2.value).subscribe(
//       response => {
//         this.currentWeather = response['main'];// similar to current.temp
//         this.currentWeather = {
//           temperature: response['main']['temp'],
//           pressure: response['main']['pressure'],
//           humidity: response['main']['humidity'],
//         }
//         console.log(`main looks like this: ${response['main']}`)
//       }
//     );
//   }
//   getWeatherByCityWay3() {
//     //do all of your form checking here...
//
//     //then call the service..(*separation of responsibility*)
//     this.wxService.getWeatherByFormGroup(this.weatherFormGroup).subscribe(
//       response => {
//         this.currentWeather = response['main'];// similar to current.temp
//         this.currentWeather = {
//           temperature: response['main']['temp'],
//           pressure: response['main']['pressure'],
//           humidity: response['main']['humidity'],
//         }
//         console.log(`main looks like this: ${response['main']}`)
//       }
//     );
//   }

  title = 'httpClient';
  currentWeather = {
    temperature: 0,
    humidity: 0
  };

  constructor(private wxService: WeatherService, private form: FormBuilder) {}

  cityname: string = 'Boston';
  //@ts-ignore
  weatherData: weatherdata;


  ngOnInit(): void {

    // this.getWXData(this.cityname);
    // this.cityname = '';
  }

  onSubmit(){
    // this.getWXData(this.cityname);
    // this.cityname= '';
  }
  // getWXData(cityName: string) {
  //   this.wxService.getWXData(cityName)
  //     .subscribe({
  //       next: (response) => {
  //         this.weatherData = response;
  //         console.log(response);
  //       }
  //     });
  // }

}
