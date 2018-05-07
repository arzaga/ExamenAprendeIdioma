webpackJsonp([17],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscarPage = /** @class */ (function () {
    function BuscarPage() {
        this.initializeItems();
    }
    BuscarPage.prototype.initializeItems = function () {
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
        ];
    };
    BuscarPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        //Si el valor es una cadena vacia, no se filtra ningun elemento
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BuscarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\buscar\buscar.html"*/'<!--\n  Generated template for the BuscarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buscar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list>\n  <ion-item *ngFor="let item of items">\n    {{ item }}\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\buscar\buscar.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], BuscarPage);
    return BuscarPage;
}());

//# sourceMappingURL=buscar.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactoPage = /** @class */ (function () {
    function ContactoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactoPage');
    };
    ContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacto',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\contacto\contacto.html"*/'<!--\n  Generated template for the ContactoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>contacto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\contacto\contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactoPage);
    return ContactoPage;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaDePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AcercaDePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcercaDePage = /** @class */ (function () {
    function AcercaDePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcercaDePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcercaDePage');
    };
    AcercaDePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acerca-de',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\acerca-de\acerca-de.html"*/'<!--\n  Generated template for the AcercaDePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>acercaDe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\acerca-de\acerca-de.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AcercaDePage);
    return AcercaDePage;
}());

//# sourceMappingURL=acerca-de.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HorarioPage = /** @class */ (function () {
    function HorarioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HorarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorarioPage');
    };
    HorarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horario',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\horario\horario.html"*/'<!--\n  Generated template for the HorarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Horario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="grid-basic-page">\n<ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>Lunes-Martes</div>\n      </ion-col>\n        <ion-col>\n          <div>Miércoles</div>\n        </ion-col>\n      <ion-col>\n        <div>Jueves-Viernes</div>\n      </ion-col>\n    </ion-row>\n</ion-grid>\n\n<ion-grid>\n  <ion-row>\n<ion-col>\n  <div>10:00-18:00</div>\n</ion-col>\n<ion-col>\n  <div>10:00-17:00</div>\n</ion-col>\n<ion-col>\n  <div>9:00-17:00</div>\n</ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <div>Sábado</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <div>10:00-15:00</div>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\horario\horario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HorarioPage);
    return HorarioPage;
}());

//# sourceMappingURL=horario.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IrregularesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the IrregularesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IrregularesPage = /** @class */ (function () {
    function IrregularesPage() {
        this.initializeItems();
    }
    IrregularesPage.prototype.initializeItems = function () {
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
        ];
    };
    IrregularesPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        //Si el valor es una cadena vacia, no se filtra ningun elemento
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    IrregularesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-irregulares',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\irregulares\irregulares.html"*/'<!--\n  Generated template for the IrregularesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Irregulares</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list >\n  <ion-row class="card-letra-pequena">\n    <ion-col>\n\n          INFINITIVO\n\n    </ion-col>\n      <ion-col>\n\n          PASADO\n\n      </ion-col>\n      <ion-col>\n\n          PARTICIPIO\n\n      </ion-col>\n      <ion-col>\n\n          TRADUCCION\n\n      </ion-col>\n  </ion-row>\n  <ion-item *ngFor="let item of items" text-center>\n    <p>{{ item }}</p>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\irregulares\irregulares.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], IrregularesPage);
    return IrregularesPage;
}());

//# sourceMappingURL=irregulares.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TobePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TobePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TobePage = /** @class */ (function () {
    function TobePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TobePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TobePage');
    };
    TobePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tobe',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\tobe\tobe.html"*/'<!--\n  Generated template for the TobePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>To Be</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="imagenEstilo">\n<ion-item class="cards-bg">\n  <ion-card>\n    <img src="/assets/imgs/ingles/tobeEjemplo.png" alt=""/>\n\n\n\n</ion-card>\n</ion-item>\n<a title="botonTobeMas" href="https://www.inglessencillo.com/to-be" target="_blank">\n<button class="align" ion-button color="dark" alt="botonTobeMas">Aprende más!!</button>\n</a>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\tobe\tobe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TobePage);
    return TobePage;
}());

