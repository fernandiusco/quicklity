(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marcador-marcador-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/marcador/marcador.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marcador/marcador.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-grid class=\"ion-text-center\">\n        <ion-row>\n          \n            <ion-col style=\"font-weight: bold\" >\n              Frame\n            </ion-col>\n            <ion-col (click)=\"resetearvariables()\" style=\"font-weight: bold\" >\n              Omega\n            </ion-col>\n            <ion-col  style=\"font-weight: bold\" >\n              Lado\n            </ion-col>\n         </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n\n\n\n    <ion-grid class=\"ion-text-center\">\n        <ion-row class=\"ion-justify-content-around\" >\n          \n            <ion-col size=\"4\" >\n               \n                <ion-list>\n\n                    <ion-item>\n                            <ion-button class=\"centraritem1\" (click)=\"marcarfr('94')\" expand=\"block\" fill=\"clear\" color=\"{{framecolor}}\" expand=\"full\" size=\"large\">94</ion-button>\n                   </ion-item>\n                                                 \n                    <ion-item>\n                            <ion-button class=\"centraritem1\"  (click)=\"marcarfr('95')\"expand=\"block\" fill=\"clear\" color=\"{{framecolor}}\" expand=\"full\" size=\"large\">95</ion-button>\n                    </ion-item>\n                    <ion-item>\n                                <ion-button class=\"centraritem1\"  (click)=\"marcarfr('96')\"expand=\"block\" fill=\"clear\" color=\"{{framecolor}}\" expand=\"full\" size=\"large\">96</ion-button>\n                    </ion-item>\n                    <ion-item>\n                                <ion-button class=\"centraritem1\"  (click)=\"marcarfr('97')\"expand=\"block\" fill=\"clear\" color=\"{{framecolor}}\" expand=\"full\" size=\"large\">97</ion-button>\n                    </ion-item>\n                    <ion-item>\n                                <ion-button class=\"centraritem1\"  (click)=\"marcarfr('98')\"expand=\"block\" fill=\"clear\" color=\"{{framecolor}}\" expand=\"full\" size=\"large\">98</ion-button>\n                    </ion-item>\n                    <ion-item>\n                                <ion-button class=\"centraritem1\"  (click)=\"marcarfr('99')\"expand=\"block\" fill=\"clear\" color=\"{{framecolor}}\" expand=\"full\" size=\"large\">99</ion-button>\n                    </ion-item>\n                    <ion-item>\n                                <ion-button class=\"centraritem2\"  (click)=\"marcarfr('100')\"expand=\"block\" fill=\"clear\" color=\"{{framecolor}}\" expand=\"full\" size=\"large\">100</ion-button>\n                    </ion-item>\n                    <ion-item>\n                                <ion-button class=\"centraritem2\"  (click)=\"marcarfr('101')\"expand=\"block\" fill=\"clear\" color=\"{{framecolor}}\" expand=\"full\" size=\"large\">101</ion-button>\n                    </ion-item>\n                    <ion-item>\n                                <ion-button class=\"centraritem2\"  (click)=\"marcarfr('102')\"expand=\"block\" fill=\"clear\" color=\"{{framecolor}}\" expand=\"full\" size=\"large\">102</ion-button>\n                    </ion-item>\n                    <ion-item lines=\"none\" (click)=\"resetearvariables()\" style=\"padding-left: 25%\" >\n                        \n                        <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\n                </ion-item>\n                    \n                  </ion-list>\n               \n            </ion-col>\n            \n            <ion-col size=\"4\" >\n                <ion-list>\n                                <div *ngIf=\"up\">\n                                                \n                    <ion-item>\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('1-2')\" expand=\"block\" fill=\"clear\" id=\"1\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">1-2</ion-button>\n                    </ion-item>\n                    <ion-item>\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('2-3')\"expand=\"block\" fill=\"clear\" id=\"2\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">2-3</ion-button>\n                    </ion-item>\n                    <ion-item>\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('3-4')\"expand=\"block\" fill=\"clear\" id=\"3\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">3-4</ion-button>\n                    </ion-item>\n                    <ion-item>\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('4-5')\"expand=\"block\" fill=\"clear\" id=\"4\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">4-5</ion-button>\n                    </ion-item>\n                    <ion-item>\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('5-6')\" expand=\"block\" fill=\"clear\" id=\"5\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">5-6</ion-button>\n                    </ion-item>\n                    <ion-item>\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('6-7')\"expand=\"block\" fill=\"clear\" id=\"6\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">6-7</ion-button>\n                    </ion-item>\n                                \n                    <ion-item>\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('7-8')\"expand=\"block\" fill=\"clear\" id=\"7\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">7-8</ion-button>\n                    </ion-item>\n                    <ion-item *ngIf=\"omegastras\">               \n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('8-9')\" expand=\"block\" fill=\"clear\" id=\"8\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">8-9</ion-button>\n                    </ion-item>\n                    <ion-item *ngIf=\"omegastras\">\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('9-10')\" expand=\"block\" fill=\"clear\" id=\"9\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">9-10</ion-button>\n                    </ion-item>\n                    <ion-item *ngIf=\"omegastras\">\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('10-11')\" expand=\"block\" fill=\"clear\" id=\"10\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">10-11</ion-button>\n                    </ion-item>\n                    <ion-item *ngIf=\"omegastras\">\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('11-12')\" expand=\"block\" fill=\"clear\" id=\"11\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">11-12</ion-button>\n                    </ion-item>\n                    <ion-item *ngIf=\"omegastras\">\n                            <ion-button class=\"centraritem1\" (click)=\"marcaromega('12-13')\" expand=\"block\" fill=\"clear\" id=\"12\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">12-13</ion-button>\n                    </ion-item>\n                                </div>\n                                \n                                <div *ngIf=\"lo\">\n                    <ion-item *ngIf=\"omegastras\">\n                        <ion-button class=\"centraritem1\" (click)=\"marcaromega('13-14')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">13-14</ion-button>\n                    </ion-item>\n                    <ion-item>\n                        <ion-button  class=\"centraritem1\"    (click)=\"marcaromega('14-15')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">14-15</ion-button>\n                </ion-item>\n                \n                <ion-item>\n                        <ion-button class=\"centraritem1\" (click)=\"marcaromega('15-16')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">15-16</ion-button>\n                </ion-item>\n                <ion-item>\n                        <ion-button class=\"centraritem1\" (click)=\"marcaromega('16-17')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">16-17</ion-button>\n                </ion-item>\n                <ion-item>\n                        <ion-button class=\"centraritem1\" (click)=\"marcaromega('17-18')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">17-18</ion-button>\n                </ion-item>\n                <ion-item>\n                        <ion-button class=\"centraritem1\" (click)=\"marcaromega('18-19')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">18-19</ion-button>\n                </ion-item>\n                <ion-item>\n                        <ion-button class=\"centraritem1\" (click)=\"marcaromega('19-20')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">19-20</ion-button>\n                </ion-item>\n                <ion-item>\n                        <ion-button class=\"centraritem1\" (click)=\"marcaromega('20-21')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">20-21</ion-button>\n                </ion-item>\n                <ion-item>\n                        <ion-button class=\"centraritem1\" (click)=\"marcaromega('21-22')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">21-22</ion-button>\n                </ion-item>\n                <ion-item>\n                        <ion-button class=\"centraritem1\" (click)=\"marcaromega('22-23')\" expand=\"block\" fill=\"clear\" id=\"13\" expand=\"full\" color=\"{{omegacolor}}\" size=\"large\">22-23</ion-button>\n                </ion-item>\n               \n                         </div>\n                  </ion-list>\n            </ion-col>\n            <ion-col class=\"ion-justify-content-around\" size=\"4\" >\n                    \n                <ion-list lines=\"none\">\n                     \n                    <ion-item>\n                            <ion-button class=\"centraritem2\" (click)=\"marcarlado('RH')\" color=\"{{RHcolor}}\" id=\"RH\" expand=\"full\" size=\"large\" >RH</ion-button>\n                    </ion-item>\n                    <ion-item>\n                            <ion-button class=\"centraritem2\" (click)=\"marcarlado('LH')\" color=\"{{LHcolor}}\" id=\"LH\" expand=\"full\" size=\"large\">LH</ion-button>\n                    </ion-item>\n                    <ion-item>\n                            <ion-button class=\"centraritem2\" (click)=\"marcarnudo('NUDO')\" expand=\"full\" color=\"{{Nudocolor}}\" size=\"default\">Nudo</ion-button>\n                    </ion-item>\n                    <ion-item>\n                            <ion-button class=\"centraritem2\" (click)=\"marcarintpiel('INTERIOR')\" expand=\"block\" fill=\"clear\" expand=\"full\" color=\"{{interiorcolor}}\" size=\"default\">Inter</ion-button>\n                    </ion-item>\n                    <ion-item>\n                            <ion-button class=\"centraritem2\" (click)=\"marcarintpiel('PIEL')\" expand=\"block\" fill=\"clear\" expand=\"full\" color=\"{{pielcolor}}\"  size=\"default\">Piel</ion-button>\n                    </ion-item>\n                    <ion-item class=\"cantidad\"  >\n                            \n                                <ion-input [(ngModel)]=\"q\" placeholder=\"Cantidad\" type=\"number\"></ion-input>\n                </ion-item>\n                <ion-item style=\"padding-left: 25%\" >\n                                <ion-badge color=\"danger\">{{lineas}}</ion-badge>  \n                </ion-item>\n                \n                     \n                  </ion-list>\n            </ion-col>\n         </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-footer>\n\n    <ion-fab vertical=\"center\" horizontal=\"center\" edge slot=\"fixed\">\n        <ion-fab-button color=\"primary\" (click)=\"iratabla()\">\n          <ion-icon name=\"menu\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n\n\n    <ion-grid class=\"no-padding\" class=\"ion-text-center\">\n        <ion-row>\n          \n            <ion-col size=\"6\">\n                <ion-button (click)=\"remache()\" expand=\"block\" color=\"dark\">Remache</ion-button>\n            </ion-col>\n            \n            <ion-col size=\"6\" >\n                <ion-button (click)=\"pieza()\" expand=\"block\" color=\"dark\">Pieza</ion-button>\n            </ion-col>\n            \n         </ion-row>\n         <ion-row>\n          \n            <ion-col size=\"6\" >\n                <ion-button  (click)=\"remachenc()\" expand=\"block\" color=\"warning\">Remache NC</ion-button>\n            </ion-col>\n            \n            <ion-col  size=\"6\">\n                <ion-button (click)=\"piezanc()\" expand=\"block\" color=\"warning\">Pieza NC</ion-button>\n            </ion-col>\n            \n         </ion-row>\n         <ion-row>\n          \n            <ion-col  size=\"12\">\n                <ion-button (click)=\"popupotros()\" expand=\"block\" color=\"dark\">Otros</ion-button>\n            </ion-col>\n            \n         </ion-row>\n    </ion-grid>\n     \n </ion-footer>\n"

/***/ }),

