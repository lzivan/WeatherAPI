import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {environment} from 'src/environments/environment';
import {weatherdata} from "../models/weather-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class WeatherService{
  constructor(private http: HttpClient) { }

  getWXData(cityname: string): Observable<weatherdata>{
   return  this.http.get<weatherdata>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q',cityname)
        .set('unit', 'metric')
        .set('mode', 'json')
    })
  }
}
