(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selector-selector-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selector/selector.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selector/selector.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title class=\"ion-text-center\">{{fase}}</ion-title>\n    <ion-title class=\"ion-text-center\">Selector de Avión</ion-title>\n      </ion-toolbar>\n </ion-header>\n\n<ion-content>\n\n    <ion-item>\n        <ion-label position=\"floating\">MSN</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"msn\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>Versión</ion-label>\n          <ion-select [(ngModel)]=\"version\" placeholder=\"V1000 / V900\">\n            <ion-select-option value=\"v900\">V900</ion-select-option>\n            <ion-select-option value=\"v1000\">V1000</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Estación</ion-label>\n            <ion-select [(ngModel)]=\"vgf\" placeholder=\"VGF\">\n              <ion-select-option value=\"VGF310\">VGF 310</ion-select-option>\n              <ion-select-option value=\"VGF320\">VGF 320</ion-select-option>\n              <ion-select-option value=\"VGF330\">VGF 330</ion-select-option>\n              <ion-select-option value=\"VGF340\">VGF 340</ion-select-option>\n              <ion-select-option value=\"VGF410\">VGF 410</ion-select-option>\n              <ion-select-option value=\"VGF420\">VGF 420</ion-select-option>\n             \n            </ion-select>\n          </ion-item>\n\n<ion-item > \n    <ion-label  class=\"ion-text-center\">Selecciona Zona</ion-label>\n</ion-item>\n\n          <ion-segment [(ngModel)]=\"upperlower\" (ionChange)=\"cambiodefoto()\" >\n              <ion-segment-button value=\"UPPER\">\n                <ion-label>Upper</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"LOWER\">\n                <ion-label>Lower</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n\n<img src={{foto}}>\n<!--  <img src=\"/assets/s19.PNG\">  -->\n\n         </ion-content>\n\n         <ion-button (click)=\"almacenaravion()\" (click)=\"comenzarinspeccion()\" size=\"large\">Comenzar Inspección</ion-button>\n         \n         <h1></h1>\n"

/***/ }),

/***/ "./src/app/selector/selector.module.ts":
/*!*********************************************!*\
  !*** ./src/app/selector/selector.module.ts ***!
  \*********************************************/
/*! exports provided: SelectorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorPageModule", function() { return SelectorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selector_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selector.page */ "./src/app/selector/selector.page.ts");







const routes = [
    {
        path: '',
        component: _selector_page__WEBPACK_IMPORTED_MODULE_6__["SelectorPage"]
    }
];
let SelectorPageModule = class SelectorPageModule {
};
SelectorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_selector_page__WEBPACK_IMPORTED_MODULE_6__["SelectorPage"]]
    })
], SelectorPageModule);



/***/ }),

/***/ "./src/app/selector/selector.page.scss":
/*!*********************************************!*\
  !*** ./src/app/selector/selector.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  padding-left: 15%;\n  padding-top: 2%;\n  width: 90%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0b3IvQzpcXFVzZXJzXFxGZXJcXHF1aWNrbGl0eS9zcmNcXGFwcFxcc2VsZWN0b3JcXHNlbGVjdG9yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VsZWN0b3Ivc2VsZWN0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdG9yL3NlbGVjdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfSIsImltZyB7XG4gIHBhZGRpbmctbGVmdDogMTUlO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/selector/selector.page.ts":
/*!*******************************************!*\
  !*** ./src/app/selector/selector.page.ts ***!
  \*******************************************/
/*! exports provided: SelectorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorPage", function() { return SelectorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ajustes.service */ "./src/app/ajustes.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let SelectorPage = class SelectorPage {
    constructor(navCrtl, miServicio, toastController, storage) {
        this.navCrtl = navCrtl;
        this.miServicio = miServicio;
        this.toastController = toastController;
        this.storage = storage;
        this.foto = "/assets/S19.PNG";
    }
    ngOnInit() {
        this.fase = this.miServicio.fase;
        console.log(this.fase);
    }
    comenzarinspeccion() {
        if (this.msn == undefined || this.version == undefined || this.vgf == undefined || this.upperlower == undefined) {
            this.aviso();
        }
        else {
            this.navCrtl.navigateForward('/marcador');
        }
    }
    almacenaravion() {
        this.miServicio.msn = this.msn;
        this.miServicio.version = this.version;
        this.miServicio.vgf = this.vgf;
        this.miServicio.upperlower = this.upperlower;
        console.log(this.miServicio.msn);
        console.log(this.miServicio.version);
        console.log(this.miServicio.vgf);
        console.log(this.miServicio.upperlower);
        console.log(this.miServicio.usuario);
        console.log(this.miServicio.fecha);
    }
    cambiodefoto() {
        if (this.upperlower == "UPPER") {
            this.foto = "/assets/S19upper.png";
        }
        else {
            this.foto = "/assets/S19lower.png";
        }
    }
    aviso() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                position: 'top',
                color: 'danger',
                message: ' Completa Todos Los Campos Para Continuar!',
                duration: 1500,
            });
            toast.present();
        });
    }
};
SelectorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
SelectorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selector',
        template: __webpack_require__(/*! raw-loader!./selector.page.html */ "./node_modules/raw-loader/index.js!./src/app/selector/selector.page.html"),
        styles: [__webpack_require__(/*! ./selector.page.scss */ "./src/app/selector/selector.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], SelectorPage);



/***/ })

}]);
//# sourceMappingURL=selector-selector-module-es2015.js.map