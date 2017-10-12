webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserServiceClient */],
            __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteServiceClient */],
            __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageServiceClient */],
            __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetServiceClient */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/**
 * Created by sesha on 7/26/17.
 */















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'default', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"page-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n  <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">\n    <!--heading on the left-->\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class=\"dev-navbar-text-color\">Pages</b>\n      </a>\n    </div>\n\n    <!--plus icon on the navbar -->\n    <div class=\"navbar-text pull-right\">\n      <a href=\"page-new.html\" class=\"navbar-link pull-right\">\n        <span class=\"glyphicon glyphicon-plus dev-navbar-text-color\"></span>\n      </a>\n    </div>\n  </div>\n\n\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b class=\"dev-navbar-text-color\">New Page</b>\n    </a>\n  </div>\n\n\n  <!--check mark-->\n  <p class=\"navbar-text pull-right\">\n    <a href=\"page-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n\n\n<div class=\"container-fluid full-height\">\n  <!--large screen side options-->\n  <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs dev-input-contain\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">Blog Post</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">Blogs</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">Home</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">About</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">Contact Us</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <!--<div class=\"dev-dividor pull-left\"></div>-->\n  <div class=\" col-lg-9 col-md-9 col-sm-12 col-xs-12\">\n    <div class=\"dev-content-side\"><label>Name</label></div>\n    <div ><input type=\"text\" placeholder=\"Name\" class=\"dev-input\"/></div>\n    <div class=\"dev-separator\"></div>\n    <div class=\"dev-content-side\"><label>Title</label></div>\n    <div><input type=\"text\" class=\"dev-input\" placeholder=\"Page Title\"/></div>\n    <div class=\"dev-separator\"></div>\n    <div class=\"btn-contain dev-content-side\">\n      <button class=\"btn btn-danger btn-block\" onclick=\"deletePage()\">Delete</button>\n    </div>\n  </div>\n</div>\n\n<!--footer-->\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageEditComponent = (function () {
    function PageEditComponent() {
    }
    PageEditComponent.prototype.ngOnInit = function () {
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageEditComponent);

//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"../website/website-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n  <!--heading on the left-->\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b class=\"dev-navbar-text-color\">Pages</b>\n    </a>\n  </div>\n\n  <!--plus icon on the navbar -->\n  <div class=\"navbar-text pull-right\">\n    <a href=\"page-new.html\" class=\"navbar-link pull-right\">\n      <span class=\"glyphicon glyphicon-plus dev-navbar-text-color\"></span>\n    </a>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <ul class=\"list-group dev-list-no-border\">\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <a href=\"../widget/widget-ulst.html\" class=\"col-md-4 col-lg-3 col-sm-6 col-xs-6 pull-left\">Blog Post</a>\n        <b class=\"col-lg-3 hidden-md hidden-sm hidden-xs\">09/21/2017</b>\n        <b class=\"col-lg-3 col-md-4 hidden-sm hidden-xs\">Page List Item</b>\n        <a href=\"page-edit.html\" class=\"text-right col-lg-3 col-md-4 col-sm-6 col-xs-6 pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <a href=\"../widget/widget-ulst.html\" class=\"col-md-4 col-lg-3 col-sm-6 col-xs-6 pull-left\">Blogs</a>\n        <b class=\"col-lg-3 hidden-md hidden-sm hidden-xs\">09/21/2017</b>\n        <b class=\"col-lg-3 col-md-4 hidden-sm hidden-xs\">Page List Item</b>\n        <a href=\"page-edit.html\" class=\"text-right col-lg-3 col-md-4 col-sm-6 col-xs-6 pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <a href=\"../widget/widget-ulst.html\" class=\"col-md-4 col-lg-3 col-sm-6 col-xs-6 pull-left\">Home</a>\n        <b class=\"col-lg-3 hidden-md hidden-sm hidden-xs\">09/21/2017</b>\n        <b class=\"col-lg-3 col-md-4 hidden-sm hidden-xs\">Page List Item</b>\n        <a href=\"page-edit.html\" class=\"text-right col-lg-3 col-md-4 col-sm-6 col-xs-6 pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <a href=\"../widget/widget-ulst.html\" class=\"col-md-4 col-lg-3 col-sm-6 col-xs-6 pull-left\">About</a>\n        <b class=\"col-lg-3 hidden-md hidden-sm hidden-xs\">09/21/2017</b>\n        <b class=\"col-lg-3 col-md-4 hidden-sm hidden-xs\">Page List Item</b>\n        <a href=\"page-edit.html\" class=\"text-right col-lg-3 col-md-4 col-sm-6 col-xs-6 pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <a href=\"../widget/widget-ulst.html\" class=\"col-md-4 col-lg-3 col-sm-6 col-xs-6 pull-left\">Contact Us</a>\n        <b class=\"col-lg-3 hidden-md hidden-sm hidden-xs\">09/21/2017</b>\n        <b class=\"col-lg-3 col-md-4 hidden-sm hidden-xs\">Page List Item</b>\n        <a href=\"page-edit.html\" class=\"text-right col-lg-3 col-md-4 col-sm-6 col-xs-6 pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </li>\n  </ul>\n</div>\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageListComponent = (function () {
    function PageListComponent() {
    }
    PageListComponent.prototype.ngOnInit = function () {
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageListComponent);

