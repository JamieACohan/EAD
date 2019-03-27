import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';



@IonicPage()
@Component({
  selector: 'page-trainer',
  templateUrl: 'trainer.html',
})
export class TrainerPage {

  timeslotData: any;
  trainerID: any;
  trainer: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private _data: DataProvider) {
  }

  getTrainerByID()
  {
    
      this._data.getTrainerByID(this.trainerID)
      .subscribe(res => {
        this.trainer = res;
        console.log(this.trainer)
        // console.log(this.timeslotByID);
      }, (err) => {
        alert("failed loading json data");
      })
    
  }

  ionViewDidLoad() {
    const data = this.navParams.get('timeslotData');
    this.timeslotData = data;
    this.trainerID = data.trainerId;
    

    this._data.getTrainerByID(data.trainerId)
    .subscribe(res => {
      this.trainer = res;
      console.log(this.trainer)
      // console.log(this.timeslotByID);
    }, (err) => {
      alert("failed loading json data");
    })
  }

  closeTrainerModal()
  {
    this.view.dismiss();
  }

}