//# sourceMappingURL=tobe.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IngPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IngPage = /** @class */ (function () {
    function IngPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IngPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IngPage');
    };
    IngPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ing',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\ing\ing.html"*/'<!--\n  Generated template for the IngPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-item class="cards-bg">\n  <ion-card>\n      <ion-card-title>\n      Estructura del Presente <br>Continuo\n      </ion-card-title>\n      <ion-card-content>\n        [SUJETO] + am/are/is (verbo to be) +<br>\n        [VERBO CON -ING ( gerundio)]\n      </ion-card-content>\n      <img src="/assets/imgs/ingles/ingEjemplo.png" alt=""/>\n</ion-card>\n</ion-item>\n\n<a title="botonTobeMas" href="https://www.inglessencillo.com/presente-continuo" target="_blank">\n<button class="align" ion-button color="dark" alt="botonTobeMas">Aprende más!!</button>\n</a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\ing\ing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IngPage);
    return IngPage;
}());

//# sourceMappingURL=ing.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasadocontinuoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PasadocontinuoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasadocontinuoPage = /** @class */ (function () {
    function PasadocontinuoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PasadocontinuoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasadocontinuoPage');
    };
    PasadocontinuoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pasadocontinuo',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\pasadocontinuo\pasadocontinuo.html"*/'<!--\n  Generated template for the PasadocontinuoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pasado Continuo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-item class="cards-bg">\n  <ion-card>\n      <ion-card-title>\n      Estructura del Pasado <br>Continuo\n      </ion-card-title>\n      <ion-card-content>\n        [SUJETO] + was/were + VERBO <br>\n        [con terminación -ing (gerundio)]\n      </ion-card-content>\n      <img src="/assets/imgs/ingles/pasadocontinuoEjemplo.png" alt=""/>\n</ion-card>\n</ion-item>\n\n<a title="botonTobeMas" href="https://www.inglessencillo.com/pasado-continuo" target="_blank">\n<button class="align" ion-button color="dark" alt="botonTobeMas">Aprende más!!</button>\n</a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\pasadocontinuo\pasadocontinuo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], PasadocontinuoPage);
    return PasadocontinuoPage;
    var _a, _b;
}());

//# sourceMappingURL=pasadocontinuo.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasadosimplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PasadosimplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasadosimplePage = /** @class */ (function () {
    function PasadosimplePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PasadosimplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasadosimplePage');
    };
    PasadosimplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pasadosimple',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\pasadosimple\pasadosimple.html"*/'<!--\n  Generated template for the PasadosimplePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pasado Simple</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-item class="cards-bg">\n  <ion-card>\n      <ion-card-title>\n      Estructura del Pasado <br>Simple\n      </ion-card-title>\n      <ion-card-content>\n        [SUJETO] + [VERBO EN PASADO, <br>\n        TERMINACIÓN "-ed"]\n      </ion-card-content>\n      <img src="/assets/imgs/ingles/pasadosimpleEjemplo.png" alt=""/>\n</ion-card>\n</ion-item>\n\n<a title="botonTobeMas" href="https://www.inglessencillo.com/pasado-simple" target="_blank">\n<button class="align" ion-button color="dark" alt="botonTobeMas">Aprende más!!</button>\n</a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\pasadosimple\pasadosimple.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PasadosimplePage);
    return PasadosimplePage;
}());

//# sourceMappingURL=pasadosimple.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasadoperfectoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PasadoperfectoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasadoperfectoPage = /** @class */ (function () {
    function PasadoperfectoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PasadoperfectoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasadoperfectoPage');
    };
    PasadoperfectoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pasadoperfecto',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\pasadoperfecto\pasadoperfecto.html"*/'<!--\n  Generated template for the PasadoperfectoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pasado Perfecto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-item class="cards-bg">\n  <ion-card>\n      <ion-card-title>\n      Estructura del Pasado <br>Perfecto\n      </ion-card-title>\n      <ion-card-content>\n        [SUJETO] + had + <br>\n        [VERBO EN PARTICIPIO]\n      </ion-card-content>\n      <img src="/assets/imgs/ingles/pasadoperfectoEjemplo.png" alt=""/>\n</ion-card>\n</ion-item>\n\n<a title="botonTobeMas" href="https://www.inglessencillo.com/pluscuamperfecto" target="_blank">\n<button class="align" ion-button color="dark" alt="botonTobeMas">Aprende más!!</button>\n</a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\pasadoperfecto\pasadoperfecto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PasadoperfectoPage);
    return PasadoperfectoPage;
}());