//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"page-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n  <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">\n    <!--heading on the left-->\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class=\"dev-navbar-text-color\">Pages</b>\n      </a>\n    </div>\n\n    <!--plus icon on the navbar -->\n    <div class=\"navbar-text pull-right\">\n      <a href=\"page-new.html\" class=\"navbar-link pull-right\">\n        <span class=\"glyphicon glyphicon-plus dev-navbar-text-color\"></span>\n      </a>\n    </div>\n  </div>\n\n\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b class=\"dev-navbar-text-color\">New Page</b>\n    </a>\n  </div>\n\n\n  <!--check mark-->\n  <p class=\"navbar-text pull-right\">\n    <a href=\"page-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n\n\n<div class=\"container-fluid full-height\">\n  <!--large screen side options-->\n  <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs dev-input-contain\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">Blog Post</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">Blogs</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">Home</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">About</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../widget/widget-ulst.html\" class=\"pull-left\">Contact Us</a>\n          <a href=\"page-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <!--<div class=\"dev-dividor pull-left\"></div>-->\n  <div class=\" col-lg-9 col-md-9 col-sm-12 col-xs-12\">\n    <div class=\"dev-content-side\"><label>Name</label></div>\n    <div><input type=\"text\" placeholder=\"Name\" class=\"dev-input\"/></div>\n    <div class=\"dev-separator\"></div>\n    <div class=\"dev-content-side\"><label>Title</label></div>\n    <div><input type=\"text\" class=\"dev-input\" placeholder=\"Page Title\"/></div>\n\n\n\n\n  </div>\n</div>\n\n<!--footer-->\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNewComponent = (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNewComponent);

