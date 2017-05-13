import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationProvider } from '../../providers/location-provider';

/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  slides=[];

    constructor(public navCtrl: NavController,private locationProvider:LocationProvider) {
    this.slides=locationProvider.mapSlides;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
