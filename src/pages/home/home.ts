import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InglesPage } from '../ingles/ingles';
import { EspañolPage } from '../español/español';
import { ItalianoPage } from '../italiano/italiano';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
BotonIngles: any;
BotonEspanol: any;
BotonItaliano: any;
  constructor(public navController: NavController) {
this.BotonIngles = InglesPage;
this.BotonEspanol = EspañolPage;
this.BotonItaliano = ItalianoPage;
  }

}