//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input   placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    <p> </p>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input  placeholder=\"password\"\n            name=\"password\"\n            type=\"password\"\n            class=\"form-control\"\n            ngModel\n            required\n            #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n    <p> </p>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n  </form>\n\n  <p> </p>\n  <button class=\"btn btn-success btn-block\"\n          type=\"button\"\n          routerLink=\"/register\">Register</button>\n  <p> </p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.login = function () {
        // alert(username + ' ' + password);
        var user = this.userService.findUserByCredentials(this.loginForm.value.username, this.loginForm.value.password);
        if (user) {
            this.router.navigate(["/user/" + user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default dev-navbar-background-color\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class=\"dev-navbar-text-color\">Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{user._id}}\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok dev-navbar-text-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form >\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"walice\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice.wonderland@unicorn.com\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\"\n     routerLink='/user/{{user._id}}/website'>Websites</a>\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/login']\" >Logout</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom dev-navbar-background-color\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink='/user/{{user._id}}'>\n        <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.user = _this.userService.findUserById(_this.userId.toString());
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Register</h1>\n  <form (ngSubmit) = 'register()' #f=\"ngForm\">\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <p> </p>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Username can not be empty!\n    </span>\n\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <p> </p>\n\n    <input placeholder=\"confirm password\"\n           name=\"password1\"\n           type=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password1=\"ngModel\"/>\n    <p> </p>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Password can not be empty!\n    </span>\n    <span class=\"help-block\" *ngIf=\"password.touched && password1.touched && password.value != password1.value\">\n      Password does not match!\n    </span>\n    <p></p>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid || password.value != password1.value\">Register</button>\n  </form>\n  <p> </p>\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/login']\" >Cancel</a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'username already exists!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var user = this.userService.findUserByUsername(this.registerForm.value.username);
        if (user) {
            this.errorFlag = true;
        }
        else {
            var nuser = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]((this.userService.users.length + 1).toString(), this.registerForm.value.username, this.registerForm.value.password);
            this.userService.createUser(nuser);
            this.router.navigate(["/user/" + nuser._id]);
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"website-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n  <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">\n    <!--heading on the left-->\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b href=\"../page/page-ulst.html\" class=\"dev-navbar-text-color\">Websites</b>\n      </a>\n    </div>\n\n    <!--plus icon on the navbar -->\n    <div class=\"navbar-text pull-right\">\n      <a href=\"website-new.html\" class=\"navbar-link pull-right\">\n        <span class=\"glyphicon glyphicon-plus dev-navbar-text-color\"></span>\n      </a>\n    </div>\n  </div>\n\n\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b href=\"../page/page-ulst.html\" class=\"dev-navbar-text-color\">Edit Website</b>\n    </a>\n  </div>\n\n\n  <!--check mark-->\n  <p class=\"navbar-text pull-right\">\n    <a href=\"website-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n\n\n<div class=\"container-fluid full-height\">\n  <!--large screen side options-->\n  <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs dev-input-contain\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../page/page-ulst.html\" class=\"pull-left\">Address Book</a>\n          <a href=\"website-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../page/page-ulst.html\" class=\"pull-left\">Blogger</a>\n          <a href=\"website-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../page/page-ulst.html\" class=\"pull-left\">Blogging App</a>\n          <a href=\"website-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../page/page-ulst.html\" class=\"pull-left\">Script Testing App</a>\n          <a href=\"website-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <!--<div class=\"dev-dividor pull-left\"></div>-->\n  <div class=\" col-lg-9 col-md-9 col-sm-12 col-xs-12\">\n    <div class=\"dev-content-side\"><label>Name</label></div>\n    <div><input type=\"text\" placeholder=\"Name\" class=\"dev-input\" value=\"Blogger\"/></div>\n    <div class=\"dev-separator\"></div>\n    <div class=\"dev-content-side\"><label>Description</label></div>\n    <div><textarea type=\"text\" class=\"dev-input\" placeholder=\"Description\" rows=\"6\">Given the wireframes discussed in class, implement the following HTML pages using HTML, CSS, and Bootstrap. The HTML pages should responsive and mobile first. The wireframes just show the functionality and layout of the page, the do not show the look and feel of the page. You can use the default look and feel provided by bootstrap stylesheet, but you can improve on the style. Apply the styles using bootstrap classes. The instructor will demonstrate how to use bootstrap styles and code samples to build the Web pages. These are the Web pages you will be creating for this assignment:\n</textarea></div>\n  </div>\n</div>\n\n<!--footer-->\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteEditComponent = (function () {
    function WebsiteEditComponent() {
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteEditComponent);

//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n  <!--heading on the left-->\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b href=\"../page/page-ulst.html\" class=\"dev-navbar-text-color\">Websites</b>\n    </a>\n  </div>\n\n  <!--plus icon on the navbar -->\n  <div class=\"navbar-text pull-right\">\n    <a href=\"website-new.html\" class=\"navbar-link pull-right\">\n      <span class=\"glyphicon glyphicon-plus dev-navbar-text-color\"></span>\n    </a>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <ul class=\"list-group dev-list-no-border\">\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <a href=\"../page/page-ulst.html\" class=\"col-md-4 col-lg-3 col-sm-6 col-xs-6 pull-left\">Address Book App</a>\n        <b class=\"col-lg-3 hidden-md hidden-sm hidden-xs\">09/21/2017</b>\n        <b class=\"col-lg-3 col-md-4 hidden-sm hidden-xs\">Websites</b>\n        <a href=\"website-edit.html\" class=\"text-right col-lg-3 col-md-4 col-sm-6 col-xs-6 pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <a href=\"../page/page-ulst.html\" class=\"col-md-4 col-lg-3 col-sm-6 col-xs-6 pull-left\">Blogger</a>\n        <b class=\"col-lg-3 hidden-md hidden-sm hidden-xs\">09/21/2017</b>\n        <b class=\"col-lg-3 col-md-4 hidden-sm hidden-xs\">Websites</b>\n        <a href=\"website-edit.html\" class=\"text-right col-lg-3 col-md-4 col-sm-6 col-xs-6 pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <a href=\"../page/page-ulst.html\" class=\"col-md-4 col-lg-3 col-sm-6 col-xs-6 pull-left\">Blogging App</a>\n        <b class=\"col-lg-3 hidden-md hidden-sm hidden-xs\">09/21/2017</b>\n        <b class=\"col-lg-3 col-md-4 hidden-sm hidden-xs\">Websites</b>\n        <a href=\"website-edit.html\" class=\"text-right col-lg-3 col-md-4 col-sm-6 col-xs-6 pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <a href=\"../page/page-ulst.html\" class=\"col-md-4 col-lg-3 col-sm-6 col-xs-6 pull-left\">Script Testing App</a>\n        <b class=\"col-lg-3 hidden-md hidden-sm hidden-xs\">09/21/2017</b>\n        <b class=\"col-lg-3 col-md-4 hidden-sm hidden-xs\">Websites</b>\n        <a href=\"website-edit.html\" class=\"text-right col-lg-3 col-md-4 col-sm-6 col-xs-6 pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </li>\n  </ul>\n</div>\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteListComponent = (function () {
    function WebsiteListComponent() {
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteListComponent);

//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"website-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n  <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">\n    <!--heading on the left-->\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b href=\"../page/page-ulst.html\" class=\"dev-navbar-text-color\">Websites</b>\n      </a>\n    </div>\n\n    <!--plus icon on the navbar -->\n    <div class=\"navbar-text pull-right\">\n      <a href=\"website-new.html\" class=\"navbar-link pull-right\">\n        <span class=\"glyphicon glyphicon-plus dev-navbar-text-color\"></span>\n      </a>\n    </div>\n  </div>\n\n\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b href=\"../page/page-ulst.html\" class=\"dev-navbar-text-color\">New Website</b>\n    </a>\n  </div>\n\n\n  <!--check mark-->\n  <p class=\"navbar-text pull-right\">\n    <a href=\"website-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n\n\n<div class=\"container-fluid full-height\">\n  <!--large screen side options-->\n  <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs dev-input-contain\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../page/page-ulst.html\" class=\"pull-left\">Address Book</a>\n          <a href=\"website-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../page/page-ulst.html\" class=\"pull-left\">Blogger</a>\n          <a href=\"website-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../page/page-ulst.html\" class=\"pull-left\">Blogging App</a>\n          <a href=\"website-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a href=\"../page/page-ulst.html\" class=\"pull-left\">Script Testing App</a>\n          <a href=\"website-edit.html\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <!--<div class=\"dev-dividor pull-left\"></div>-->\n  <div class=\" col-lg-9 col-md-9 col-sm-12 col-xs-12\">\n    <div class=\"dev-content-side\"><label>Name</label></div>\n    <div><input type=\"text\" placeholder=\"Name\" class=\"dev-input\"/></div>\n    <div class=\"dev-separator\"></div>\n    <div class=\"dev-content-side\"><label>Description</label></div>\n    <div><textarea type=\"text\"class=\"dev-input\" placeholder=\"Description\" rows=\"6\"></textarea></div>\n  </div>\n</div>\n\n<!--footer-->\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteNewComponent = (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteNewComponent);

//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"widget-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n  <!--heading on the left-->\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b class=\"dev-navbar-text-color\">Choose Widgets</b>\n    </a>\n  </div>\n\n</div>\n\n<div  class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item row\">\n      <a href=\"widget-heading.html\" class=\"pull-left col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n        <b>Header</b>\n      </a>\n      <p class=\"col-lg-4 col-md-6 col-sm-6 hidden-xs pull-right\">\n        Numbers of header being used: 5\n      </p>\n      <p class=\"col-lg-4 hidden-md hidden-sm hidden-xs pull-right\">\n        Description about Header.\n      </p>\n    </li>\n    <li class=\"list-group-item row\">\n      <a href=\"widget-image.html\" class=\"pull-left col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n        <b>Image</b>\n      </a>\n      <p class=\"col-lg-4 col-md-6 col-sm-6 hidden-xs pull-right\">\n        Numbers of Image being used: 5\n      </p>\n      <p class=\"col-lg-4 hidden-md hidden-sm hidden-xs pull-right\">\n        Description about Image.\n      </p>\n    </li>\n    <li class=\"list-group-item row\">\n      <a href=\"widget-youtube.html\" class=\"pull-left col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n        <b>YouTube</b>\n      </a>\n      <p class=\"col-lg-4 col-md-6 col-sm-6 hidden-xs pull-right\">\n        Numbers of YouTube being used: 5\n      </p>\n      <p class=\"col-lg-4 hidden-md hidden-sm hidden-xs pull-right\">\n        Description about YouTube.\n      </p>\n    </li>\n  </ul>\n</div>\n\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetChooserComponent = (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChooserComponent);

//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetEditComponent = (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetEditComponent);

//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"widget-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n  <!--heading on the left-->\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b class=\"dev-navbar-text-color\">Widget Edit</b>\n    </a>\n  </div>\n\n  <div class=\"navbar-text pull-right\">\n    <a href=\"widget-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n</div>\n\n<div  class=\"container-fluid\">\n  <div class=\"dev-input-section\">\n    <label>Name</label>\n    <input type=\"text\" class=\"dev-input\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <label>Text</label>\n    <input type=\"text\" class=\"dev-input\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <label>Size</label>\n    <input type=\"number\" class=\"dev-input\" placeholder=\"3\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <button class=\"btn btn-danger full-width\" onclick=\"backToWidgetList()\">Delete</button>\n  </div>\n</div>\n\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderComponent);

//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"widget-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n  <!--heading on the left-->\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b class=\"dev-navbar-text-color\">Widget Edit</b>\n    </a>\n  </div>\n\n  <div class=\"navbar-text pull-right\">\n    <a href=\"widget-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n</div>\n\n<div  class=\"container-fluid\">\n  <div class=\"dev-input-section\">\n    <label>Name</label>\n    <input type=\"text\" class=\"dev-input\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <label>Text</label>\n    <input type=\"text\" class=\"dev-input\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <label>URL</label>\n    <input type=\"url\" class=\"dev-input\" placeholder=\"3\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <label>Width</label>\n    <input type=\"number\" min=\"0\" max=\"100\" class=\"dev-input\" placeholder=\"100\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <label>Upload</label>\n    <input type=\"file\" class=\"dev-input\" placeholder=\"3\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <button class=\"btn btn-primary full-width\" onclick=\"\">Upload Image</button>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <button class=\"btn btn-danger full-width\" onclick=\"backToWidgetList()\">Delete</button>\n  </div>\n</div>\n\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetImageComponent = (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageComponent);

//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"widget-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n  <!--heading on the left-->\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b class=\"dev-navbar-text-color\">Widget Edit</b>\n    </a>\n  </div>\n\n  <div class=\"navbar-text pull-right\">\n    <a href=\"widget-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n</div>\n\n<div  class=\"container-fluid\">\n  <div class=\"dev-input-section\">\n    <label>Name</label>\n    <input type=\"text\" class=\"dev-input\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <label>Text</label>\n    <input type=\"text\" class=\"dev-input\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <label>URL</label>\n    <input type=\"url\" class=\"dev-input\" placeholder=\"3\"/>\n  </div>\n\n  <div class=\"dev-input-section\">\n    <label>Width</label>\n    <input type=\"number\" min=\"0\" class=\"dev-input\" placeholder=\"100\"/>\n  </div>\n\n\n  <div class=\"dev-input-section\">\n    <button class=\"btn btn-danger full-width\" onclick=\"backToWidgetList()\">Delete</button>\n  </div>\n</div>\n\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row dev-navbar-background-color dev-header\">\n\n  <!--arrow on the navbar-->\n  <div class=\"navbar-text pull-left\">\n    <a href=\"../page/page-ulst.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n  <!--heading on the left-->\n  <div class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b class=\"dev-navbar-text-color\">Widgets</b>\n    </a>\n  </div>\n\n  <!--plus icon on the navbar -->\n  <div class=\"navbar-text pull-right\">\n    <a href=\"widget-choose.html\" class=\"navbar-link pull-right\">\n      <span class=\"glyphicon glyphicon-plus dev-navbar-text-color\"></span>\n    </a>\n  </div>\n\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"dev-widget\">\n    <div class=\"dev-widget-toolbar\">\n      <a href=\"widget-heading.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h1>Heading Widget Example</h1>\n  </div>\n\n  <div class=\"dev-widget\">\n    <div class=\"dev-widget-toolbar\">\n      <a href=\"widget-image.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <img class=\"dev-widget-content\" src=\"http://lorempixel.com/400/200\" />\n  </div>\n\n  <div class=\"dev-widget\">\n    <div class=\"dev-widget-toolbar\">\n      <a href=\"widget-heading.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <p data-reactid=\"47\">“A country that has been the world’s greatest exporter of havoc, death and inhumanity became a champion of hypocrisy by preaching about humanity from this podium.” </p>\n  </div>\n\n  <div class=\"dev-widget\">\n    <div class=\"dev-widget-toolbar\">\n      <a href=\"widget-youtube.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ue80QwXMRHg\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n</div>\n\n<div class=\"dev-navbar-background-color container-fluid row dev-footer\">\n  <p class=\"navbar-text pull-right\">\n    <a href=\"../user/profile.html\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user dev-navbar-text-color\"></span>\n    </a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetListComponent = (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetListComponent);

//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
    return Page;
}());

//# sourceMappingURL=page.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, firstName, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    function Widget(_id, widgetType, pageId, size, width, text, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.width = width;
        this.text = text;
    }
    return Widget;
}());

