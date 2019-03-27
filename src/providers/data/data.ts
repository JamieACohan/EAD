import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


@Injectable()
export class DataProvider {



  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getAllData()
  {
 

    return this.http.get('https://androidapi20190325010622.azurewebsites.net/api/Gym/all')
      .map(response => response.json());
      
  }

  getTrainerByDay()
  {
    return this.http.get('https://androidapi20190325010622.azurewebsites.net/api/Gym/trainerByDay?day=tuesday')
    .map(response => response.json());
  }

  getTimeslotByID()
  {
    return this.http.get('https://androidapi20190325010622.azurewebsites.net/api/Gym/timeslotByID?id=1')
    .map(response => response.json());
  }

  getAllTimeslots()
  {
    return this.http.get('https://androidapi20190325010622.azurewebsites.net/api/Gym/allTimeslots')
    .map(response => response.json());
  }

  getTrainerByID(id)
  {

    return this.http.get('https://androidapi20190325010622.azurewebsites.net/api/Gym/trainerByID?id=' + id)
    .map(response => response.json());
  }

}
