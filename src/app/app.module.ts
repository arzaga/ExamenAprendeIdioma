import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BuscarPage,
    ContactoPage,
    AcercaDePage,
    ProductosPage,
    HorarioPage,
    InglesPage,
    EspañolPage,
    ItalianoPage,
    IrregularesPage,
    IngPage,
    TobePage,
    PasadocontinuoPage,
    PasadosimplePage,
    PasadoperfectoPage,
    FuturosimplePage,
    FuturocontinuoPage,
    FuturogoingtoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BuscarPage,
    ContactoPage,
    AcercaDePage,
    ProductosPage,
    HorarioPage,
    InglesPage,
    EspañolPage,
    ItalianoPage,
    IrregularesPage,
    IngPage,
    TobePage,
    PasadocontinuoPage,
    PasadosimplePage,
    PasadoperfectoPage,
    FuturosimplePage,
    FuturocontinuoPage,
    FuturogoingtoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