//# sourceMappingURL=widget.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var PageServiceClient = (function () {
    function PageServiceClient() {
        this.pages = [
            new __WEBPACK_IMPORTED_MODULE_2__models_page_model_client__["a" /* Page */]('321', 'Post 1', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__models_page_model_client__["a" /* Page */]('432', 'Post 2', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__models_page_model_client__["a" /* Page */]('543', 'Post 3', '456', 'Lorem')
        ];
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage,
        };
    }
    PageServiceClient.prototype.createPage = function (websiteId, page) {
        page._id = (this.pages.length + 1).toString();
        page.websiteId = websiteId;
        this.pages.push(page);
    };
    PageServiceClient.prototype.findPageByWebsiteId = function (websiteId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                return this.pages[x];
            }
        }
    };
    PageServiceClient.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageServiceClient.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
                return page;
            }
        }
    };
    PageServiceClient.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                delete this.pages[x];
                return true;
            }
            else {
                return false;
            }
        }
    };
    return PageServiceClient;
}());
PageServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageServiceClient);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var UserServiceClient = (function () {
    function UserServiceClient() {
        this.users = [
            new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */]('123', 'alice', 'alice', 'Alice', 'Wonder'),
            new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */]('234', 'bob', 'bob', 'Bob', 'Marley'),
            new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */]('345', 'charly', 'charly', 'Charly', 'Garcia'),
            new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi'),
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUserName': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
        };
    }
    UserServiceClient.prototype.createUser = function (user) {
        this.users.push(user);
        return user;
    };
    UserServiceClient.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserServiceClient.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserServiceClient.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
                return user;
            }
        }
    };
    UserServiceClient.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                delete this.users[x];
                return true;
            }
        }
    };
    return UserServiceClient;
}());
UserServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserServiceClient);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var WebsiteServiceClient = (function () {
    function WebsiteServiceClient() {
        this.websites = [
            new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */]('123', 'Facebook', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */]('234', 'Tweeter', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */]('456', 'Gizmodo', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */]('890', 'Go', '123', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */]('567', 'Tic Tac Toe', '123', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */]('678', 'Checkers', '123', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */]('789', 'Chess', '234', 'Lorem')
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsiteByUser': this.findWebsiteByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite,
        };
    }
    WebsiteServiceClient.prototype.createWebsite = function (userId, website) {
        website._id = (this.websites.length + 1).toString();
        website.websiteId = userId;
        this.websites.push(website);
    };
    WebsiteServiceClient.prototype.findWebsiteByUser = function (userId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                return this.websites[x];
            }
        }
    };
    WebsiteServiceClient.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteServiceClient.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
                return website;
            }
        }
    };
    WebsiteServiceClient.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                delete this.websites[x];
                return true;
            }
            else {
                return false;
            }
        }
    };
    return WebsiteServiceClient;
}());
WebsiteServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteServiceClient);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var WidgetServiceClient = (function () {
    function WidgetServiceClient() {
        this.widgets = [
            new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('123', 'HEADING', '321', 2, null, 'GIZMODO'),
            new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('234', 'HEADING', '321', 4, null, 'Lorem ipsum'),
            new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('345', 'IMAGE', '321', null, '100%', null, 'http://lorempixel.com/400/200/'),
            new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('456', 'HTML', '321', null, null, '<p>Lorem ipsum</p>'),
            new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('567', 'HEADING', '321', 4, null, 'Lorem ipsum'),
            new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('678', 'YOUTUBE', '321', null, '100%', null, 'https://youtu.be/AM2Ivdi9c4E'),
            new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('789', 'HTML', '321', null, null, '<p>Lorem ipsum</p>')
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget,
        };
    }
    WidgetServiceClient.prototype.createWidget = function (pageId, widget) {
        widget._id = (this.widgets.length + 1).toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
    };
    WidgetServiceClient.prototype.findWidgetsByPageId = function (pageId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                return this.widgets[x];
            }
        }
    };
    WidgetServiceClient.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetServiceClient.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget;
                return widget;
            }
        }
    };
    WidgetServiceClient.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                delete this.widgets[x];
                return true;
            }
            else {
                return false;
            }
        }
    };
    return WidgetServiceClient;
}());
WidgetServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetServiceClient);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map