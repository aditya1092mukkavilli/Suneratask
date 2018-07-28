(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-suneratest></app-suneratest>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _suneratest_suneratest_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suneratest/suneratest.component */ "./src/app/suneratest/suneratest.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _suneratest_suneratest_component__WEBPACK_IMPORTED_MODULE_5__["SuneratestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/suneratest/suneratest.component.css":
/*!*****************************************************!*\
  !*** ./src/app/suneratest/suneratest.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/suneratest/suneratest.component.html":
/*!******************************************************!*\
  !*** ./src/app/suneratest/suneratest.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"container\" style=\"width:40%;\">\n   <div class=\"row\">\n      <div class=\"col-md-12\">\n          <form class=\"form-horizontal\" #demoform=\"ngForm\">\n            <fieldset>\n            <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-3 control-label\" for=\"firstName\">FirstName</label>  \n                <div class=\"col-md-9\">\n                <input id=\"firstName\" name=\"firstName\" [(ngModel)]=\"userModels.firstName\" #firstName=\"ngModel\" minlength=\"3\" type=\"text\" placeholder=\"Firstname\" class=\"form-control input-md text-capitalize\" required=\"\">  \n                <br>\n                <div *ngIf=\"firstName.errors?.minlength && firstName.dirty\" class=\"alert alert-danger\">First Name should be min length 3 </div>\n                <div *ngIf=\"firstName.errors?.required && firstName.touched\" class=\"alert alert-danger\">Please enter First Name</div>\n              </div>\n              </div>\n              \n            \n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-3 control-label\" for=\"lastName\">LastName</label>  \n                <div class=\"col-md-9\">\n                <input id=\"lastName\" name=\"lastName\" [(ngModel)]=\"userModels.lastName\" #lastName=\"ngModel\" minlength=\"3\" type=\"text\" placeholder=\"Lastname\" class=\"form-control input-md text-capitalize\" required=\"\">\n                <br>\n                <div *ngIf=\"lastName.errors?.minlength && lastName.dirty\" class=\"alert alert-danger\">Last Name should be min length 3 </div>\n                <div *ngIf=\"lastName.errors?.required && lastName.touched\" class=\"alert alert-danger\">Please enter last Name</div> \n              </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-md-3 control-label\" for=\"DOB\">Date of Birth</label>  \n                <div class=\"col-md-9\">\n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" name=\"DOB\" [(ngModel)]=\"userModels.DOB\" disabled>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker  disabled=\"false\"></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </div>\n              \n                 <!-- Text input-->\n               <div class=\"form-group\">\n                <label class=\"col-md-3 control-label\" for=\"PN\">Phone Number</label>  \n                <div class=\"col-md-9\">\n                <input id=\"PN\" name=\"PN\" [(ngModel)]=\"userModels.phoneNumber\" #phnNo=\"ngModel\" type=\"text\" placeholder=\"phone Number\" pattern=\"[0-9]*\" maxlength=\"10\"class=\"form-control input-md\" required=\"\">\n                <br>\n                <div *ngIf=\"phnNo.errors?.pattern\" class=\"alert alert-danger\">Phone number cannot be alphanumeric</div>\n                <div *ngIf=\"phnNo.errors?.required && phnNo.touched\" class=\"alert alert-danger\">Please enter the Phone number</div>  \n              </div>\n              </div>\n                        \n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-3 control-label\" for=\"lbs\">weights in lbs</label>  \n                <div class=\"col-md-9\">\n                <input id=\"lbs\" name=\"lbs\" type=\"number\" [(ngModel)]=\"userModels.lbs\" #lbs=\"ngModel\" placeholder=\"LBS\" (keyup)=\"convertWeights('kgs')\" class=\"form-control input-md\" required=\"\">\n                <br>\n                <div *ngIf=\"lbs.errors?.required && lbs.touched\" class=\"alert alert-danger\">Please enter the weights in LBS</div>  \n                </div>\n              </div>\n            \n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-3 control-label\" for=\"kgs\">weights in kgs</label>  \n                <div class=\"col-md-9\">\n                <input id=\"kgs\" name=\"kgs\" type=\"number\" [(ngModel)]=\"userModels.kgs\" #kgs=\"ngModel\" placeholder=\"kgs\" (keyup)=\"convertWeights('lbs')\" class=\"form-control input-md\">\n                <br>\n                <div *ngIf=\"kgs.errors?.required && kgs.touched\" class=\"alert alert-danger\">Please enter the Weights in KGs</div>   \n              </div>\n              </div>\n            </fieldset>\n          </form>\n      </div>\n   </div>\n   <div *ngIf = \"actualkgs||actuallbs\">\n      <div>Actual KGS- {{actualkgs}}</div>\n      <div>Actual LBS- {{actuallbs}}</div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/suneratest/suneratest.component.ts":
/*!****************************************************!*\
  !*** ./src/app/suneratest/suneratest.component.ts ***!
  \****************************************************/
/*! exports provided: APP_DATE_FORMATS, SuneratestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuneratestComponent", function() { return SuneratestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric' }
    }
};
var SuneratestComponent = /** @class */ (function () {
    function SuneratestComponent() {
        this.userModels = {
            firstName: null,
            lastName: null,
            DOB: new Date(),
            phoneNumber: null,
            lbs: null,
            kgs: null
        };
    }
    SuneratestComponent.prototype.ngOnInit = function () {
    };
    SuneratestComponent.prototype.convertWeights = function (convertType) {
        if (convertType === 'kgs') {
            this.actualkgs = this.userModels.lbs / 2.2046;
            this.actuallbs = this.userModels.lbs;
            this.userModels.kgs = Math.round(this.actualkgs);
        }
        else {
            this.actuallbs = this.userModels.kgs / 0.4535;
            this.actualkgs = this.userModels.kgs;
            this.userModels.lbs = Math.round(this.actuallbs);
        }
    };
    SuneratestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suneratest',
            template: __webpack_require__(/*! ./suneratest.component.html */ "./src/app/suneratest/suneratest.component.html"),
            styles: [__webpack_require__(/*! ./suneratest.component.css */ "./src/app/suneratest/suneratest.component.css")],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: APP_DATE_FORMATS
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SuneratestComponent);
    return SuneratestComponent;
}());

var model = /** @class */ (function () {
    function model() {
    }
    return model;
}());


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\my-interview-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map