//# sourceMappingURL=pasadoperfecto.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductosPage = /** @class */ (function () {
    function ProductosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.music = "rock";
    }
    ProductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosPage');
    };
    ProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productos',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\productos\productos.html"*/'<!--\n  Generated template for the ProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>productos</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="music">\n      <ion-segment-button value="rock">\n      Rock\n      </ion-segment-button>\n      <ion-segment-button value="pop">\n      Pop\n      </ion-segment-button>\n      <ion-segment-button value="cumbias">\n      Cumbias\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<!-- ROCK -->\n<ion-content>\n  <div [ngSwitch]="music">\n    <ion-list *ngSwitchCase="\'rock\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/metalica.jpg">\n        </ion-thumbnail>\n        <h2>Metalica</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!-- POP -->\n  <div [ngSwitch]="music">\n    <ion-list *ngSwitchCase="\'pop\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/ECDL.jpg">\n        </ion-thumbnail>\n        <h2>El canto del Loco</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!-- CUMBIAS -->\n  <div [ngSwitch]="music">\n    <ion-list *ngSwitchCase="\'cumbias\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/angeles.png">\n        </ion-thumbnail>\n        <h2>Los Angeles Azules</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\productos\productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acerca-de/acerca-de.module": [
		286,
		16
	],
	"../pages/buscar/buscar.module": [
		284,
		15
	],
	"../pages/contacto/contacto.module": [
		285,
		14
	],
	"../pages/español/español.module": [
		287,
		13
	],
	"../pages/futurocontinuo/futurocontinuo.module": [
		288,
		2
	],
	"../pages/futurogoingto/futurogoingto.module": [
		289,
		1
	],
	"../pages/futurosimple/futurosimple.module": [
		290,
		0
	],
	"../pages/horario/horario.module": [
		291,
		12
	],
	"../pages/ing/ing.module": [
		293,
		11
	],
	"../pages/ingles/ingles.module": [
		292,
		10
	],
	"../pages/irregulares/irregulares.module": [
		296,
		9
	],
	"../pages/italiano/italiano.module": [
		294,
		8
	],
	"../pages/pasadocontinuo/pasadocontinuo.module": [
		295,
		7
	],
	"../pages/pasadoperfecto/pasadoperfecto.module": [
		298,
		6
	],
	"../pages/pasadosimple/pasadosimple.module": [
		297,
		5
	],
	"../pages/productos/productos.module": [
		300,
		4
	],
	"../pages/tobe/tobe.module": [
		299,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ingles_ingles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__espa_ol_espa_ol__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__italiano_italiano__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navController) {
        this.navController = navController;
        this.BotonIngles = __WEBPACK_IMPORTED_MODULE_2__ingles_ingles__["a" /* InglesPage */];
        this.BotonEspanol = __WEBPACK_IMPORTED_MODULE_3__espa_ol_espa_ol__["a" /* EspañolPage */];
        this.BotonItaliano = __WEBPACK_IMPORTED_MODULE_4__italiano_italiano__["a" /* ItalianoPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Aprende!!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Aprende un Idioma</h3>\n<!-- <ion-item>\n  <ion-range [(ngModel)]="brightness">\n    <ion-icon range-left small name="sunny"></ion-icon>\n    <ion-icon range-right name="sunny"></ion-icon>\n  </ion-range>\n</ion-item> -->\n<ion-item class="cards-bg">\n  <ion-card>\n    <img src="/assets/imgs/IdiomasMenu.png" alt=""/>\n      <ion-card-title>\n        ¿Quieres aprender?\n      </ion-card-title>\n      <ion-card-content>\n        Inicia seleccionando un idioma!!\n    </ion-card-content>\n\n    <ion-row text-center>\n      <ion-col>\n      <button ion-button clear small color="danger" [navPush]="BotonIngles">Inglés</button>\n      </ion-col>\n\n      <ion-col>\n        <button ion-button clear small color="danger" [navPush]="BotonEspanol">Español</button>\n      </ion-col>\n      <ion-col>\n            <button ion-button clear small color="danger" [navPush]="BotonItaliano">Italiano</button>\n      </ion-col>\n\n</ion-row>\n\n</ion-card>\n\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buscar_buscar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contacto_contacto__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_acerca_de_acerca_de__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_productos_productos__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_horario_horario__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ingles_ingles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_espa_ol_espa_ol__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_italiano_italiano__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_irregulares_irregulares__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ing_ing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tobe_tobe__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pasadocontinuo_pasadocontinuo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pasadosimple_pasadosimple__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pasadoperfecto_pasadoperfecto__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_futurosimple_futurosimple__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_futurocontinuo_futurocontinuo__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_futurogoingto_futurogoingto__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_buscar_buscar__["a" /* BuscarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_acerca_de_acerca_de__["a" /* AcercaDePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_horario_horario__["a" /* HorarioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ingles_ingles__["a" /* InglesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_espa_ol_espa_ol__["a" /* EspañolPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_italiano_italiano__["a" /* ItalianoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_irregulares_irregulares__["a" /* IrregularesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ing_ing__["a" /* IngPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tobe_tobe__["a" /* TobePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pasadocontinuo_pasadocontinuo__["a" /* PasadocontinuoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pasadosimple_pasadosimple__["a" /* PasadosimplePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pasadoperfecto_pasadoperfecto__["a" /* PasadoperfectoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_futurosimple_futurosimple__["a" /* FuturosimplePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_futurocontinuo_futurocontinuo__["a" /* FuturocontinuoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_futurogoingto_futurogoingto__["a" /* FuturogoingtoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buscar/buscar.module#BuscarPageModule', name: 'BuscarPage', segment: 'buscar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacto/contacto.module#ContactoPageModule', name: 'ContactoPage', segment: 'contacto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acerca-de/acerca-de.module#AcercaDePageModule', name: 'AcercaDePage', segment: 'acerca-de', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/español/español.module#EspañolPageModule', name: 'EspañolPage', segment: 'español', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/futurocontinuo/futurocontinuo.module#FuturocontinuoPageModule', name: 'FuturocontinuoPage', segment: 'futurocontinuo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/futurogoingto/futurogoingto.module#FuturogoingtoPageModule', name: 'FuturogoingtoPage', segment: 'futurogoingto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/futurosimple/futurosimple.module#FuturosimplePageModule', name: 'FuturosimplePage', segment: 'futurosimple', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horario/horario.module#HorarioPageModule', name: 'HorarioPage', segment: 'horario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ingles/ingles.module#InglesPageModule', name: 'InglesPage', segment: 'ingles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ing/ing.module#IngPageModule', name: 'IngPage', segment: 'ing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/italiano/italiano.module#ItalianoPageModule', name: 'ItalianoPage', segment: 'italiano', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pasadocontinuo/pasadocontinuo.module#PasadocontinuoPageModule', name: 'PasadocontinuoPage', segment: 'pasadocontinuo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/irregulares/irregulares.module#IrregularesPageModule', name: 'IrregularesPage', segment: 'irregulares', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pasadosimple/pasadosimple.module#PasadosimplePageModule', name: 'PasadosimplePage', segment: 'pasadosimple', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pasadoperfecto/pasadoperfecto.module#PasadoperfectoPageModule', name: 'PasadoperfectoPage', segment: 'pasadoperfecto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tobe/tobe.module#TobePageModule', name: 'TobePage', segment: 'tobe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_buscar_buscar__["a" /* BuscarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_acerca_de_acerca_de__["a" /* AcercaDePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_horario_horario__["a" /* HorarioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ingles_ingles__["a" /* InglesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_espa_ol_espa_ol__["a" /* EspañolPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_italiano_italiano__["a" /* ItalianoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_irregulares_irregulares__["a" /* IrregularesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ing_ing__["a" /* IngPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tobe_tobe__["a" /* TobePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pasadocontinuo_pasadocontinuo__["a" /* PasadocontinuoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pasadosimple_pasadosimple__["a" /* PasadosimplePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pasadoperfecto_pasadoperfecto__["a" /* PasadoperfectoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_futurosimple_futurosimple__["a" /* FuturosimplePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_futurocontinuo_futurocontinuo__["a" /* FuturocontinuoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_futurogoingto_futurogoingto__["a" /* FuturogoingtoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buscar_buscar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contacto_contacto__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_acerca_de_acerca_de__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_productos_productos__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_horario_horario__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ingles_ingles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_espa_ol_espa_ol__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_italiano_italiano__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Buscar', component: __WEBPACK_IMPORTED_MODULE_6__pages_buscar_buscar__["a" /* BuscarPage */] },
            { title: 'Contacto', component: __WEBPACK_IMPORTED_MODULE_7__pages_contacto_contacto__["a" /* ContactoPage */] },
            { title: 'Acerca De', component: __WEBPACK_IMPORTED_MODULE_8__pages_acerca_de_acerca_de__["a" /* AcercaDePage */] },
            { title: 'Productos', component: __WEBPACK_IMPORTED_MODULE_9__pages_productos_productos__["a" /* ProductosPage */] },
            { title: 'Horario', component: __WEBPACK_IMPORTED_MODULE_10__pages_horario_horario__["a" /* HorarioPage */] },
            { title: 'Ingles', component: __WEBPACK_IMPORTED_MODULE_11__pages_ingles_ingles__["a" /* InglesPage */] },
            { title: 'Español', component: __WEBPACK_IMPORTED_MODULE_12__pages_espa_ol_espa_ol__["a" /* EspañolPage */] },
            { title: 'Italiano', component: __WEBPACK_IMPORTED_MODULE_13__pages_italiano_italiano__["a" /* ItalianoPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuturocontinuoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FuturocontinuoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FuturocontinuoPage = /** @class */ (function () {
    function FuturocontinuoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FuturocontinuoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuturocontinuoPage');
    };
    FuturocontinuoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-futurocontinuo',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\futurocontinuo\futurocontinuo.html"*/'<!--\n  Generated template for the FuturocontinuoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Futuro Continuo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<ion-item class="cards-bg">\n  <ion-card>\n      <ion-card-title>\n      Estructura del Futuro <br>Continuo\n      </ion-card-title>\n      <ion-card-content>\n        SUJETO + will be + VERBO<br>\n        CON TERMINACIÓN-ing ( gerundio)\n      </ion-card-content>\n      <img src="/assets/imgs/ingles/futurocontinuoEjemplo.png" alt=""/>\n</ion-card>\n</ion-item>\n\n<a title="botonTobeMas" href="https://www.inglessencillo.com/futuro-continuo" target="_blank">\n<button class="align" ion-button color="dark" alt="botonTobeMas">Aprende más!!</button>\n</a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\futurocontinuo\futurocontinuo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FuturocontinuoPage);
    return FuturocontinuoPage;
}());

