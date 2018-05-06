import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
items;
  constructor() {
    this.initializeItems();
  }
initializeItems(){
  this.items = [
    'Anahi',
    'Bernardo',
    'Juan',
    'Alexis',
    'Arturo',
    'Issac',
    'Francisco',
    'Alfredo',
    'Robert',
    'Ramón',
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
