import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationProvider } from '../../providers/location-provider';

/*
  Generated class for the Dogbeach page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dogbeach',
  templateUrl: 'dogbeach.html'
})
export class DogbeachPage {
  slides=[];

 constructor(public navCtrl: NavController,private locationProvider:LocationProvider) {
    this.slides=locationProvider.dogbeachSlides;
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DogbeachPage');
  }

}