//# sourceMappingURL=futurocontinuo.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuturogoingtoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FuturogoingtoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FuturogoingtoPage = /** @class */ (function () {
    function FuturogoingtoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FuturogoingtoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuturogoingtoPage');
    };
    FuturogoingtoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-futurogoingto',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\futurogoingto\futurogoingto.html"*/'<!--\n  Generated template for the FuturogoingtoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Futuro Going To</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<ion-item class="cards-bg">\n  <ion-card>\n      <ion-card-title>\n      Estructura del Futuro <br>Going To\n      </ion-card-title>\n      <ion-card-content>\n        SUJETO + am/are/is going to<br>\n        + VERBO EN INFINITIVO\n      </ion-card-content>\n      <img src="/assets/imgs/ingles/futurogoingtoEjemplo.png" alt=""/>\n</ion-card>\n</ion-item>\n\n<a title="botonTobeMas" href="https://www.inglessencillo.com/futuro-going-to" target="_blank">\n<button class="align" ion-button color="dark" alt="botonTobeMas">+¡¡Aprende más!!</button>\n</a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\futurogoingto\futurogoingto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FuturogoingtoPage);
    return FuturogoingtoPage;
}());

//# sourceMappingURL=futurogoingto.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuturosimplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FuturosimplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FuturosimplePage = /** @class */ (function () {
    function FuturosimplePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FuturosimplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuturosimplePage');
    };
    FuturosimplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-futurosimple',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\futurosimple\futurosimple.html"*/'<!--\n  Generated template for the FuturosimplePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Futuro Simple</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<ion-item class="cards-bg">\n  <ion-card>\n      <ion-card-title>\n      Estructura del Futuro <br>Simple\n      </ion-card-title>\n      <ion-card-content>\n        SUJETO + will/shall + VERBO\n      </ion-card-content>\n      <img src="/assets/imgs/ingles/futurosimpleEjemplo.png" alt=""/>\n</ion-card>\n</ion-item>\n\n<a title="botonTobeMas" href="https://www.inglessencillo.com/futuro-simple" target="_blank">\n<button class="align" ion-button color="dark" alt="botonTobeMas">Aprende más!!</button>\n</a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\futurosimple\futurosimple.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FuturosimplePage);
    return FuturosimplePage;
}());

