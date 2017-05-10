import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { BeachesPage } from '../pages/beaches/beaches';
import { DogbeachPage } from '../pages/dogbeach/dogbeach';
import { PlaygroundPage } from '../pages/playground/playground';
import { BoatrampPage } from '../pages/boatramp/boatramp';
import { DiscgolfPage } from '../pages/discgolf/discgolf';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationProvider } from '../providers/location-provider';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BeachesPage,
    DogbeachPage,
    PlaygroundPage,
    BoatrampPage,
    DiscgolfPage,
    MapPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BeachesPage,
    DogbeachPage,
    PlaygroundPage,
    BoatrampPage,
    DiscgolfPage,
    MapPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationProvider
  ]
})
export class AppModule {}