/***/ "./src/app/marcador/marcador.module.ts":
/*!*********************************************!*\
  !*** ./src/app/marcador/marcador.module.ts ***!
  \*********************************************/
/*! exports provided: MarcadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcadorPageModule", function() { return MarcadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _marcador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marcador.page */ "./src/app/marcador/marcador.page.ts");







const routes = [
    {
        path: '',
        component: _marcador_page__WEBPACK_IMPORTED_MODULE_6__["MarcadorPage"]
    }
];
let MarcadorPageModule = class MarcadorPageModule {
};
MarcadorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_marcador_page__WEBPACK_IMPORTED_MODULE_6__["MarcadorPage"]]
    })
], MarcadorPageModule);



/***/ }),

/***/ "./src/app/marcador/marcador.page.scss":
/*!*********************************************!*\
  !*** ./src/app/marcador/marcador.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast {\n  --max-width:1%;\n}\n\n.noscroll {\n  scroll-behavior: unset;\n}\n\n.centraritem1 {\n  padding-left: 19%;\n  min-width: 100%;\n}\n\n.centraritem2 {\n  padding-left: 5%;\n  min-width: 100%;\n}\n\n.cantidad {\n  background-color: aliceblue;\n}\n\n.botones {\n  --background:rgb(17, 143, 216);\n  padding-left: 5%;\n}\n\n.marcado {\n  color: green;\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyY2Fkb3IvQzpcXFVzZXJzXFxGZXJcXHF1aWNrbGl0eS9zcmNcXGFwcFxcbWFyY2Fkb3JcXG1hcmNhZG9yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFyY2Fkb3IvbWFyY2Fkb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSwyQkFBQTtBQ0ZKOztBREtBO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9tYXJjYWRvci9tYXJjYWRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3Qge1xyXG4gICAgLS1tYXgtd2lkdGg6MSU7XHJcbn1cclxuXHJcbi5ub3Njcm9sbHtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogdW5zZXQ7XHJcbn1cclxuXHJcbi5jZW50cmFyaXRlbTF7XHJcblxyXG4gICAgcGFkZGluZy1sZWZ0OiAxOSU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgXHJcbn1cclxuXHJcbi5jZW50cmFyaXRlbTJ7XHJcblxyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhbnRpZGFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uYm90b25lc3tcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoMTcsIDE0MywgMjE2KTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgIFxyXG59XHJcblxyXG4ubWFyY2Fkb3tcclxuICAgIGNvbG9yIDogZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9IiwiLnRvYXN0IHtcbiAgLS1tYXgtd2lkdGg6MSU7XG59XG5cbi5ub3Njcm9sbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogdW5zZXQ7XG59XG5cbi5jZW50cmFyaXRlbTEge1xuICBwYWRkaW5nLWxlZnQ6IDE5JTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4uY2VudHJhcml0ZW0yIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4uY2FudGlkYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5ib3RvbmVzIHtcbiAgLS1iYWNrZ3JvdW5kOnJnYigxNywgMTQzLCAyMTYpO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4ubWFyY2FkbyB7XG4gIGNvbG9yOiBncmVlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/marcador/marcador.page.ts":
/*!*******************************************!*\
  !*** ./src/app/marcador/marcador.page.ts ***!
  \*******************************************/
