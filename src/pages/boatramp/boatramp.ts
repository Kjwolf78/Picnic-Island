import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationProvider } from '../../providers/location-provider';
/*
  Generated class for the Boatramp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-boatramp',
  templateUrl: 'boatramp.html'
})
export class BoatrampPage {
  slides=[];

  constructor(public navCtrl: NavController,private locationProvider:LocationProvider) {
    this.slides=locationProvider.boatrampSlides;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BoatrampPage');
  }

}
