import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationProvider } from '../../providers/location-provider';

/*
  Generated class for the Playground page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-playground',
  templateUrl: 'playground.html'
})
export class PlaygroundPage {
  slides=[];

  constructor(public navCtrl: NavController,private locationProvider:LocationProvider) {
    this.slides=locationProvider.playgroundSlides;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaygroundPage');
  }

}
