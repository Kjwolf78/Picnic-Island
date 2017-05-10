import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as data from '../assets/data/home.json';
/*
  Generated class for the LocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationProvider {
locations=[];
  constructor(public http: Http) {
    console.log(data.locations.length);
    this.locations = data.locations;
  }

}
