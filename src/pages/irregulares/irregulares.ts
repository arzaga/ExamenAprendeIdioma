import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IrregularesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-irregulares',
  templateUrl: 'irregulares.html',
})
export class IrregularesPage {
items;
  constructor() {
    this.initializeItems();
  }
initializeItems(){
  this.items = [
    'arise  -  arose   -   arisen   -  	surgir',
    'awake  -  awoke   -   awoken   -   despertar(se)',
    'bear   -  bore    -   borne    -    soportar',
    'beat - beat - beaten	- golpear',
    'become - became - become - convertirse',
    'begin - began - begun - empezar',
    'bend - bent - bent - doblar(se)',
    'bet - bet - bet - apostar',
    'bid - bid - bid - pujar',
    'bind - bound - bound - encuadernar',
    'cast - cast - cast - tirar',
    'catch - caught - caught - coger',
    'come - came - come - venir',
    'cut - cut - cut - cortar',
    'deal	- dealt	dealt	tratar',
    'dig	- dug	- dug -	cavar',
    'do	- did -	done -	hacer',
    'draw	- drew -	drawn -	dibujar',
    'dream -	dreamt -	dreamt -	soñar',
    'forgive	forgave	forgiven	perdonar',
    'freeze	froze	frozen	helar(se)',
    'get	got	got	conseguir',
    'give	gave	given	dar'

  ]
}
getItems(ev){
    this.initializeItems();

  var val = ev.target.value;

  //Si el valor es una cadena vacia, no se filtra ningun elemento
  if(val && val.trim() != ''){
    this.items = this.items.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad BuscarPage');
  // }

}
