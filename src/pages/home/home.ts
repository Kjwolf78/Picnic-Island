import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BeachesPage } from '../beaches/beaches';

import { DogbeachPage } from '../dogbeach/dogbeach';

import { PlaygroundPage } from '../playground/playground';

import { BoatrampPage } from '../boatramp/boatramp';

import { DiscgolfPage } from '../discgolf/discgolf';

import { MapPage } from '../map/map';
import { LocationProvider } from '../../providers/location-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
locations=[];

constructor(public navCtrl: NavController,private locationProvider:LocationProvider) {
  this.locations=locationProvider.locations;

}
gotoBeaches() {
  this.navCtrl.push(BeachesPage);
}

gotodogbeach() {
  this.navCtrl.push(DogbeachPage);
}

gotoplayground() {
  this.navCtrl.push(PlaygroundPage);
}

gotoboatramp() {
  this.navCtrl.push(BoatrampPage);
}

gotodiscgolf() {
  this.navCtrl.push(DiscgolfPage);
}

gotomap(){
  this.navCtrl.push(MapPage)
}


}
