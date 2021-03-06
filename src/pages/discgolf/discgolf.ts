import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationProvider } from '../../providers/location-provider';

/*
  Generated class for the Discgolf page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-discgolf',
  templateUrl: 'discgolf.html'
})
export class DiscgolfPage {
  slides=[];

  constructor(public navCtrl: NavController,private locationProvider:LocationProvider) {
    this.slides=locationProvider.discgolfSlides;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscgolfPage');
  }

}