/*! exports provided: MarcadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcadorPage", function() { return MarcadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ajustes.service */ "./src/app/ajustes.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm2015/ngx-papaparse.js");







//COMPONENTES DE ESCRITURA


let MarcadorPage = class MarcadorPage {
    constructor(navCrtl, miServicio, toastController, alertController, http, papa, storage) {
        this.navCrtl = navCrtl;
        this.miServicio = miServicio;
        this.toastController = toastController;
        this.alertController = alertController;
        this.http = http;
        this.papa = papa;
        this.storage = storage;
        this.csvData = [];
        this.headerRow = [];
        this.Nudocolor = "medium";
        this.interiorcolor = "tertiary";
        this.pielcolor = "tertiary";
        this.omegacolor = "primary";
        this.framecolor = "primary";
        this.loadCSV();
    }
    ngOnInit() {
        if (this.lineas == undefined) {
            this.lineas = 0;
        }
        if (this.miServicio.upperlower == 'UPPER') {
            this.up = true;
            this.lo = false;
            this.omegastras = true;
            console.log("Te muestro UPPER");
        }
        else {
            this.up = false;
            this.lo = true;
            this.omegastras = true;
            console.log("Te muestro LOWER");
        }
        this.storage.get('nombre').then((val) => {
            this.usuario = val;
        });
        this.intpiel = "";
        this.nudo = "";
        this.fr1 = "";
        this.fr2 = "";
        this.str1 = "";
        this.str2 = "";
        this.lado = "";
    }
    // Escribir en modelo tabla CSV -----------------------------------
    loadCSV() {
        this.http.get('./assets/modelo.csv', {
            responseType: 'text'
        }).subscribe(data => this.extractData(data), err => console.log('error: ', err));
    }
    extractData(res) {
        let csvData = res || '';
        this.papa.parse(csvData, {
            complete: parsedData => {
                this.headerRow = parsedData.data.splice(1, 0)[0];
                this.csvData = parsedData.data;
            }
        });
    }
    nuevalinea() {
        this.i = this.lineas + 1;
        //Cargar Persona
        this.j = 0;
        this.csvData[this.i][this.j] = this.usuario;
        //Cargar Fecha
        this.j = 1;
        this.csvData[this.i][this.j] = this.miServicio.fecha;
        //Cargar VGF
        this.j = 2;
        this.csvData[this.i][this.j] = this.miServicio.vgf;
        //Cargar MSN
        this.j = 3;
        this.csvData[this.i][this.j] = this.miServicio.msn;
        //Cargar Version
        this.j = 4;
        this.csvData[this.i][this.j] = this.miServicio.version;
        //Cargar Upper/Lower
        this.j = 5;
        this.csvData[this.i][this.j] = this.miServicio.upperlower;
        //Cargar Frame
        this.j = 6;
        this.csvData[this.i][this.j] = this.fr1;
        //Cargar Omega
        this.j = 7;
        this.csvData[this.i][this.j] = this.str1;
        //Cargar Lado
        this.j = 8;
        this.csvData[this.i][this.j] = this.lado;
        //Cargar Interior/Exterior
        this.j = 9;
        this.csvData[this.i][this.j] = this.intpiel;
        //Cargar Nudo
        this.j = 10;
        this.csvData[this.i][this.j] = this.nudo;
        //Cargar Comentario
        this.j = 11;
        this.csvData[this.i][this.j] = this.comentario;
        //Cargar Remaches
        this.j = 12;
        this.csvData[this.i][this.j] = this.q;
        //Cargar Remaches
        this.j = 13;
        this.csvData[this.i][this.j] = this.p;
        //Guardar Todo en el Servicio
        this.miServicio.tabla = this.csvData;
    }
    // Escribir en modelo tabla CSV -----------------------------------
    ocultaromegastraseras() {
        this.omegastras = false;
    }
    iratabla() {
        this.navCrtl.navigateForward('/tabla');
    }
    marcarfr(fr) {
        if (fr == 99 || fr == 100 || fr == 101 || fr == 102) {
            this.ocultaromegastraseras();
        }
        else {
            this.omegastras = true;
        }
        this.fr1 = fr;
        console.log("fr1 " + this.fr1);
        this.framecolor = "success";
    }
    marcaromega(str) {
        this.str1 = str;
        console.log("str1 " + this.str1);
        this.omegacolor = "success";
    }
    marcarlado(lad) {
        this.lado = lad;
        if (lad == "LH") {
            this.LHcolor = "success";
            this.RHcolor = "";
        }
        else {
            this.RHcolor = "success";
            this.LHcolor = "";
        }
    }
    marcarnudo(nud) {
        this.nudo = nud;
        this.Nudocolor = "success";
    }
    marcarintpiel(ip) {
        this.intpiel = ip;
        if (ip == "INTERIOR") {
            this.interiorcolor = "success";
            this.pielcolor = "tertiary";
        }
        else {
            this.pielcolor = "success";
            this.interiorcolor = "tertiary";
        }
    }
    remache() {
        if (this.q == undefined) {
            this.q = 0;
        }
        this.comentario = "FALTAN " + this.q + " REMACHES EN FR " + this.fr1 + " " + this.lado + " STRG " + this.str1 + " ZONA " + this.nudo + " " + this.intpiel;
        console.log(this.comentario);
        this.p = 0;
        this.nuevalinea();
        this.aviso();
    }
    pieza() {
        if (this.q == undefined) {
            this.q = 0;
        }
        this.comentario = "FALTAN " + this.q + " PIEZAS EN FR " + this.fr1 + " " + this.lado + " STRG " + this.str1 + " ZONA " + this.nudo + " " + this.intpiel;
        console.log(this.comentario);
        this.p = this.q;
        this.q = 0;
        this.nuevalinea();
        this.aviso();
    }
    remachenc() {
        if (this.q == undefined) {
            this.q = 0;
        }
        this.comentario = "FALTAN " + this.q + " REMACHES EN FR " + this.fr1 + " " + this.lado + " STRG " + this.str1 + " ZONA " + this.nudo + " " + this.intpiel + " [NC]";
        console.log(this.comentario);
        this.q = 0;
        this.p = 0;
        this.nuevalinea();
        this.aviso();
    }
    piezanc() {
        if (this.q == undefined) {
            this.q = 0;
        }
        this.comentario = "FALTAN " + this.q + " PIEZAS EN FR " + this.fr1 + " " + this.lado + " STRG " + this.str1 + " ZONA " + this.nudo + " " + this.intpiel + " [NC]";
        console.log(this.comentario);
        this.q = 0;
        this.p = 0;
        this.nuevalinea();
        this.aviso();
    }
    otros() {
        this.nuevalinea();
        this.aviso();
    }
    aviso() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                position: 'middle',
                color: 'success',
                message: 'Registrado!',
                duration: 500,
            });
            toast.present();
            this.lineas = this.lineas + 1;
            this.resetearvariables();
        });
    }
    popupotros() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Comentario Manual',
                message: 'Añade aquí todo lo que no puedas hacer mediante los botones. Recuerda haber marcado antes al menos la "Frame" la "Omega" y el "Lado" ',
                inputs: [
                    {
                        name: 'comentario',
                        type: 'text',
                        placeholder: 'Comentario'
                    },
                    {
                        name: 'cantidad',
                        type: 'number',
                        placeholder: 'Cantidad (Si Fuera Necesario)'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Registrar',
                        handler: () => {
                            this.otros();
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    resetearvariables() {
        this.q = undefined;
        this.comentario = undefined;
        this.intpiel = "";
        this.nudo = "";
        this.fr1 = "";
        this.fr2 = "";
        this.str1 = "";
        this.str2 = "";
        this.lado = "";
        this.RHcolor = "";
        this.LHcolor = "";
        this.Nudocolor = "medium";
        this.interiorcolor = "tertiary";
        this.pielcolor = "tertiary";
        this.omegacolor = "primary";
        this.framecolor = "primary";
    }
};
MarcadorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_6__["Papa"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
MarcadorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marcador',
        template: __webpack_require__(/*! raw-loader!./marcador.page.html */ "./node_modules/raw-loader/index.js!./src/app/marcador/marcador.page.html"),
        styles: [__webpack_require__(/*! ./marcador.page.scss */ "./src/app/marcador/marcador.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_6__["Papa"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], MarcadorPage);



/***/ })

}]);
//# sourceMappingURL=marcador-marcador-module-es2015.js.map