//# sourceMappingURL=futurosimple.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspañolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EspañolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EspañolPage = /** @class */ (function () {
    function EspañolPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EspañolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EspañolPage');
    };
    EspañolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-español',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\español\español.html"*/'<!--\n  Generated template for the EspañolPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Español</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="music">\n      <ion-segment-button value="rock">\n      Rock\n      </ion-segment-button>\n      <ion-segment-button value="pop">\n      Pop\n      </ion-segment-button>\n      <ion-segment-button value="cumbias">\n      Cumbias\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<!-- ROCK -->\n<ion-content>\n  <div [ngSwitch]="music">\n    <ion-list *ngSwitchCase="\'rock\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/metalica.jpg">\n        </ion-thumbnail>\n        <h2>Metalica</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!-- POP -->\n  <div [ngSwitch]="music">\n    <ion-list *ngSwitchCase="\'pop\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/ECDL.jpg">\n        </ion-thumbnail>\n        <h2>El canto del Loco</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!-- CUMBIAS -->\n  <div [ngSwitch]="music">\n    <ion-list *ngSwitchCase="\'cumbias\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/angeles.png">\n        </ion-thumbnail>\n        <h2>Los Angeles Azules</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\español\español.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EspañolPage);
    return EspañolPage;
}());

//# sourceMappingURL=español.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InglesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__irregulares_irregulares__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tobe_tobe__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ing_ing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pasadocontinuo_pasadocontinuo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pasadosimple_pasadosimple__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pasadoperfecto_pasadoperfecto__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__futurosimple_futurosimple__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__futurocontinuo_futurocontinuo__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__futurogoingto_futurogoingto__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the InglesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InglesPage = /** @class */ (function () {
    function InglesPage(navController) {
        this.navController = navController;
        this.inglesVerbos = "verbos";
        this.BotonIrregulares = __WEBPACK_IMPORTED_MODULE_2__irregulares_irregulares__["a" /* IrregularesPage */];
        this.BotonTobe = __WEBPACK_IMPORTED_MODULE_3__tobe_tobe__["a" /* TobePage */];
        this.BotonIng = __WEBPACK_IMPORTED_MODULE_4__ing_ing__["a" /* IngPage */];
        this.BotonPasadocontinuo = __WEBPACK_IMPORTED_MODULE_5__pasadocontinuo_pasadocontinuo__["a" /* PasadocontinuoPage */];
        this.BotonPasadosimple = __WEBPACK_IMPORTED_MODULE_6__pasadosimple_pasadosimple__["a" /* PasadosimplePage */];
        this.BotonPasadoperfecto = __WEBPACK_IMPORTED_MODULE_7__pasadoperfecto_pasadoperfecto__["a" /* PasadoperfectoPage */];
        this.BotonFutursimple = __WEBPACK_IMPORTED_MODULE_8__futurosimple_futurosimple__["a" /* FuturosimplePage */];
        this.BotonFuturocontinuo = __WEBPACK_IMPORTED_MODULE_9__futurocontinuo_futurocontinuo__["a" /* FuturocontinuoPage */];
        this.BotonFuturogoingto = __WEBPACK_IMPORTED_MODULE_10__futurogoingto_futurogoingto__["a" /* FuturogoingtoPage */];
    }
    InglesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ingles',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\ingles\ingles.html"*/'<!--\n  Generated template for the InglesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inglés</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top text-center>\n    <ion-segment [(ngModel)]="inglesVerbos">\n      <ion-segment-button value="verbos">\n      Verbos\n      </ion-segment-button>\n      <ion-segment-button value="pronombres">\n      Pronombres\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<!-- VERBOS -->\n<ion-content text-center>\n  <div [ngSwitch]="inglesVerbos">\n    <!-- PRESENTE!! -->\n    <ion-list *ngSwitchCase="\'verbos\'" text-center>\n        <ion-slides pager>\n\n          <ion-slide style="background-color: green">\n            <!-- Inicia el item que va dentro de cada slide -->\n\n          <a style="text-decoration:none" title="BotonIrregulares" [navPush]="BotonIrregulares">\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/ingles/irregulares.jpg" alt="BotonIrregulares">\n              </ion-thumbnail>\n              <h2>Irregulares</h2>\n            </ion-item>\n          </a>\n\n          </ion-slide>\n\n          <ion-slide style="background-color: green">\n            <!-- Inicia el item que va dentro de cada slide -->\n          <a style="text-decoration:none" title="BotonTobe" [navPush]="BotonTobe">\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/ingles/tobe.jpg" alt="BotonTobe">\n              </ion-thumbnail>\n              <h2>To Be</h2>\n            </ion-item>\n          </a>\n          </ion-slide>\n\n          <ion-slide style="background-color: green">\n            <!-- Inicia el item que va dentro de cada slide -->\n          <a style="text-decoration:none" title="BotonIng" [navPush]="BotonIng">\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/ingles/ing.jpg" alt="BotonIng">\n              </ion-thumbnail>\n              <h2>ING</h2>\n            </ion-item>\n          </a>\n          </ion-slide>\n\n        </ion-slides>\n              Presente\n    </ion-list>\n<!-- PASADO!! -->\n    <ion-list *ngSwitchCase="\'verbos\'" text-center>\n        <ion-slides pager>\n\n          <ion-slide style="background-color: green">\n            <!-- Inicia el item que va dentro de cada slide -->\n            <a style="text-decoration:none" title="BotonPasadosimple" [navPush]="BotonPasadosimple">\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/ingles/pasadosimple.jpg" >\n              </ion-thumbnail>\n              <h2>Pasado Simple </h2>\n            </ion-item>\n          </a>\n          </ion-slide>\n\n          <ion-slide style="background-color: blue">\n            <!-- Inicia el item que va dentro de cada slide -->\n            <a style="text-decoration:none" title="BotonPasadocontinuo" [navPush]="BotonPasadocontinuo">\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/ingles/pasadocontinuo.jpg" >\n              </ion-thumbnail>\n              <h2>Pasado Continuo </h2>\n            </ion-item>\n          </a>\n          </ion-slide>\n\n          <ion-slide style="background-color: red">\n            <!-- Inicia el item que va dentro de cada slide -->\n            <a style="text-decoration:none" title="BotonPasadoperfecto" [navPush]="BotonPasadoperfecto">\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/ingles/pasadoperfecto.png">\n              </ion-thumbnail>\n              <h2>Pasado Perfecto </h2>\n            </ion-item>\n          </a>\n          </ion-slide>\n\n        </ion-slides>\n                          Pasado\n    </ion-list>\n<!-- FUTURO!! -->\n<ion-list *ngSwitchCase="\'verbos\'" text-center>\n    <ion-slides pager>\n\n      <ion-slide style="background-color: green">\n        <!-- Inicia el item que va dentro de cada slide -->\n        <a style="text-decoration:none" title="BotonFutursimple" [navPush]="BotonFutursimple">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ingles/futurosimple.png">\n          </ion-thumbnail>\n          <h2>Futuro Simple </h2>\n        </ion-item>\n      </a>\n      </ion-slide>\n\n      <ion-slide style="background-color: blue">\n        <!-- Inicia el item que va dentro de cada slide -->\n        <a style="text-decoration:none" title="BotonFuturocontinuo" [navPush]="BotonFuturocontinuo">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ingles/futurocontinuo.png">\n          </ion-thumbnail>\n          <h2>Futuro Continuo </h2>\n        </ion-item>\n      </a>\n      </ion-slide>\n\n      <ion-slide style="background-color: red">\n        <!-- Inicia el item que va dentro de cada slide -->\n        <a style="text-decoration:none" title="BotonFuturogoingto" [navPush]="BotonFuturogoingto">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ingles/futurogoingto.jpg">\n          </ion-thumbnail>\n          <h2>Futuro Going To </h2>\n        </ion-item>\n      </a>\n      </ion-slide>\n\n    </ion-slides>\n          Futuro\n</ion-list>\n  </div>\n  <!-- PRONOMBRES -->\n  <br>\n  <div [ngSwitch]="inglesVerbos">\n    <ion-list *ngSwitchCase="\'pronombres\'">\n\n        <ion-grid>\n            <ion-row>\n              <ion-col>\n                ESPAÑOL\n                <!-- ESPAÑOL -->\n                  <ion-card>\n                <p>Yo</p>\n                <p>Tu, Usted</p>\n                <p>El</p>\n                <p>Ella</p>\n                <p>Eso</p>\n                <p>Nosotros/as</p>\n                <p>Ustedes</p>\n                <p>Ellos/as</p>\n                  </ion-card>\n              </ion-col>\n                <ion-col>\n                  INGLÉS\n                  <!-- INGLÉS -->\n                  <ion-card>\n                    <p>I</p>\n                    <p>You</p>\n                    <p>He</p>\n                    <p>She</p>\n                    <p>It</p>\n                    <p>We</p>\n                    <p>You</p>\n                    <p>They</p>\n                  </ion-card>\n                </ion-col>\n\n                <ion-col>\n                  PRONUNCIACIÓN\n                  <!-- PRONUNCIACION -->\n                  <ion-card>\n                    <p>ái</p>\n                    <p>iú</p>\n                    <p>jí</p>\n                    <p>xí</p>\n                    <p>it</p>\n                    <p>uí</p>\n                    <p>iú</p>\n                    <p>déi</p>\n                  </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\ingles\ingles.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], InglesPage);
    return InglesPage;
    var _a;
}());

