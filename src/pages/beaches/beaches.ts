import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationProvider } from '../../providers/location-provider';
//import LocationProvider here. Look at home.ts for an example.

@Component({
  selector: 'page-beaches',
  templateUrl: 'beaches.html'
})
export class BeachesPage {
  slides=[];
  //add slides variable here like in home.ts but it won't be called locations. Call is slides.

  constructor(public navCtrl: NavController,private locationProvider:LocationProvider) {
<<<<<<< HEAD
    this.slides=locationProvider.beachesSlides;
=======
    this.slides = locationProvider.beachesSlides;
>>>>>>> 521bcfa5664bcfb25b0465f87a118d021b6e3227
  
} /*add locationProvider here like we do in home.ts*/

//define slides variable here. Look to home.ts as reference but it won't be equal to locationProvider.locations


  ionViewDidLoad() {
    console.log('ionViewDidLoad BeachesPage');
  }

}
