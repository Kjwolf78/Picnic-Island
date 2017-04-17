import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BeachesPage } from '../beaches/beaches';
import { DogbeachPage } from '../dogbeach/dogbeach';
import { PlaygroundPage} from '../playground/playground';
import { BoatrampPage} from '../boatramp/boatramp';
import { DiscgolfPage} from '../discgolf/discgolf';
import { MapPage } from '../map/map';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = BeachesPage;
  tab3Root: any = DogbeachPage;
  tab4Root: any = PlaygroundPage;
  tab5Root: any = BoatrampPage;
  tab6Root: any = DiscgolfPage;
  tab7Root: any = MapPage;

  

  constructor() {

  }
}
