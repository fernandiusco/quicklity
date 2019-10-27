(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n         <ion-title style=\"padding-left: 30%\" >Ajustes</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div text-center>\n\t\t\t\t<h4>Registro de Usuario</h4>\n\t\t\t</div>\n<h5></h5>\n\n  <ion-item>\n      <ion-label position=\"floating\">¿Quien Eres?</ion-label>\n      <ion-input [(ngModel)]=\"usuario\" placeholder=\"Pon tu nombre aqui\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">¿Para que Empresa Trabajas?</ion-label>\n        <ion-input [(ngModel)]=\"empresa\" placeholder=\"Pon tu empresa Aqui\"></ion-input>\n      </ion-item>\n      <ion-item>\n\n      </ion-item>\n      <ion-item>\n        <h5>Nombre Registrado: {{usuario}}</h5>  \n      </ion-item>\n      <ion-item>\n          <h5>Empresa Registrada: {{empresa}}</h5>\n      </ion-item>\n      <ion-item>\n\n      </ion-item>\n      <ion-item>\n          <ion-label style=\"padding-left: 6%\" >Versión v0.1</ion-label>\n          <ion-button size=\"default\" color=\"success\">Buscar Updates</ion-button>\n      </ion-item>\n      <ion-item>\n          <ion-label style=\"padding-left: 5%\" >¿Sugerencias?</ion-label>\n          <ion-button href=\"mailto:fernando.f.barrio-hernandez.external@airbus.com?subject=Feedback Sobre App Quicklity\" size=\"default\" color=\"danger\">Mandame un Mail</ion-button>\n      </ion-item>\n\n  \n\n\n</ion-content>\n<ion-button (click)=\"guardarajustes()\" size=\"large\" expand=\"full\" >Guardar</ion-button>\n<h1></h1>"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ajustes.service */ "./src/app/ajustes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");





let SettingsPage = class SettingsPage {
    constructor(miServicio, NavCtrl, storage) {
        this.miServicio = miServicio;
        this.NavCtrl = NavCtrl;
        this.storage = storage;
    }
    ngOnInit() {
        this.storage.get('nombre').then((val) => {
            this.usuario = val;
        });
        this.storage.get('empresa').then((val) => {
            this.empresa = val;
        });
    }
    guardarajustes() {
        this.storage.set('nombre', this.usuario);
        this.storage.set('empresa', this.empresa);
        this.miServicio.usuario = this.usuario;
        this.miServicio.empresa = this.empresa;
        this.NavCtrl.navigateBack('/home');
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ajustes_service__WEBPACK_IMPORTED_MODULE_2__["AjustesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
        styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ajustes_service__WEBPACK_IMPORTED_MODULE_2__["AjustesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map