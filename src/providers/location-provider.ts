import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as home from '../assets/data/home.json';
import * as beaches from '../assets/data/beaches.json';
import * as boatramp from '../assets/data/boatramp.json';
import * as discgolf from '../assets/data/discgolf.json';
import * as dogbeach from '../assets/data/dogbeach.json';
import * as playground from '../assets/data/playground.json';
import * as map from '../assets/data/map.json';

//import beaches.json here. Look at the line above. Instead of naming it "home", name it beaches.

@Injectable()
export class LocationProvider {
  
  locations=[];
  beachesSlides=[];
  boatrampSlides=[];
  discgolfSlides=[];
  dogbeachSlides=[];
  playgroundSlides=[];
  mapSlides=[];

  //add variable called beachesSlides here. It should look like the line above but not called locations.

  constructor(public http: Http) {
    this.locations = home.locations;
    this.beachesSlides = beaches.slides;
    this.boatrampSlides = boatramp.slides;
    this.discgolfSlides = discgolf.slides;
    this.dogbeachSlides = dogbeach.slides;
    this.playgroundSlides = playground.slides;
    this.mapSlides = map.slides;

    //define beachesSlides variable to beaches.json data here. Look at the line above to see how we set the locations variable to equal the data.locations
  }

}
