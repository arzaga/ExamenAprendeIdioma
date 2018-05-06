import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IrregularesPage } from '../irregulares/irregulares';
import { TobePage } from '../tobe/tobe';
import { IngPage } from '../ing/ing';

import { PasadocontinuoPage } from '../pasadocontinuo/pasadocontinuo';
import { PasadosimplePage } from '../pasadosimple/pasadosimple';
import { PasadoperfectoPage } from '../pasadoperfecto/pasadoperfecto';

import { FuturosimplePage } from '../futurosimple/futurosimple';
import { FuturocontinuoPage } from '../futurocontinuo/futurocontinuo';
import { FuturogoingtoPage } from '../futurogoingto/futurogoingto';
/**
 * Generated class for the InglesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingles',
  templateUrl: 'ingles.html',
})
export class InglesPage {
  inglesVerbos: string = "verbos";
BotonIrregulares: any;
BotonTobe: any;
BotonIng: any;

BotonPasadocontinuo: any;
BotonPasadosimple: any;
BotonPasadoperfecto: any;

BotonFutursimple: any;
BotonFuturocontinuo: any;
BotonFuturogoingto: any;

constructor(public navController: NavController) {
this.BotonIrregulares = IrregularesPage;
this.BotonTobe = TobePage;
this.BotonIng = IngPage;

this.BotonPasadocontinuo = PasadocontinuoPage;
this.BotonPasadosimple = PasadosimplePage;
this.BotonPasadoperfecto = PasadoperfectoPage;

this.BotonFutursimple = FuturosimplePage;
this.BotonFuturocontinuo = FuturocontinuoPage;
this.BotonFuturogoingto = FuturogoingtoPage;

}

}