//# sourceMappingURL=ingles.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItalianoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ItalianoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItalianoPage = /** @class */ (function () {
    function ItalianoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItalianoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItalianoPage');
    };
    ItalianoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-italiano',template:/*ion-inline-start:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\italiano\italiano.html"*/'<!--\n  Generated template for the ItalianoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Italiano</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="music">\n      <ion-segment-button value="rock">\n      Rock\n      </ion-segment-button>\n      <ion-segment-button value="pop">\n      Pop\n      </ion-segment-button>\n      <ion-segment-button value="cumbias">\n      Cumbias\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<!-- ROCK -->\n<ion-content>\n  <div [ngSwitch]="music">\n    <ion-list *ngSwitchCase="\'rock\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/metalica.jpg">\n        </ion-thumbnail>\n        <h2>Metalica</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!-- POP -->\n  <div [ngSwitch]="music">\n    <ion-list *ngSwitchCase="\'pop\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/ECDL.jpg">\n        </ion-thumbnail>\n        <h2>El canto del Loco</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!-- CUMBIAS -->\n  <div [ngSwitch]="music">\n    <ion-list *ngSwitchCase="\'cumbias\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/angeles.png">\n        </ion-thumbnail>\n        <h2>Los Angeles Azules</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexi\Documents\Tecll\Semestre10\Prog.Hibr\unidad3\ionic\ExamenAprendeIdioma\src\pages\italiano\italiano.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItalianoPage);
    return ItalianoPage;
}());

//# sourceMappingURL=italiano.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map