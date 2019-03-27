import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { TrainerPage } from '../trainer/trainer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  data: any[] = [];
  trainerByDay: any[] = [];
  timeslotByID: any[] = [];
  allTimeslots: any[] = [];

  dayNow: any;


  now = new Date();


  constructor(public navCtrl: NavController, private _data: DataProvider, public navParams: NavParams, public modal: ModalController) {
    this.getAllData();
    this.getTrainerByDay();
    this.getTimeslotByID();
    this.getAllTimeslots();
    

    const newDate = this.navParams.get('newDate');
    if(newDate != null){
      this.now = newDate;
    }

    
    //Getting day from datenow string
    this.dayNow = String(this.now).split(' ').slice(0, 1).join(' ');
    console.log(this.dayNow);


    

    
  }

  getDay()
  {
    var day;
    if(this.dayNow == 'Mon')
    {
      day = 'Monday';
    }
    else if(this.dayNow == 'Tue')
    {
      day = 'Tuesday';
    }
    else if(this.dayNow == 'Wed')
    {
      day = 'Wednesday';
    }
    else if(this.dayNow == 'Thu')
    {
      day = 'Thursday';
    }
    else if(this.dayNow == 'Fri')
    {
      day = 'Friday';
    }
    else if(this.dayNow == 'Sat')
    {
      day = 'Saturday';
    } 
    else
    {
      day = 'Sunday';
    }

    return day;
  }


  getAllData(){
    
    this._data.getAllData()
    .subscribe(res => {
      this.data = res;
      // console.log(this.data[0].timeslots[0].day);
    }, (err) => {
      alert("failed loading json data");
    })
  }
  

  getTrainerByDay(){
    
    this._data.getTrainerByDay()
    .subscribe(res => {
      this.trainerByDay = res;
      // console.log(this.trainerByDay);
    }, (err) => {
      alert("failed loading json data");
    })
  }

  getTimeslotByID()
  {
    this._data.getTimeslotByID()
    .subscribe(res => {
      this.timeslotByID = res;
      // console.log(this.timeslotByID);
    }, (err) => {
      alert("failed loading json data");
    })
  }



  getAllTimeslots()
  {
    this._data.getAllTimeslots()
    .subscribe(res => {
      this.allTimeslots = res;
      // console.log(this.timeslotByID);
    }, (err) => {
      alert("failed loading json data");
    })
  }


  openTrainerModal(timeslot){
    const trainerModal = this.modal.create(TrainerPage, {timeslotData: timeslot});

    
    trainerModal.present();

  }












  increment(){
    this.now.setDate(this.now.getDate() + 1);
    console.log(this.now);
    this.navCtrl.setRoot(HomePage, {newDate: this.now});
    
  }

  decrement(){
    this.now.setDate(this.now.getDate() - 1);
    console.log(this.now);
    this.navCtrl.setRoot(HomePage, {newDate: this.now});
    
  }
}
