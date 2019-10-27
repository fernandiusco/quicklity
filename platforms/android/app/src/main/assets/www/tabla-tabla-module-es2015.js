(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabla-tabla-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabla/tabla.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabla/tabla.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Previsualización</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollX=\"true\" scrollY=\"true\">\n<table border=\"1\" class=\"data-table\">\n<tr>\n  <td *ngFor=\"let header of headerRow\" text-center><b>\n    {{ header }}\n  </b></td>\n</tr>\n\n<tr *ngFor=\"let row of csvData; let i=index\">\n  <td *ngFor=\"let data of row; let j = index; trackBy: trackByFn\" class=\"data-col\">\n<ion-input type=\"text\"[(ngModel)]=\"csvData[i][j]\"></ion-input>\n  </td>\n\n</tr>\n\n</table>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"volver()\">\n      <ion-icon name=\"arrow-round-back\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"exportCSV()\" color=\"danger\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>"

/***/ }),

/***/ "./src/app/tabla/tabla.module.ts":
/*!***************************************!*\
  !*** ./src/app/tabla/tabla.module.ts ***!
  \***************************************/
/*! exports provided: TablaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaPageModule", function() { return TablaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabla_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabla.page */ "./src/app/tabla/tabla.page.ts");







const routes = [
    {
        path: '',
        component: _tabla_page__WEBPACK_IMPORTED_MODULE_6__["TablaPage"]
    }
];
let TablaPageModule = class TablaPageModule {
};
TablaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tabla_page__WEBPACK_IMPORTED_MODULE_6__["TablaPage"]]
    })
], TablaPageModule);



/***/ }),

/***/ "./src/app/tabla/tabla.page.scss":
/*!***************************************!*\
  !*** ./src/app/tabla/tabla.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-table {\n  max-width: 300%;\n  white-space: nowrap;\n  min-width: 1500px;\n  margin: 20px auto;\n  table-layout: auto;\n}\n\n.data-col {\n  background: #f0f0f0;\n}\n\n.has-focus {\n  --background: #fdf696;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGEvQzpcXFVzZXJzXFxGZXJcXHF1aWNrbGl0eS9zcmNcXGFwcFxcdGFibGFcXHRhYmxhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFibGEvdGFibGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFFSSxtQkFBQTtBQ0FKOztBREdBO0VBRUkscUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3RhYmxhL3RhYmxhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhLXRhYmxle1xyXG4gICAgbWF4LXdpZHRoOjMwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICBtaW4td2lkdGg6IDE1MDBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4uZGF0YS1jb2x7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbn1cclxuXHJcbi5oYXMtZm9jdXMge1xyXG4gICAgXHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZGY2OTY7XHJcbn0iLCIuZGF0YS10YWJsZSB7XG4gIG1heC13aWR0aDogMzAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxNTAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0YWJsZS1sYXlvdXQ6IGF1dG87XG59XG5cbi5kYXRhLWNvbCB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG5cbi5oYXMtZm9jdXMge1xuICAtLWJhY2tncm91bmQ6ICNmZGY2OTY7XG59Il19 */"

/***/ }),

/***/ "./src/app/tabla/tabla.page.ts":
/*!*************************************!*\
  !*** ./src/app/tabla/tabla.page.ts ***!
  \*************************************/
/*! exports provided: TablaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaPage", function() { return TablaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm2015/ngx-papaparse.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ajustes.service */ "./src/app/ajustes.service.ts");








let TablaPage = class TablaPage {
    constructor(http, papa, plt, miServicio, file, socialSharing, NavCrtl) {
        this.http = http;
        this.papa = papa;
        this.plt = plt;
        this.miServicio = miServicio;
        this.file = file;
        this.socialSharing = socialSharing;
        this.NavCrtl = NavCrtl;
        this.csvData = [];
        this.headerRow = [];
        this.loadCSV();
    }
    loadCSV() {
        this.http.get('./assets/modelo.csv', {
            responseType: 'text'
        }).subscribe(data => this.extractData(data), err => console.log('error: ', err));
    }
    ngOnInit() {
        this.msn = this.miServicio.msn;
        this.version = this.miServicio.version;
        this.vgf = this.miServicio.vgf;
        this.titulo = 'QG_MSN' + this.msn + '_' + this.version + '_' + this.vgf + '.csv';
    }
    extractData(res) {
        let csvData = res || '';
        this.papa.parse(csvData, {
            complete: parsedData => {
                this.headerRow = parsedData.data.splice(1, 0)[0];
                this.csvData = this.miServicio.tabla;
            }
        });
    }
    trackByFn(index, item) {
        return index;
    }
    exportCSV() {
        let csv = this.papa.unparse({
            fields: this.headerRow,
            data: this.csvData
        });
        if (this.plt.is('cordova')) {
            this.file.writeFile(this.file.dataDirectory, this.titulo, csv, { replace: true }).then(res => {
                this.socialSharing.share(null, null, res.nativeURL, null).then(e => {
                    // Success
                }).catch(e => {
                    console.log('Share failed:', e);
                });
            }, err => {
                console.log('Error: ', err);
            });
        }
        else {
            // Dummy implementation for Desktop download purpose
            var blob = new Blob([csv]);
            var a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = this.titulo;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    volver() {
        this.NavCrtl.navigateBack('/marcador');
    }
};
TablaPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__["Papa"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ajustes_service__WEBPACK_IMPORTED_MODULE_7__["AjustesService"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
TablaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabla',
        template: __webpack_require__(/*! raw-loader!./tabla.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabla/tabla.page.html"),
        styles: [__webpack_require__(/*! ./tabla.page.scss */ "./src/app/tabla/tabla.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__["Papa"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ajustes_service__WEBPACK_IMPORTED_MODULE_7__["AjustesService"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], TablaPage);



/***/ })

}]);
//# sourceMappingURL=tabla-tabla-module-es2015.js.map