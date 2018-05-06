import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BuscarPage } from '../pages/buscar/buscar';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { ProductosPage } from '../pages/productos/productos';
import { HorarioPage } from '../pages/horario/horario';

import { InglesPage } from '../pages/ingles/ingles';
import { EspañolPage } from '../pages/español/español';
import { ItalianoPage } from '../pages/italiano/italiano';

import { IrregularesPage } from '../pages/irregulares/irregulares';
import { IngPage } from '../pages/ing/ing';
import { TobePage } from '../pages/tobe/tobe';

import { PasadocontinuoPage } from '../pages/pasadocontinuo/pasadocontinuo';
import { PasadosimplePage } from '../pages/pasadosimple/pasadosimple';
import { PasadoperfectoPage } from '../pages/pasadoperfecto/pasadoperfecto';

import { FuturosimplePage } from '../pages/futurosimple/futurosimple';
import { FuturocontinuoPage } from '../pages/futurocontinuo/futurocontinuo';
import { FuturogoingtoPage } from '../pages/futurogoingto/futurogoingto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Buscar', component: BuscarPage },
      { title: 'Contacto', component: ContactoPage },
      { title: 'Acerca De', component: AcercaDePage },
      { title: 'Productos', component: ProductosPage },
        { title: 'Horario', component: HorarioPage },
        { title: 'Ingles', component: InglesPage },
        { title: 'Español', component: EspañolPage },
        { title: 'Italiano', component: ItalianoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
