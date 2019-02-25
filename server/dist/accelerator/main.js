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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-detail/team-detail.component */ "./src/app/team-detail/team-detail.component.ts");
/* harmony import */ var _team_member_team_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-member/team-member.component */ "./src/app/team-member/team-member.component.ts");
/* harmony import */ var _deliverable_deliverable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deliverable/deliverable.component */ "./src/app/deliverable/deliverable.component.ts");
/* harmony import */ var _deliverables_team_deliverables_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deliverables-team/deliverables-team.component */ "./src/app/deliverables-team/deliverables-team.component.ts");
/* harmony import */ var _teamdeliverable_teamdeliverable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teamdeliverable/teamdeliverable.component */ "./src/app/teamdeliverable/teamdeliverable.component.ts");
/* harmony import */ var _teamdeliverable_detail_teamdeliverable_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teamdeliverable-detail/teamdeliverable-detail.component */ "./src/app/teamdeliverable-detail/teamdeliverable-detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");












var routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"] },
    { path: 'users/:username', component: _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"] },
    { path: 'teams', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_3__["TeamsComponent"] },
    { path: 'teams/:id', component: _team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_4__["TeamDetailComponent"] },
    { path: 'teams/:id/teammembers', component: _team_member_team_member_component__WEBPACK_IMPORTED_MODULE_5__["TeamMemberComponent"] },
    { path: 'teams/:id/teammembers/:id', component: _team_member_team_member_component__WEBPACK_IMPORTED_MODULE_5__["TeamMemberComponent"] },
    { path: 'teams/:id/teamdeliverables', component: _teamdeliverable_teamdeliverable_component__WEBPACK_IMPORTED_MODULE_8__["TeamdeliverableComponent"] },
    { path: 'teams/:id/teamdeliverables/:id', component: _teamdeliverable_detail_teamdeliverable_detail_component__WEBPACK_IMPORTED_MODULE_9__["TeamdeliverableDetailComponent"] },
    { path: 'teamdeliverables', component: _deliverables_team_deliverables_team_component__WEBPACK_IMPORTED_MODULE_7__["DeliverablesTeamComponent"] },
    { path: 'teamdeliverables/:id', component: _teamdeliverable_detail_teamdeliverable_detail_component__WEBPACK_IMPORTED_MODULE_9__["TeamdeliverableDetailComponent"] },
    { path: 'deliverables', component: _deliverable_deliverable_component__WEBPACK_IMPORTED_MODULE_6__["DeliverableComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* navbar style.css */\r\n.nav {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none; }\r\n.nav-link {\r\n  display: block;\r\n  padding: 0.5rem 1rem; }\r\n.nav-link:hover, .nav-link:focus {\r\n    text-decoration: none; }\r\n.nav-link.disabled {\r\n    color: #6c757d; }\r\n.navbar {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem; }\r\n.navbar > .container,\r\n  .navbar > .container-fluid {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between; }\r\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-top: 0.3125rem;\r\n  padding-bottom: 0.3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: inherit;\r\n  white-space: nowrap; }\r\n.navbar-brand:hover, .navbar-brand:focus {\r\n    text-decoration: none; }\r\n.navbar-nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none; }\r\n.navbar-nav .nav-link {\r\n    padding-right: 0;\r\n    padding-left: 0; }\r\n.navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none; }\r\n.navbar-text {\r\n  display: inline-block;\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem; }\r\n.navbar-collapse {\r\n  flex-basis: 100%;\r\n  flex-grow: 1;\r\n  align-items: center; }\r\n.navbar-toggler {\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem; }\r\n.navbar-toggler:hover, .navbar-toggler:focus {\r\n    text-decoration: none; }\r\n.navbar-toggler:not(:disabled):not(.disabled) {\r\n    cursor: pointer; }\r\n.navbar-toggler-icon {\r\n  display: inline-block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  vertical-align: middle;\r\n  content: \"\";\r\n  background: no-repeat center center;\r\n  background-size: 100% 100%; }\r\n@media (max-width: 575.98px) {\r\n  .navbar-expand-sm > .container,\r\n  .navbar-expand-sm > .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0; } }\r\n@media (min-width: 576px) {\r\n  .navbar-expand-sm {\r\n    flex-flow: row nowrap;\r\n    justify-content: flex-start; }\r\n    .navbar-expand-sm .navbar-nav {\r\n      flex-direction: row; }\r\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\r\n        position: absolute; }\r\n      .navbar-expand-sm .navbar-nav .dropdown-menu-right {\r\n        right: 0;\r\n        left: auto; }\r\n      .navbar-expand-sm .navbar-nav .nav-link {\r\n        padding-right: 0.5rem;\r\n        padding-left: 0.5rem; }\r\n    .navbar-expand-sm > .container,\r\n    .navbar-expand-sm > .container-fluid {\r\n      flex-wrap: nowrap; }\r\n    .navbar-expand-sm .navbar-collapse {\r\n      display: flex !important;\r\n      flex-basis: auto; }\r\n    .navbar-expand-sm .navbar-toggler {\r\n      display: none; }\r\n    .navbar-expand-sm .dropup .dropdown-menu {\r\n      top: auto;\r\n      bottom: 100%; } }\r\n@media (max-width: 767.98px) {\r\n  .navbar-expand-md > .container,\r\n  .navbar-expand-md > .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0; } }\r\n@media (min-width: 768px) {\r\n  .navbar-expand-md {\r\n    flex-flow: row nowrap;\r\n    justify-content: flex-start; }\r\n    .navbar-expand-md .navbar-nav {\r\n      flex-direction: row; }\r\n      .navbar-expand-md .navbar-nav .dropdown-menu {\r\n        position: absolute; }\r\n      .navbar-expand-md .navbar-nav .dropdown-menu-right {\r\n        right: 0;\r\n        left: auto; }\r\n      .navbar-expand-md .navbar-nav .nav-link {\r\n        padding-right: 0.5rem;\r\n        padding-left: 0.5rem; }\r\n    .navbar-expand-md > .container,\r\n    .navbar-expand-md > .container-fluid {\r\n      flex-wrap: nowrap; }\r\n    .navbar-expand-md .navbar-collapse {\r\n      display: flex !important;\r\n      flex-basis: auto; }\r\n    .navbar-expand-md .navbar-toggler {\r\n      display: none; }\r\n    .navbar-expand-md .dropup .dropdown-menu {\r\n      top: auto;\r\n      bottom: 100%; } }\r\n@media (max-width: 991.98px) {\r\n  .navbar-expand-lg > .container,\r\n  .navbar-expand-lg > .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0; } }\r\n@media (min-width: 992px) {\r\n  .navbar-expand-lg {\r\n    flex-flow: row nowrap;\r\n    justify-content: flex-start; }\r\n    .navbar-expand-lg .navbar-nav {\r\n      flex-direction: row; }\r\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\r\n        position: absolute; }\r\n      .navbar-expand-lg .navbar-nav .dropdown-menu-right {\r\n        right: 0;\r\n        left: auto; }\r\n      .navbar-expand-lg .navbar-nav .nav-link {\r\n        padding-right: 0.5rem;\r\n        padding-left: 0.5rem; }\r\n    .navbar-expand-lg > .container,\r\n    .navbar-expand-lg > .container-fluid {\r\n      flex-wrap: nowrap; }\r\n    .navbar-expand-lg .navbar-collapse {\r\n      display: flex !important;\r\n      flex-basis: auto; }\r\n    .navbar-expand-lg .navbar-toggler {\r\n      display: none; }\r\n    .navbar-expand-lg .dropup .dropdown-menu {\r\n      top: auto;\r\n      bottom: 100%; } }\r\n@media (max-width: 1199.98px) {\r\n  .navbar-expand-xl > .container,\r\n  .navbar-expand-xl > .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0; } }\r\n@media (min-width: 1200px) {\r\n  .navbar-expand-xl {\r\n    flex-flow: row nowrap;\r\n    justify-content: flex-start; }\r\n    .navbar-expand-xl .navbar-nav {\r\n      flex-direction: row; }\r\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\r\n        position: absolute; }\r\n      .navbar-expand-xl .navbar-nav .dropdown-menu-right {\r\n        right: 0;\r\n        left: auto; }\r\n      .navbar-expand-xl .navbar-nav .nav-link {\r\n        padding-right: 0.5rem;\r\n        padding-left: 0.5rem; }\r\n    .navbar-expand-xl > .container,\r\n    .navbar-expand-xl > .container-fluid {\r\n      flex-wrap: nowrap; }\r\n    .navbar-expand-xl .navbar-collapse {\r\n      display: flex !important;\r\n      flex-basis: auto; }\r\n    .navbar-expand-xl .navbar-toggler {\r\n      display: none; }\r\n    .navbar-expand-xl .dropup .dropdown-menu {\r\n      top: auto;\r\n      bottom: 100%; } }\r\n.navbar-expand {\r\n  flex-flow: row nowrap;\r\n  justify-content: flex-start; }\r\n.navbar-expand > .container,\r\n  .navbar-expand > .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0; }\r\n.navbar-expand .navbar-nav {\r\n    flex-direction: row; }\r\n.navbar-expand .navbar-nav .dropdown-menu {\r\n      position: absolute; }\r\n.navbar-expand .navbar-nav .dropdown-menu-right {\r\n      right: 0;\r\n      left: auto; }\r\n.navbar-expand .navbar-nav .nav-link {\r\n      padding-right: 0.5rem;\r\n      padding-left: 0.5rem; }\r\n.navbar-expand > .container,\r\n  .navbar-expand > .container-fluid {\r\n    flex-wrap: nowrap; }\r\n.navbar-expand .navbar-collapse {\r\n    display: flex !important;\r\n    flex-basis: auto; }\r\n.navbar-expand .navbar-toggler {\r\n    display: none; }\r\n.navbar-expand .dropup .dropdown-menu {\r\n    top: auto;\r\n    bottom: 100%; }\r\n.navbar.navbar-transparent {\r\n        background-color: transparent !important;\r\n        box-shadow: none;\r\n        padding-top: 25px; }\r\n.navbar .notification {\r\n        position: absolute;\r\n        top: 5px;\r\n        border: 1px solid #FFF;\r\n        right: 10px;\r\n        font-size: 9px;\r\n        background: #e91e63;\r\n        color: #FFFFFF;\r\n        min-width: 20px;\r\n        padding: 0px 5px;\r\n        height: 20px;\r\n        border-radius: 10px;\r\n        text-align: center;\r\n        line-height: 19px;\r\n        vertical-align: middle;\r\n        display: block; }\r\n.navbar.navbar-transparent {\r\n      padding-top: 10px; }\r\n.navbar .collapse .navbar-nav .nav-item .nav-link {\r\n      position: relative;\r\n      padding: 10px 15px;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      text-transform: uppercase;\r\n      border-radius: 3px;\r\n      line-height: 20px;\r\n      margin-left: 5px;\r\n      color: inherit; }\r\n.navbar .collapse .navbar-nav .nav-item .nav-link:not(.btn-just-icon) .fa {\r\n        position: relative;\r\n        top: 2px;\r\n        margin-top: -4px;\r\n        margin-right: 4px; }\r\n.navbar .collapse .navbar-nav .nav-item .nav-link .material-icons,\r\n      .navbar .collapse .navbar-nav .nav-item .nav-link .fa {\r\n        font-size: 1.25rem;\r\n        max-width: 24px;\r\n        margin-top: -1.1em; }\r\n.navbar .collapse .navbar-nav .nav-item .nav-link:not(.btn) .material-icons {\r\n        margin-top: -3px;\r\n        top: 0px;\r\n        position: relative;\r\n        margin-right: 3px; }\r\n.navbar .collapse .navbar-nav .nav-item .nav-link .notification {\r\n        top: 0px; }\r\n.wrapper {\r\n            position: relative;\r\n            top: 0;\r\n            height: 100vh; }\r\n.sidebar {\r\n              position: fixed;\r\n              top: 0;\r\n              bottom: 0;\r\n              left: 0;\r\n              z-index: 2;\r\n              width: 260px;\r\n              background: #fff;\r\n              box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\r\n.sidebar .nav {\r\n              margin-top: 20px;\r\n              display: block; }\r\n.sidebar .nav .caret {\r\n                margin-top: 13px;\r\n                position: absolute;\r\n                right: 6px; }\r\n.sidebar .nav li > a:hover, .sidebar .nav li > a:focus {\r\n                background-color: #9c27b0;\r\n                box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4);\r\n                color: #fff !important;}\r\n.sidebar .nav li:first-child > a {\r\n                margin: 0 15px; }\r\n.sidebar .nav li.active > [data-toggle=\"collapse\"] i {\r\n                color: #fff; }\r\n.sidebar .nav li.active > a,\r\n              .sidebar .nav li.active > a i {\r\n                color: #fff; }\r\n.sidebar .nav li.active > a p {\r\n                color: #fff; }\r\n.sidebar .nav li.separator {\r\n                margin: 15px 0; }\r\n.sidebar .nav li.separator:after {\r\n                  width: calc(100% - 30px);\r\n                  content: \"\";\r\n                  position: absolute;\r\n                  height: 1px;\r\n                  left: 15px;\r\n                  background-color: rgba(180, 180, 180, 0.3); }\r\n.sidebar .nav li.separator + li {\r\n                  margin-top: 31px; }\r\n.sidebar .nav p {\r\n                margin: 0;\r\n                line-height: 30px;\r\n                font-size: 14px;\r\n                position: relative;\r\n                display: block;\r\n                height: auto;\r\n                white-space: nowrap; }\r\n.sidebar .nav i {\r\n                font-size: 24px;\r\n                float: left;\r\n                margin-right: 15px;\r\n                line-height: 30px;\r\n                width: 30px;\r\n                text-align: center;\r\n                color: #a9afbb; }\r\n.sidebar .nav li a,\r\n            .sidebar .nav li .dropdown-menu a {\r\n              margin: 10px 15px 0;\r\n              border-radius: 3px;\r\n              color: #3C4858;\r\n              padding-left: 10px;\r\n              padding-right: 10px;\r\n              text-transform: capitalize;\r\n              font-size: 13px;\r\n              padding: 10px 15px; }\r\n.sidebar .sidebar-background {\r\n              position: absolute;\r\n              z-index: 1;\r\n              height: 100%;\r\n              width: 100%;\r\n              display: block;\r\n              top: 0;\r\n              left: 0;\r\n              background-size: cover;\r\n              background-position: center center; }\r\n.sidebar .sidebar-background:after {\r\n                position: absolute;\r\n                z-index: 3;\r\n                width: 100%;\r\n                height: 100%;\r\n                content: \"\";\r\n                display: block;\r\n                background: #FFFFFF;\r\n                opacity: .83; }\r\n.sidebar .logo {\r\n  padding: 15px 0px;\r\n  margin: 0;\r\n  display: block;\r\n  position: relative;\r\n  z-index: 4; }\r\n.sidebar .logo:after {\r\n                content: '';\r\n                position: absolute;\r\n                bottom: 0;\r\n                right: 15px;\r\n                height: 1px;\r\n                width: calc(100% - 30px);\r\n                background-color: rgba(180, 180, 180, 0.3); }\r\n.sidebar .logo p {\r\n                float: left;\r\n                font-size: 20px;\r\n                margin: 10px 10px;\r\n                color: #fff;\r\n                line-height: 20px; }\r\n.sidebar .logo .simple-text {\r\n                padding: 5px 0px;\r\n                display: inline-block;\r\n                font-size: 25px;\r\n                color: #3C4858;\r\n                white-space: nowrap;\r\n                font-weight: 400;\r\n                line-height: 30px;\r\n                overflow: hidden;\r\n                text-align: center;\r\n                display: block; }\r\n.sidebar[data-color=\"purple\"] li.active > a {\r\n              background-color: #9c27b0;\r\n              box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4); }\r\n.sidebar[data-image]:after, .sidebar.has-image:after {\r\n              opacity: .30; }\r\n.main-panel {\r\n            position: relative;\r\n            float: right;\r\n            width: calc(100% - 260px);\r\n            transition: 0.33s, cubic-bezier(0.685, 0.0473, 0.346, 1); }\r\n.main-panel > .content {\r\n              margin-top: 70px;\r\n              padding: 30px 15px;\r\n              min-height: calc(100vh - 123px); }\r\n.main-panel > .navbar {\r\n              margin-bottom: 0; }\r\n.sidebar,\r\n          .main-panel,\r\n          .sidebar-wrapper {\r\n            transition-property: top,bottom, width;\r\n            transition-duration: .2s,.2s, .35s;\r\n            transition-timing-function: linear,linear,ease;\r\n            -webkit-overflow-scrolling: touch; }\r\n.visible-on-sidebar-regular {\r\n            display: inline-block !important; }\r\n.visible-on-sidebar-mini {\r\n            display: none !important; }\r\n@media (min-width: 991px) {\r\n            .sidebar-mini .visible-on-sidebar-regular {\r\n              display: none !important; }\r\n            .sidebar-mini .visible-on-sidebar-mini {\r\n              display: inline-block !important; }\r\n            .sidebar-mini .sidebar,\r\n            .sidebar-mini .sidebar .sidebar-wrapper {\r\n              width: 80px; }\r\n            .sidebar-mini .main-panel {\r\n              width: calc(100% - 80px); }\r\n            .sidebar-mini .sidebar {\r\n              display: block;\r\n              font-weight: 200;\r\n              z-index: 9999; }\r\n              .sidebar-mini .sidebar .logo a.logo-normal {\r\n                opacity: 0;\r\n                -webkit-transform: translate3d(-25px, 0, 0);\r\n                transform: translate3d(-25px, 0, 0); }\r\n              .sidebar-mini .sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\r\n              .sidebar-mini .sidebar .sidebar-wrapper .user .user-info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\r\n              .sidebar-mini .sidebar .sidebar-wrapper .user .user-info > a > span,\r\n              .sidebar-mini .sidebar .sidebar-wrapper > .nav li > a p {\r\n                -webkit-transform: translate3d(-25px, 0, 0);\r\n                transform: translate3d(-25px, 0, 0);\r\n                opacity: 0; }\r\n            .sidebar-mini .sidebar:hover {\r\n              width: 260px; }\r\n              .sidebar-mini .sidebar:hover .logo a.logo-normal {\r\n                opacity: 1;\r\n                -webkit-transform: translate3d(0px, 0, 0);\r\n                transform: translate3d(0px, 0, 0); }\r\n              .sidebar-mini .sidebar:hover .sidebar-wrapper {\r\n                width: 260px; }\r\n                .sidebar-mini .sidebar:hover .sidebar-wrapper > .nav li > a p,\r\n                .sidebar-mini .sidebar:hover .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\r\n                .sidebar-mini .sidebar:hover .sidebar-wrapper .user .user-info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\r\n                .sidebar-mini .sidebar:hover .sidebar-wrapper .user .user-info > a > span {\r\n                  -webkit-transform: translate3d(0px, 0, 0);\r\n                  transform: translate3d(0px, 0, 0);\r\n                  opacity: 1; }\r\n            .sidebar .nav .nav-item.active-pro {\r\n              position: absolute;\r\n              width: 100%;\r\n              bottom: 13px; } }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFFO0FBRXJCO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQixFQUFFO0FBQ3ZCO0lBQ0Usc0JBQXNCLEVBQUU7QUFDMUI7SUFDRSxlQUFlLEVBQUU7QUFFckI7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLHFCQUFxQixFQUFFO0FBQ3ZCOztJQUVFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLCtCQUErQixFQUFFO0FBRXJDO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsb0JBQW9CLEVBQUU7QUFDdEI7SUFDRSxzQkFBc0IsRUFBRTtBQUU1QjtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBRTtBQUNuQjtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBRTtBQUNwQjtJQUNFLGlCQUFpQjtJQUNqQixZQUFZLEVBQUU7QUFFbEI7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHVCQUF1QixFQUFFO0FBRTNCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0IsRUFBRTtBQUV4QjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsdUJBQXVCLEVBQUU7QUFDekI7SUFDRSxzQkFBc0IsRUFBRTtBQUMxQjtJQUNFLGdCQUFnQixFQUFFO0FBRXRCO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsMkJBQTJCLEVBQUU7QUFFL0I7RUFDRTs7SUFFRSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtBQUV4QjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLDRCQUE0QixFQUFFO0lBQzlCO01BQ0Usb0JBQW9CLEVBQUU7TUFDdEI7UUFDRSxtQkFBbUIsRUFBRTtNQUN2QjtRQUNFLFNBQVM7UUFDVCxXQUFXLEVBQUU7TUFDZjtRQUNFLHNCQUFzQjtRQUN0QixxQkFBcUIsRUFBRTtJQUMzQjs7TUFFRSxrQkFBa0IsRUFBRTtJQUN0QjtNQUNFLHlCQUF5QjtNQUN6QixpQkFBaUIsRUFBRTtJQUNyQjtNQUNFLGNBQWMsRUFBRTtJQUNsQjtNQUNFLFVBQVU7TUFDVixhQUFhLEVBQUUsRUFBRTtBQUV2QjtFQUNFOztJQUVFLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBRSxFQUFFO0FBRXhCO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsNEJBQTRCLEVBQUU7SUFDOUI7TUFDRSxvQkFBb0IsRUFBRTtNQUN0QjtRQUNFLG1CQUFtQixFQUFFO01BQ3ZCO1FBQ0UsU0FBUztRQUNULFdBQVcsRUFBRTtNQUNmO1FBQ0Usc0JBQXNCO1FBQ3RCLHFCQUFxQixFQUFFO0lBQzNCOztNQUVFLGtCQUFrQixFQUFFO0lBQ3RCO01BQ0UseUJBQXlCO01BQ3pCLGlCQUFpQixFQUFFO0lBQ3JCO01BQ0UsY0FBYyxFQUFFO0lBQ2xCO01BQ0UsVUFBVTtNQUNWLGFBQWEsRUFBRSxFQUFFO0FBRXZCO0VBQ0U7O0lBRUUsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFFLEVBQUU7QUFFeEI7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qiw0QkFBNEIsRUFBRTtJQUM5QjtNQUNFLG9CQUFvQixFQUFFO01BQ3RCO1FBQ0UsbUJBQW1CLEVBQUU7TUFDdkI7UUFDRSxTQUFTO1FBQ1QsV0FBVyxFQUFFO01BQ2Y7UUFDRSxzQkFBc0I7UUFDdEIscUJBQXFCLEVBQUU7SUFDM0I7O01BRUUsa0JBQWtCLEVBQUU7SUFDdEI7TUFDRSx5QkFBeUI7TUFDekIsaUJBQWlCLEVBQUU7SUFDckI7TUFDRSxjQUFjLEVBQUU7SUFDbEI7TUFDRSxVQUFVO01BQ1YsYUFBYSxFQUFFLEVBQUU7QUFFdkI7RUFDRTs7SUFFRSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtBQUV4QjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLDRCQUE0QixFQUFFO0lBQzlCO01BQ0Usb0JBQW9CLEVBQUU7TUFDdEI7UUFDRSxtQkFBbUIsRUFBRTtNQUN2QjtRQUNFLFNBQVM7UUFDVCxXQUFXLEVBQUU7TUFDZjtRQUNFLHNCQUFzQjtRQUN0QixxQkFBcUIsRUFBRTtJQUMzQjs7TUFFRSxrQkFBa0IsRUFBRTtJQUN0QjtNQUNFLHlCQUF5QjtNQUN6QixpQkFBaUIsRUFBRTtJQUNyQjtNQUNFLGNBQWMsRUFBRTtJQUNsQjtNQUNFLFVBQVU7TUFDVixhQUFhLEVBQUUsRUFBRTtBQUV2QjtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBRTtBQUM5Qjs7SUFFRSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUU7QUFDcEI7SUFDRSxvQkFBb0IsRUFBRTtBQUN0QjtNQUNFLG1CQUFtQixFQUFFO0FBQ3ZCO01BQ0UsU0FBUztNQUNULFdBQVcsRUFBRTtBQUNmO01BQ0Usc0JBQXNCO01BQ3RCLHFCQUFxQixFQUFFO0FBQzNCOztJQUVFLGtCQUFrQixFQUFFO0FBQ3RCO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQixFQUFFO0FBQ3JCO0lBQ0UsY0FBYyxFQUFFO0FBQ2xCO0lBQ0UsVUFBVTtJQUNWLGFBQWEsRUFBRTtBQUViO1FBQ0UseUNBQXlDO1FBQ3pDLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBRTtBQUN0QjtRQUNFLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsZUFBZSxFQUFFO0FBRXJCO01BQ0Usa0JBQWtCLEVBQUU7QUFFdEI7TUFDRSxtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsMEJBQTBCO01BQzFCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGVBQWUsRUFBRTtBQUNqQjtRQUNFLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFFO0FBQ3RCOztRQUVFLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsbUJBQW1CLEVBQUU7QUFDdkI7UUFDRSxpQkFBaUI7UUFDakIsU0FBUztRQUNULG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBRTtBQUN0QjtRQUNFLFNBQVMsRUFBRTtBQUdUO1lBQ0UsbUJBQW1CO1lBQ25CLE9BQU87WUFDUCxjQUFjLEVBQUU7QUFHaEI7Y0FDRSxnQkFBZ0I7Y0FDaEIsT0FBTztjQUNQLFVBQVU7Y0FDVixRQUFRO2NBQ1IsV0FBVztjQUNYLGFBQWE7Y0FDYixpQkFBaUI7Y0FDakIsMEhBQTBILEVBQUU7QUFFOUg7Y0FDRSxpQkFBaUI7Y0FDakIsZUFBZSxFQUFFO0FBQ2pCO2dCQUNFLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQixXQUFXLEVBQUU7QUFDZjtnQkFDRSwwQkFBMEI7Z0JBQzFCLHdGQUF3RjtnQkFDeEYsdUJBQXVCLENBQUM7QUFDMUI7Z0JBQ0UsZUFBZSxFQUFFO0FBQ25CO2dCQUNFLFlBQVksRUFBRTtBQUNoQjs7Z0JBRUUsWUFBWSxFQUFFO0FBQ2hCO2dCQUNFLFlBQVksRUFBRTtBQUNoQjtnQkFDRSxlQUFlLEVBQUU7QUFDakI7a0JBQ0UseUJBQXlCO2tCQUN6QixZQUFZO2tCQUNaLG1CQUFtQjtrQkFDbkIsWUFBWTtrQkFDWixXQUFXO2tCQUNYLDJDQUEyQyxFQUFFO0FBQy9DO2tCQUNFLGlCQUFpQixFQUFFO0FBQ3ZCO2dCQUNFLFVBQVU7Z0JBQ1Ysa0JBQWtCO2dCQUNsQixnQkFBZ0I7Z0JBQ2hCLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixhQUFhO2dCQUNiLG9CQUFvQixFQUFFO0FBQ3hCO2dCQUNFLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLGVBQWUsRUFBRTtBQUNyQjs7Y0FFRSxvQkFBb0I7Y0FDcEIsbUJBQW1CO2NBQ25CLGVBQWU7Y0FDZixtQkFBbUI7Y0FDbkIsb0JBQW9CO2NBQ3BCLDJCQUEyQjtjQUMzQixnQkFBZ0I7Y0FDaEIsbUJBQW1CLEVBQUU7QUFDdkI7Y0FDRSxtQkFBbUI7Y0FDbkIsV0FBVztjQUNYLGFBQWE7Y0FDYixZQUFZO2NBQ1osZUFBZTtjQUNmLE9BQU87Y0FDUCxRQUFRO2NBQ1IsdUJBQXVCO2NBQ3ZCLG1DQUFtQyxFQUFFO0FBQ3JDO2dCQUNFLG1CQUFtQjtnQkFDbkIsV0FBVztnQkFDWCxZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixlQUFlO2dCQUNmLG9CQUFvQjtnQkFDcEIsYUFBYSxFQUFFO0FBQy9CO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVcsRUFBRTtBQUVEO2dCQUNFLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixVQUFVO2dCQUNWLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWix5QkFBeUI7Z0JBQ3pCLDJDQUEyQyxFQUFFO0FBQy9DO2dCQUNFLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLFlBQVk7Z0JBQ1osa0JBQWtCLEVBQUU7QUFDdEI7Z0JBQ0UsaUJBQWlCO2dCQUNqQixzQkFBc0I7Z0JBQ3RCLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixvQkFBb0I7Z0JBQ3BCLGlCQUFpQjtnQkFDakIsa0JBQWtCO2dCQUNsQixpQkFBaUI7Z0JBQ2pCLG1CQUFtQjtnQkFDbkIsZUFBZSxFQUFFO0FBR3JCO2NBQ0UsMEJBQTBCO2NBQzFCLHdGQUF3RixFQUFFO0FBRTVGO2NBQ0UsYUFBYSxFQUFFO0FBR25CO1lBQ0UsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYiwwQkFBMEI7WUFDMUIseURBQXlELEVBQUU7QUFDM0Q7Y0FDRSxpQkFBaUI7Y0FDakIsbUJBQW1CO2NBQ25CLGdDQUFnQyxFQUFFO0FBRXBDO2NBQ0UsaUJBQWlCLEVBQUU7QUFJdkI7OztZQUdFLHVDQUF1QztZQUN2QyxtQ0FBbUM7WUFDbkMsK0NBQStDO1lBQy9DLGtDQUFrQyxFQUFFO0FBRXRDO1lBQ0UsaUNBQWlDLEVBQUU7QUFFckM7WUFDRSx5QkFBeUIsRUFBRTtBQUU3QjtZQUNFO2NBQ0UseUJBQXlCLEVBQUU7WUFDN0I7Y0FDRSxpQ0FBaUMsRUFBRTtZQUNyQzs7Y0FFRSxZQUFZLEVBQUU7WUFDaEI7Y0FDRSx5QkFBeUIsRUFBRTtZQUM3QjtjQUNFLGVBQWU7Y0FDZixpQkFBaUI7Y0FDakIsY0FBYyxFQUFFO2NBQ2hCO2dCQUNFLFdBQVc7Z0JBQ1gsNENBQTRDO2dCQUM1QyxvQ0FBb0MsRUFBRTtjQUN4Qzs7OztnQkFJRSw0Q0FBNEM7Z0JBQzVDLG9DQUFvQztnQkFDcEMsV0FBVyxFQUFFO1lBQ2pCO2NBQ0UsYUFBYSxFQUFFO2NBQ2Y7Z0JBQ0UsV0FBVztnQkFDWCwwQ0FBMEM7Z0JBQzFDLGtDQUFrQyxFQUFFO2NBQ3RDO2dCQUNFLGFBQWEsRUFBRTtnQkFDZjs7OztrQkFJRSwwQ0FBMEM7a0JBQzFDLGtDQUFrQztrQkFDbEMsV0FBVyxFQUFFO1lBQ25CO2NBQ0UsbUJBQW1CO2NBQ25CLFlBQVk7Y0FDWixhQUFhLEVBQUUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmF2YmFyIHN0eWxlLmNzcyAqL1xyXG4ubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lOyB9XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyB9XHJcbiAgLm5hdi1saW5rOmhvdmVyLCAubmF2LWxpbms6Zm9jdXMge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiAgLm5hdi1saW5rLmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkOyB9XHJcblxyXG4ubmF2YmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cclxuICAubmF2YmFyID4gLmNvbnRhaW5lcixcclxuICAubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiAwLjMxMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMzEyNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cclxuICAubmF2YmFyLWJyYW5kOmhvdmVyLCAubmF2YmFyLWJyYW5kOmZvY3VzIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lOyB9XHJcbiAgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cclxuICAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgZmxvYXQ6IG5vbmU7IH1cclxuXHJcbi5uYXZiYXItdGV4dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTsgfVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cclxuICAubmF2YmFyLXRvZ2dsZXI6aG92ZXIsIC5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuICAubmF2YmFyLXRvZ2dsZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxLjVlbTtcclxuICBoZWlnaHQ6IDEuNWVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgLm5hdmJhci1leHBhbmQtc20gPiAuY29udGFpbmVyLFxyXG4gIC5uYXZiYXItZXhwYW5kLXNtID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9IH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLXNtIHtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxyXG4gICAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XHJcbiAgICAgIC5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cclxuICAgICAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGxlZnQ6IGF1dG87IH1cclxuICAgICAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07IH1cclxuICAgIC5uYXZiYXItZXhwYW5kLXNtID4gLmNvbnRhaW5lcixcclxuICAgIC5uYXZiYXItZXhwYW5kLXNtID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWJhc2lzOiBhdXRvOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1zbSAuZHJvcHVwIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDEwMCU7IH0gfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLm5hdmJhci1leHBhbmQtbWQgPiAuY29udGFpbmVyLFxyXG4gIC5uYXZiYXItZXhwYW5kLW1kID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9IH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLW1kIHtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxyXG4gICAgLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XHJcbiAgICAgIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cclxuICAgICAgLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGxlZnQ6IGF1dG87IH1cclxuICAgICAgLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07IH1cclxuICAgIC5uYXZiYXItZXhwYW5kLW1kID4gLmNvbnRhaW5lcixcclxuICAgIC5uYXZiYXItZXhwYW5kLW1kID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWJhc2lzOiBhdXRvOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1tZCAuZHJvcHVwIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDEwMCU7IH0gfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLm5hdmJhci1leHBhbmQtbGcgPiAuY29udGFpbmVyLFxyXG4gIC5uYXZiYXItZXhwYW5kLWxnID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9IH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLWxnIHtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxyXG4gICAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XHJcbiAgICAgIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cclxuICAgICAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGxlZnQ6IGF1dG87IH1cclxuICAgICAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07IH1cclxuICAgIC5uYXZiYXItZXhwYW5kLWxnID4gLmNvbnRhaW5lcixcclxuICAgIC5uYXZiYXItZXhwYW5kLWxnID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWJhc2lzOiBhdXRvOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1sZyAuZHJvcHVwIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDEwMCU7IH0gfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLXhsID4gLmNvbnRhaW5lcixcclxuICAubmF2YmFyLWV4cGFuZC14bCA+IC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDsgfSB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLm5hdmJhci1leHBhbmQteGwge1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuICAgICAgLm5hdmJhci1leHBhbmQteGwgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxyXG4gICAgICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudS1yaWdodCB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbGVmdDogYXV0bzsgfVxyXG4gICAgICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTsgfVxyXG4gICAgLm5hdmJhci1leHBhbmQteGwgPiAuY29udGFpbmVyLFxyXG4gICAgLm5hdmJhci1leHBhbmQteGwgPiAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgZmxleC13cmFwOiBub3dyYXA7IH1cclxuICAgIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtYmFzaXM6IGF1dG87IH1cclxuICAgIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cclxuICAgIC5uYXZiYXItZXhwYW5kLXhsIC5kcm9wdXAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICB0b3A6IGF1dG87XHJcbiAgICAgIGJvdHRvbTogMTAwJTsgfSB9XHJcblxyXG4ubmF2YmFyLWV4cGFuZCB7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxyXG4gIC5uYXZiYXItZXhwYW5kID4gLmNvbnRhaW5lcixcclxuICAubmF2YmFyLWV4cGFuZCA+IC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDsgfVxyXG4gIC5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuICAgIC5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudS1yaWdodCB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBsZWZ0OiBhdXRvOyB9XHJcbiAgICAubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtOyB9XHJcbiAgLm5hdmJhci1leHBhbmQgPiAuY29udGFpbmVyLFxyXG4gIC5uYXZiYXItZXhwYW5kID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgfVxyXG4gIC5uYXZiYXItZXhwYW5kIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1iYXNpczogYXV0bzsgfVxyXG4gIC5uYXZiYXItZXhwYW5kIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBkaXNwbGF5OiBub25lOyB9XHJcbiAgLm5hdmJhci1leHBhbmQgLmRyb3B1cCAuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IDEwMCU7IH1cclxuXHJcbiAgICAgIC5uYXZiYXIubmF2YmFyLXRyYW5zcGFyZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7IH1cclxuICAgICAgLm5hdmJhciAubm90aWZpY2F0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcblxyXG4gICAgLm5hdmJhci5uYXZiYXItdHJhbnNwYXJlbnQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDsgfVxyXG5cclxuICAgIC5uYXZiYXIgLmNvbGxhcHNlIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDsgfVxyXG4gICAgICAubmF2YmFyIC5jb2xsYXBzZSAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOm5vdCguYnRuLWp1c3QtaWNvbikgLmZhIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxyXG4gICAgICAubmF2YmFyIC5jb2xsYXBzZSAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIC5tYXRlcmlhbC1pY29ucyxcclxuICAgICAgLm5hdmJhciAuY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayAuZmEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuMWVtOyB9XHJcbiAgICAgIC5uYXZiYXIgLmNvbGxhcHNlIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6bm90KC5idG4pIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7IH1cclxuICAgICAgLm5hdmJhciAuY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayAubm90aWZpY2F0aW9uIHtcclxuICAgICAgICB0b3A6IDBweDsgfVxyXG5cclxuXHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoOyB9XHJcblxyXG5cclxuICAgICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDE2cHggMzhweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNTYpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpOyB9XHJcblxyXG4gICAgICAgICAgICAuc2lkZWJhciAubmF2IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXIgLm5hdiAuY2FyZXQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA2cHg7IH1cclxuICAgICAgICAgICAgICAuc2lkZWJhciAubmF2IGxpID4gYTpob3ZlciwgLnNpZGViYXIgLm5hdiBsaSA+IGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDE1NiwgMzksIDE3NiwgMC40KTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7fVxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIC5uYXYgbGk6Zmlyc3QtY2hpbGQgPiBhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4OyB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXIgLm5hdiBsaS5hY3RpdmUgPiBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXIgLm5hdiBsaS5hY3RpdmUgPiBhLFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIC5uYXYgbGkuYWN0aXZlID4gYSBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXIgLm5hdiBsaS5hY3RpdmUgPiBhIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7IH1cclxuICAgICAgICAgICAgICAuc2lkZWJhciAubmF2IGxpLnNlcGFyYXRvciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDsgfVxyXG4gICAgICAgICAgICAgICAgLnNpZGViYXIgLm5hdiBsaS5zZXBhcmF0b3I6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTsgfVxyXG4gICAgICAgICAgICAgICAgLnNpZGViYXIgLm5hdiBsaS5zZXBhcmF0b3IgKyBsaSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMxcHg7IH1cclxuICAgICAgICAgICAgICAuc2lkZWJhciAubmF2IHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cclxuICAgICAgICAgICAgICAuc2lkZWJhciAubmF2IGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhOWFmYmI7IH1cclxuICAgICAgICAgICAgLnNpZGViYXIgLm5hdiBsaSBhLFxyXG4gICAgICAgICAgICAuc2lkZWJhciAubmF2IGxpIC5kcm9wZG93bi1tZW51IGEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjM0M0ODU4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IH1cclxuICAgICAgICAgICAgLnNpZGViYXIgLnNpZGViYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgfVxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIC5zaWRlYmFyLWJhY2tncm91bmQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44MzsgfVxyXG4uc2lkZWJhciAubG9nbyB7XHJcbiAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA0OyB9XHJcblxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIC5sb2dvOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTsgfVxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIC5sb2dvIHAge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7IH1cclxuICAgICAgICAgICAgICAuc2lkZWJhciAubG9nbyAuc2ltcGxlLXRleHQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjM0M0ODU4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC5zaWRlYmFyW2RhdGEtY29sb3I9XCJwdXJwbGVcIl0gbGkuYWN0aXZlID4gYSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuNCk7IH1cclxuXHJcbiAgICAgICAgICAgIC5zaWRlYmFyW2RhdGEtaW1hZ2VdOmFmdGVyLCAuc2lkZWJhci5oYXMtaW1hZ2U6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IC4zMDsgfVxyXG5cclxuXHJcbiAgICAgICAgICAubWFpbi1wYW5lbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjMzcywgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTsgfVxyXG4gICAgICAgICAgICAubWFpbi1wYW5lbCA+IC5jb250ZW50IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIzcHgpOyB9XHJcblxyXG4gICAgICAgICAgICAubWFpbi1wYW5lbCA+IC5uYXZiYXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuXHJcblxyXG5cclxuICAgICAgICAgIC5zaWRlYmFyLFxyXG4gICAgICAgICAgLm1haW4tcGFuZWwsXHJcbiAgICAgICAgICAuc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLGJvdHRvbSwgd2lkdGg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycywuMnMsIC4zNXM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIsbGluZWFyLGVhc2U7XHJcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxyXG5cclxuICAgICAgICAgIC52aXNpYmxlLW9uLXNpZGViYXItcmVndWxhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OyB9XHJcblxyXG4gICAgICAgICAgLnZpc2libGUtb24tc2lkZWJhci1taW5pIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIC5zaWRlYmFyLW1pbmkgLnZpc2libGUtb24tc2lkZWJhci1yZWd1bGFyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxuICAgICAgICAgICAgLnNpZGViYXItbWluaSAudmlzaWJsZS1vbi1zaWRlYmFyLW1pbmkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OyB9XHJcbiAgICAgICAgICAgIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIsXHJcbiAgICAgICAgICAgIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7IH1cclxuICAgICAgICAgICAgLnNpZGViYXItbWluaSAubWFpbi1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpOyB9XHJcbiAgICAgICAgICAgIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5OTsgfVxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIgLmxvZ28gYS5sb2dvLW5vcm1hbCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApOyB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXItbWluaSAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCxcclxuICAgICAgICAgICAgICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCxcclxuICAgICAgICAgICAgICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyA+IGEgPiBzcGFuLFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciA+IC5uYXYgbGkgPiBhIHAge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDsgfVxyXG4gICAgICAgICAgICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7IH1cclxuICAgICAgICAgICAgICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5sb2dvIGEubG9nby1ub3JtYWwge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApOyB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDsgfVxyXG4gICAgICAgICAgICAgICAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBsaSA+IGEgcCxcclxuICAgICAgICAgICAgICAgIC5zaWRlYmFyLW1pbmkgLnNpZGViYXI6aG92ZXIgLnNpZGViYXItd3JhcHBlciA+IC5uYXYgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwsXHJcbiAgICAgICAgICAgICAgICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCxcclxuICAgICAgICAgICAgICAgIC5zaWRlYmFyLW1pbmkgLnNpZGViYXI6aG92ZXIgLnNpZGViYXItd3JhcHBlciAudXNlciAudXNlci1pbmZvID4gYSA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOyB9XHJcbiAgICAgICAgICAgIC5zaWRlYmFyIC5uYXYgLm5hdi1pdGVtLmFjdGl2ZS1wcm8ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBib3R0b206IDEzcHg7IH0gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- When login is false -->\n<div *ngIf=\"!auth.isLoggedIn\">\n  <app-login></app-login>\n</div>\n<!-- When log in is true -->\n<div class=\"wrapper\" *ngIf=\"auth.isLoggedIn\">\n  <div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/plan.jpg\" [ngClass]=\"{ 'active': navbarOpen }\">\n    <div class=\"logo\">\n      <a href=\"\" class=\"simple-text logo-normal\" style=\"font-family: 'Lobster', cursive;\"><img src=\"../assets/img/startup.svg\" onerror=\"this.onerror=null; this.src='startup.png'\" style=\"height:30px; width:30px;\">Accelerator</a>\n    </div>\n    <div class=\"sidebar-wrapper\">\n      <div class=\"logo row\">\n        <a *ngIf=\"profile?.is_coach\"  class=\"user-text\" style=\"font-weight:500;\">COACH</a>\n        <a *ngIf=\"profile?.is_team_member\" class=\"user-text\" style=\"font-weight:500;\">TEAM MEMBER</a>\n        <a  class=\"user-text\" style=\"font-weight:500;\">{{userdata.username}}</a>\n      </div>\n      <ul class=\"nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/users\">\n            <i class=\"material-icons\">assignment_ind</i>\n            <p>Profile</p>\n          </a>\n        </li>\n        <li *ngIf=\"profile?.is_coach\" class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/teams\">\n            <i class=\"material-icons\">group</i>\n            <p>Teams</p>\n          </a>\n        </li>\n        <li *ngIf=\"profile?.is_team_member\" class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/teamdeliverables\">\n            <i class=\"material-icons\">assignment</i>\n            <p>Deliverables</p>\n          </a>\n        </li>\n        <li *ngIf=\"profile?.is_coach\" class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/deliverables\">\n            <i class=\"material-icons\">assignment</i>\n            <p>Deliverables</p>\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <app-login></app-login>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"main-panel\">\n    <router-outlet ></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ "./src/app/profile.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
        this.title = 'Accelerator';
        this.userdata = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.id = null;
        this.profile = new _profile__WEBPACK_IMPORTED_MODULE_4__["Profile"]();
        this.name = '';
        this.email = '';
        this.phone = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('vap-jwt-access-token') !== null || localStorage.getItem('vap-jwt-refresh-token') !== null) {
            this.auth.isLoggedIn = true;
            var user = JSON.parse(localStorage.getItem('user'));
            this.profile = user.profile;
            this.userdata = user;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/token.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _team_member_team_member_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team-member/team-member.component */ "./src/app/team-member/team-member.component.ts");
/* harmony import */ var _team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team-detail/team-detail.component */ "./src/app/team-detail/team-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _deliverable_deliverable_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deliverable/deliverable.component */ "./src/app/deliverable/deliverable.component.ts");
/* harmony import */ var _team_search_team_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./team-search/team-search.component */ "./src/app/team-search/team-search.component.ts");
/* harmony import */ var _team_member_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./team-member.service */ "./src/app/team-member.service.ts");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./team.service */ "./src/app/team.service.ts");
/* harmony import */ var _deliverable_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./deliverable.service */ "./src/app/deliverable.service.ts");
/* harmony import */ var _teamdeliverable_teamdeliverable_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./teamdeliverable/teamdeliverable.component */ "./src/app/teamdeliverable/teamdeliverable.component.ts");
/* harmony import */ var _teamdeliverable_detail_teamdeliverable_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./teamdeliverable-detail/teamdeliverable-detail.component */ "./src/app/teamdeliverable-detail/teamdeliverable-detail.component.ts");
/* harmony import */ var _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./teamdeliverable.service */ "./src/app/teamdeliverable.service.ts");
/* harmony import */ var _teamdel_teamdel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./teamdel/teamdel.component */ "./src/app/teamdel/teamdel.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _team_card_team_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./team-card/team-card.component */ "./src/app/team-card/team-card.component.ts");
/* harmony import */ var _deliverables_team_deliverables_team_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./deliverables-team/deliverables-team.component */ "./src/app/deliverables-team/deliverables-team.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _coach_deliverables_coach_deliverables_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./coach-deliverables/coach-deliverables.component */ "./src/app/coach-deliverables/coach-deliverables.component.ts");
/* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/app/upload-file/upload-file.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _teams_teams_component__WEBPACK_IMPORTED_MODULE_9__["TeamsComponent"],
                _team_member_team_member_component__WEBPACK_IMPORTED_MODULE_10__["TeamMemberComponent"],
                _team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_11__["TeamDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"],
                _deliverable_deliverable_component__WEBPACK_IMPORTED_MODULE_14__["DeliverableComponent"],
                _team_search_team_search_component__WEBPACK_IMPORTED_MODULE_15__["TeamSearchComponent"],
                _teamdeliverable_teamdeliverable_component__WEBPACK_IMPORTED_MODULE_19__["TeamdeliverableComponent"],
                _teamdeliverable_detail_teamdeliverable_detail_component__WEBPACK_IMPORTED_MODULE_20__["TeamdeliverableDetailComponent"],
                _teamdel_teamdel_component__WEBPACK_IMPORTED_MODULE_22__["TeamdelComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_25__["UserComponent"],
                _team_card_team_card_component__WEBPACK_IMPORTED_MODULE_27__["TeamCardComponent"],
                _deliverables_team_deliverables_team_component__WEBPACK_IMPORTED_MODULE_28__["DeliverablesTeamComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_29__["CommentsComponent"],
                _coach_deliverables_coach_deliverables_component__WEBPACK_IMPORTED_MODULE_30__["CoachDeliverablesComponent"],
                _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_31__["UploadFileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _team_member_service__WEBPACK_IMPORTED_MODULE_16__["TeamMemberService"], _team_service__WEBPACK_IMPORTED_MODULE_17__["TeamService"], _deliverable_service__WEBPACK_IMPORTED_MODULE_18__["DeliverableService"], _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_21__["TeamdeliverableService"], _user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"], _auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                    multi: true,
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");






var Credentials = /** @class */ (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var authUrl = "api/token/";
        var credentials = new Credentials(username, password);
        return this.http
            .post(authUrl, credentials, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (results) {
            if (results['access']) {
                localStorage.setItem('vap-jwt-access-token', results['access']);
                _this.isLoggedIn = true;
                if (results['refresh']) {
                    localStorage.setItem('vap-jwt-refresh-token', results['refresh']);
                }
                _this.userService.getUser(username).subscribe(function (user) { return localStorage.setItem('user', JSON.stringify(user)); });
                console.log("Return true");
                return true;
            }
            else {
                console.log("Return false");
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log("Return false catchError");
            console.log("Login service: " + error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('user');
        localStorage.removeItem('vap-jwt-access-token');
        localStorage.removeItem('vap-jwt-refresh-token');
        this.isLoggedIn = false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/coach-deliverables/coach-deliverables.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/coach-deliverables/coach-deliverables.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\ncolor:rgb(127, 140, 141);\r\n}\r\n\r\na:hover {\r\ncolor: #c1e2fc;\r\n}\r\n\r\n.circle-icon {\r\nbackground: grey;\r\ncolor:white;\r\nborder-radius: 50%;\r\ntext-align: center;\r\nvertical-align: middle;\r\npadding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29hY2gtZGVsaXZlcmFibGVzL2NvYWNoLWRlbGl2ZXJhYmxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EseUJBQXlCO0NBQ3hCOztBQUVEO0FBQ0EsZUFBZTtDQUNkOztBQUVEO0FBQ0EsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2QixjQUFjO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb2FjaC1kZWxpdmVyYWJsZXMvY29hY2gtZGVsaXZlcmFibGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuY29sb3I6cmdiKDEyNywgMTQwLCAxNDEpO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuY29sb3I6ICNjMWUyZmM7XHJcbn1cclxuXHJcbi5jaXJjbGUtaWNvbiB7XHJcbmJhY2tncm91bmQ6IGdyZXk7XHJcbmNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxucGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/coach-deliverables/coach-deliverables.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/coach-deliverables/coach-deliverables.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <div class=\"card card-nav-tabs\">\n    <h4 class=\"card-header card-header-primary user-text click\" style=\"font-weight:500;\">\n      <b class=\"\">TEAMS'S DELIVERABLES</b>\n    </h4>\n    <div class=\"card-body\">\n      <!--Team Information-->\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <div >\n            <table class=\"table col-10\">\n                <tbody>\n                    <tr *ngFor = \"let teamDeliverable of teamDeliverables\">\n                        <td><a [routerLink]=\"['/../teams/', teamDeliverable.team.id, 'teamdeliverables', teamDeliverable.id]\" class=\"bold\">\n                          <i *ngIf=\"teamDeliverable.status\" class=\"material-icons circle-icon del_success\" >{{teamDeliverable.deliverable.icon}}</i>\n                          <i *ngIf=\"!teamDeliverable.status && !deliverable_color(teamDeliverable.deadline)\" class=\"material-icons circle-icon del_danger\" >{{teamDeliverable.deliverable.icon}}</i>\n                          <i *ngIf=\"!teamDeliverable.status && deliverable_color(teamDeliverable.deadline)\" class=\"material-icons circle-icon\" >{{teamDeliverable.deliverable.icon}}</i>\n                          </a></td>\n                        <td><a [routerLink]=\"['/../teams/', teamDeliverable.team.id, 'teamdeliverables', teamDeliverable.id]\" class=\"bold\">\n                          <h6>{{teamDeliverable.deliverable.title}}</h6></a></td>\n                        <td> <a [routerLink]=\"['/../teams/', teamDeliverable.team.id]\"><h6>{{teamDeliverable.team.name}}</h6></a></td>\n                        <td><h6>{{teamDeliverable.deadline | date: 'dd/MM/yyyy'}}</h6></td>\n                    </tr>\n                </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/coach-deliverables/coach-deliverables.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/coach-deliverables/coach-deliverables.component.ts ***!
  \********************************************************************/
/*! exports provided: CoachDeliverablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachDeliverablesComponent", function() { return CoachDeliverablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teamdeliverable.service */ "./src/app/teamdeliverable.service.ts");





var CoachDeliverablesComponent = /** @class */ (function () {
    function CoachDeliverablesComponent(route, datePipe, teamDeliverableService) {
        this.route = route;
        this.datePipe = datePipe;
        this.teamDeliverableService = teamDeliverableService;
        this.today = Date.now();
    }
    CoachDeliverablesComponent.prototype.ngOnInit = function () {
        this.date = new Date(this.today);
        this.getAllTeamDeliverables();
    };
    CoachDeliverablesComponent.prototype.deliverable_color = function (deadline) {
        if (!deadline) {
            return true;
        }
        if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.date, 'yyyy-MM-dd')) {
            return true;
        }
        else {
            return false;
        }
    };
    CoachDeliverablesComponent.prototype.getAllTeamDeliverables = function () {
        var _this = this;
        this.teamDeliverableService.getAllTeamDeliverables()
            .subscribe(function (teamDeliverables) { return _this.teamDeliverables = teamDeliverables.slice(0, 15); });
    };
    CoachDeliverablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coach-deliverables',
            template: __webpack_require__(/*! ./coach-deliverables.component.html */ "./src/app/coach-deliverables/coach-deliverables.component.html"),
            styles: [__webpack_require__(/*! ./coach-deliverables.component.css */ "./src/app/coach-deliverables/coach-deliverables.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_4__["TeamdeliverableService"]])
    ], CoachDeliverablesComponent);
    return CoachDeliverablesComponent;
}());



/***/ }),

/***/ "./src/app/coach.service.ts":
/*!**********************************!*\
  !*** ./src/app/coach.service.ts ***!
  \**********************************/
/*! exports provided: CoachService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachService", function() { return CoachService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var CoachService = /** @class */ (function () {
    function CoachService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    /** GET coach by id. Will 404 if id not found */
    CoachService.prototype.getCoach = function (id) {
        var _this = this;
        var url = "api/coaches/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched coach user=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCoach user=" + id)));
    };
    /** PUT: update the team member on the server */
    CoachService.prototype.updateCoach = function (coach) {
        var url = "api/coaches/" + coach.user;
        return this.http.put(url, coach, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateCoach', coach)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CoachService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    CoachService.prototype.log = function (message) {
        this.messageService.add('TeamMemberService: ' + message);
    };
    CoachService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], CoachService);
    return CoachService;
}());



/***/ }),

/***/ "./src/app/coach.ts":
/*!**************************!*\
  !*** ./src/app/coach.ts ***!
  \**************************/
/*! exports provided: Coach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coach", function() { return Coach; });
var Coach = /** @class */ (function () {
    function Coach() {
    }
    return Coach;
}());



/***/ }),

/***/ "./src/app/comment.ts":
/*!****************************!*\
  !*** ./src/app/comment.ts ***!
  \****************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/comments.service.ts":
/*!*************************************!*\
  !*** ./src/app/comments.service.ts ***!
  \*************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CommentsService = /** @class */ (function () {
    function CommentsService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    /** GET comments from the server */
    CommentsService.prototype.getComments = function (teamdeliverableId, teamId) {
        var _this = this;
        var url = "api/teams/" + teamId + "/teamdeliverables/" + teamdeliverableId + "/comments";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (comments) { return _this.log("fetched comments"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getComments', [])));
    };
    /** GET comments by id. Will 404 if id not found */
    CommentsService.prototype.getComment = function (id, team, teamdeliverableId) {
        var _this = this;
        var url = "api/teams/" + team + "/teamdeliverables/" + teamdeliverableId + "/comments/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched comment id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getComment id=" + id)));
    };
    /** POST: add a new comment to the server */
    CommentsService.prototype.addComment = function (comment, teamId) {
        var _this = this;
        var url = "api/teams/" + teamId + "/teamdeliverables/" + comment.teamdeliverable + "/comments";
        return this.http.post(url, comment, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (comment) { return _this.log("added comment w/ id=" + comment.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addComment')));
    };
    /** PUT: update the comment on the server */
    CommentsService.prototype.updateComment = function (comment, teamId) {
        var _this = this;
        var url = "api/teams/" + teamId + "/teamdeliverables/" + comment.teamdeliverable + "/comments/" + comment.id;
        return this.http.put(url, comment, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated comment id=" + comment.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateComment')));
    };
    /** DELETE: delete the xomment from the server */
    CommentsService.prototype.deleteComment = function (comment, teamId) {
        var _this = this;
        var url = "api/teams/" + teamId + "/teamdeliverables/" + comment.teamdeliverable + "/comments/" + comment.id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted comment id=" + comment.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteComment')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CommentsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    CommentsService.prototype.log = function (message) {
        this.messageService.add('TeamDeliverableService: ' + message);
    };
    CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar_position{\r\n  text-align: right;\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  margin-top:10px;\r\n}\r\n\r\n.avatar{\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  height:50px;\r\n  width:50px;\r\n  border: 1px solid #e1e1ea;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsNEVBQTRFO0NBQzdFIiwiZmlsZSI6InNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJfcG9zaXRpb257XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLmF2YXRhcntcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6NTBweDtcclxuICB3aWR0aDo1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZWE7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"text-center\">Comments:</h3>\n  <div *ngFor=\"let comment of comments\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-lg-1 col-md-2 col-sm-4 avatar_position\">\n        <img src=\"../../assets/img/faces/{{comment.coach.user}}.png\" class=\"avatar\">\n      </div>\n      <div class=\"col-lg-10 col-md-9 col-sm-7\">\n        <div class=\"card\">\n          <div class=\"card-header\" style=\"color: #333; background-color: #f5f5f5;\" >\n            <div class=\"row justify-content-between\">\n              <div>\n                <b>{{comment.coach.name}}</b>, <span class=\"text-muted\">{{comment.date | date: 'dd/MM/yyyy'}}</span>\n              </div>\n              <div *ngIf=\"is_coach\" style=\"text-align:right;\">\n                <a class=\"delete\" title=\"delete comment\"\n                (click)=\"delete(comment)\"> <i class=\"material-icons circle-icon\" style=\"color: grey\">clear</i> </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            {{comment.text}}\n          </div>\n        </div>\n      </div>\n    </div>\n      <br>\n  </div>\n\n  <div *ngIf=\"!comments?.length && is_team_member\" class=\"text-center\">\n    <h6><strong>No comments</strong></h6>\n  </div>\n  <!-- Add comment -->\n  <div *ngIf=\"is_coach\">\n\n    <h6><strong>Add new comment:</strong></h6>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-1 col-md-2 col-sm-4 avatar_position\">\n        <img src=\"../../assets/img/faces/{{profile.user}}.png\" class=\"avatar\">\n      </div>\n      <div class=\"col-10\">\n        <div class=\"card\">\n          <div class=\"card-header\" style=\"color: #333; background-color: #f5f5f5;\" >\n            {{profile.name}}\n          </div>\n          <div class=\"card-body\">\n            <form (ngSubmit)=\"onSubmit()\" #commentForm=\"ngForm\">\n              <div>\n                <textarea class=\"form-control\"\n                          rows=\"2\"\n                          id=\"text\"\n                          [(ngModel)]=\"comment.text\"\n                          name=\"text\"\n                          placeholder=\"Add a comment\">\n                  </textarea>\n              </div>\n              <div style=\"float: right;\">\n                Submit <button type=\"submit\" class=\"btn btn-circle\" style=\"background-color:#26c6da;\"><i class=\"material-icons circle-icon\">add</i></button>\n              </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comment */ "./src/app/comment.ts");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comments.service */ "./src/app/comments.service.ts");
/* harmony import */ var _team_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../team-member.service */ "./src/app/team-member.service.ts");
/* harmony import */ var _coach_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../coach.service */ "./src/app/coach.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../profile */ "./src/app/profile.ts");










var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(route, datePipe, commentsService, teamMemberService, coachService) {
        this.route = route;
        this.datePipe = datePipe;
        this.commentsService = commentsService;
        this.teamMemberService = teamMemberService;
        this.coachService = coachService;
        this.today = Date.now();
        this.teamdeliverable = +this.route.snapshot.paramMap.get('id');
        this.user = new _user__WEBPACK_IMPORTED_MODULE_8__["User"]();
        this.profile = new _profile__WEBPACK_IMPORTED_MODULE_9__["Profile"]();
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.date = new Date(this.today);
        var teamId = this.teamId;
        this.teamdeliverable = +this.route.snapshot.paramMap.get('id');
        this.getComments(this.teamdeliverable, teamId);
        this.user = JSON.parse(localStorage.getItem('user'));
        this.profile = this.user.profile;
        this.photo = this.user.profile.photo;
        this.is_team_member = this.user.profile.is_team_member;
        this.is_coach = this.user.profile.is_coach;
        if (this.user.profile.is_coach) {
            this.getCoachDetails(this.user.id);
            this.comment = this.newComment(this.teamdeliverable, this.user.id);
        }
    };
    CommentsComponent.prototype.getCoachDetails = function (userId) {
        var _this = this;
        this.coachService.getCoach(userId)
            .subscribe(function (coach) {
            _this.coach = coach;
            _this.photo = coach.photo;
        });
    };
    CommentsComponent.prototype.getComments = function (teamdeliverableId, teamId) {
        var _this = this;
        this.commentsService.getComments(teamdeliverableId, teamId)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    CommentsComponent.prototype.newComment = function (teamdeliverableId, coachId) {
        var comment = new _comment__WEBPACK_IMPORTED_MODULE_4__["Comment"]();
        comment.teamdeliverable = teamdeliverableId;
        comment.coach = this.user.id;
        comment.text = null;
        return comment;
    };
    CommentsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.commentsService.addComment(this.comment, this.teamId)
            .subscribe(function (comment) {
            if (comment) {
                _this.comments.unshift(comment);
                _this.comment = _this.newComment(comment.teamdeliverable, comment.coach);
            }
        });
    };
    CommentsComponent.prototype.delete = function (comment) {
        this.comments = this.comments.filter(function (c) { return c !== comment; });
        this.commentsService.deleteComment(comment, this.teamId).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CommentsComponent.prototype, "teamId", void 0);
    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _comments_service__WEBPACK_IMPORTED_MODULE_5__["CommentsService"],
            _team_member_service__WEBPACK_IMPORTED_MODULE_6__["TeamMemberService"],
            _coach_service__WEBPACK_IMPORTED_MODULE_7__["CoachService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/deliverable.service.ts":
/*!****************************************!*\
  !*** ./src/app/deliverable.service.ts ***!
  \****************************************/
/*! exports provided: DeliverableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverableService", function() { return DeliverableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DeliverableService = /** @class */ (function () {
    function DeliverableService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.deliverablesUrl = 'api/deliverables';
    }
    DeliverableService.prototype.log = function (message) {
        this.messageService.add('DeliverableService: ' + message);
    };
    DeliverableService.prototype.getDeliverables = function () {
        var _this = this;
        return this.http.get(this.deliverablesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log('fetched deliverables'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDeliverables', [])));
    };
    /** GET deliverable by id. Will 404 if id not found */
    DeliverableService.prototype.getDeliverable = function (id) {
        var _this = this;
        var url = this.deliverablesUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched deliverable id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getDeliverable id=" + id)));
    };
    /** POST: add a new deliverable to the server */
    DeliverableService.prototype.addDeliverable = function (deliverable) {
        var _this = this;
        var url = "api/deliverables";
        return this.http.post(url, deliverable, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (deliverable) { return _this.log("added deliverable w/ id=" + deliverable.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addDeliverable')));
    };
    /** DELETE: delete the deliverable from the server */
    DeliverableService.prototype.deleteDeliverable = function (deliverable) {
        var _this = this;
        var id = typeof deliverable === 'number' ? deliverable : deliverable.id;
        var url = this.deliverablesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted deliverable id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteDeliverable')));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    DeliverableService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    DeliverableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], DeliverableService);
    return DeliverableService;
}());



/***/ }),

/***/ "./src/app/deliverable.ts":
/*!********************************!*\
  !*** ./src/app/deliverable.ts ***!
  \********************************/
/*! exports provided: Deliverable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deliverable", function() { return Deliverable; });
var Deliverable = /** @class */ (function () {
    function Deliverable() {
    }
    return Deliverable;
}());



/***/ }),

/***/ "./src/app/deliverable/deliverable.component.css":
/*!*******************************************************!*\
  !*** ./src/app/deliverable/deliverable.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .deliverables {\r\n  margin-top: 30px;\r\n}\r\n\r\n.btn-file {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.btn-file input[type=file] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    font-size: 100px;\r\n    text-align: right;\r\n    opacity: 0;\r\n    outline: none;\r\n    cursor: inherit;\r\n    display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcmFibGUvZGVsaXZlcmFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztFQUNDLGlCQUFpQjtDQUNsQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJhYmxlL2RlbGl2ZXJhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmRlbGl2ZXJhYmxlcyB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJ0bi1maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJ0bi1maWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/deliverable/deliverable.component.html":
/*!********************************************************!*\
  !*** ./src/app/deliverable/deliverable.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg\">\n    <button class=\"navbar-toggler\"\n            type=\"button\"\n            data-toggle=\"collapse\"\n            data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <button  type=\"button\" class=\"btn btn-outline-primary\" (click)=\"open(content)\"> Add Deliverable </button>\n  </nav>\n  <div class=\"deliverables\">\n    <div class=\"row\">\n      <div *ngFor=\"let deliverable of deliverables\" class=\"col-lg-6 col-md-6 col-sm-12\">\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-warning card-header-icon\">\n              <div class=\"card-icon\">\n                  <i class=\"material-icons\">{{deliverable.icon}}</i>\n              </div>\n              <br>\n              <h3 class=\"card-title\">{{deliverable.title}}</h3>\n              <p class=\"card-category\">{{deliverable.pipeline}}</p>\n            </div>\n            <div class=\"container\">\n                <h6><b class=\"bold\">Instructions:</b> {{deliverable.description}}</h6>\n                <div class=\"text-center\">\n                  <h6><b class=\"bold\">Download file:</b></h6>\n                  <a href=\"{{deliverable.template}}\">{{deliverable.title}} Template</a>\n                </div>\n            </div>\n            <br>\n            <div class=\"card-footer\" style=\"border-top: 1px solid #eee;\">\n              <div class=\"stats\">\n                <h6><strong>Released:</strong>&nbsp;{{deliverable.release_date | date: 'dd/MM/yyyy'}}</h6>\n              </div>\n              <div class=\"stats\">\n                <button class=\"delete\" title=\"delete deliverable\" type=\"button\" class=\"btn btn-link\"\n                (click)=\"delete(deliverable)\">Delete</button>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add new deliverable</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10\">\n        <form (ngSubmit)=\"onSubmit()\" #deliverableForm=\"ngForm\">\n          <div class=\"form-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"name\"\n                   [(ngModel)]=\"deliverable.title\"\n                   name=\"name\"\n                   placeholder=\"Deliverable Title\"\n                   required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"pipeline\"\n                   [(ngModel)]=\"deliverable.pipeline\"\n                   name=\"pipeline\"\n                   placeholder=\"Pipeline\"\n                   required>\n          </div>\n          <div class=\"form-group\">\n            <h6>Choose a material icon from <a href=\"https://material.io/tools/icons/?style=baseline\">material.io/tools/icons</a> and write its name.</h6>\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"icon\"\n                   [(ngModel)]=\"deliverable.icon\"\n                   name=\"icon\"\n                   placeholder=\"material icon\"\n                   required>\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\"\n                      rows=\"5\"\n                      id=\"tag_line\"\n                      [(ngModel)]=\"deliverable.description\"\n                      name=\"tag_line\"\n                      placeholder=\"Instructions\">\n              </textarea>\n          </div>\n          <div class=\"text-center\" *ngIf=\"!is_coach\">\n                <h6 *ngIf=\"message\"><b class=\"bold\">{{message}}</b></h6>\n                <h6><b class=\"bold\">Upload a PDF file:</b></h6>\n                <div>\n                  <span class=\"btn btn-outline-primary btn-file\">\n                    Upload <input name=\"file\" type=\"file\" accept=\"application/pdf\" (change)=\"handleInputChange($event)\">\n                  </span>\n                </div>\n                <div *ngFor=\"let template of templates\">\n                  <h6>{{template}}</h6>\n                </div>\n          </div>\n          <div class=\"text-center\">\n            <br>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </div>\n          </form>\n        </div>\n  </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/deliverable/deliverable.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deliverable/deliverable.component.ts ***!
  \******************************************************/
/*! exports provided: DeliverableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverableComponent", function() { return DeliverableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deliverable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deliverable */ "./src/app/deliverable.ts");
/* harmony import */ var _deliverable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deliverable.service */ "./src/app/deliverable.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var DeliverableComponent = /** @class */ (function () {
    function DeliverableComponent(deliverableService, modalService) {
        this.deliverableService = deliverableService;
        this.modalService = modalService;
    }
    DeliverableComponent.prototype.ngOnInit = function () {
        this.getDeliverables();
        this.deliverable = this.newDeliverable();
    };
    DeliverableComponent.prototype.getDeliverables = function () {
        var _this = this;
        this.deliverableService.getDeliverables()
            .subscribe(function (deliverables) { return _this.deliverables = deliverables; });
    };
    DeliverableComponent.prototype.newDeliverable = function () {
        var deliverable = new _deliverable__WEBPACK_IMPORTED_MODULE_2__["Deliverable"]();
        deliverable.title = '';
        deliverable.description = '';
        deliverable.pipeline = '';
        deliverable.icon = '';
        deliverable.release_date = new Date();
        return deliverable;
    };
    DeliverableComponent.prototype.handleInputChange = function (e) {
        this.templates = e.target.templates;
        var template = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(template);
    };
    DeliverableComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.template = reader.result;
        console.log(this.template);
    };
    DeliverableComponent.prototype.onSubmit = function () {
        var _this = this;
        this.deliverable.template = this.template;
        this.deliverableService.addDeliverable(this.deliverable)
            .subscribe(function (deliverable) {
            if (deliverable) {
                _this.deliverables.unshift(deliverable);
                _this.deliverable = _this.newDeliverable();
            }
        });
    };
    DeliverableComponent.prototype.delete = function (deliverable) {
        this.deliverables = this.deliverables.filter(function (h) { return h !== deliverable; });
        this.deliverableService.deleteDeliverable(deliverable).subscribe();
    };
    // Modal method
    DeliverableComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // Modal method
    DeliverableComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    DeliverableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deliverable',
            template: __webpack_require__(/*! ./deliverable.component.html */ "./src/app/deliverable/deliverable.component.html"),
            styles: [__webpack_require__(/*! ./deliverable.component.css */ "./src/app/deliverable/deliverable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_deliverable_service__WEBPACK_IMPORTED_MODULE_3__["DeliverableService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], DeliverableComponent);
    return DeliverableComponent;
}());



/***/ }),

/***/ "./src/app/deliverables-team/deliverables-team.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/deliverables-team/deliverables-team.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJhYmxlcy10ZWFtL2RlbGl2ZXJhYmxlcy10ZWFtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/deliverables-team/deliverables-team.component.html":
/*!********************************************************************!*\
  !*** ./src/app/deliverables-team/deliverables-team.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf=\"auth.isLoggedIn\" style=\"margin-top:100px;\">\n  <div class=\"teamDeliverables\" >\n    <div class=\"row\">\n      <div *ngFor=\"let teamDeliverable of teamDeliverables\" class=\"col-lg-6 col-md-6 col-sm-12\">\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-warning card-header-icon\">\n              <div class=\"card-icon\">\n                  <i class=\"material-icons\">{{teamDeliverable.deliverable.icon}}</i>\n              </div>\n              <br>\n              <a [routerLink]=\"['/teamdeliverables/', teamDeliverable.id]\"><h3 class=\"card-title\">{{teamDeliverable.deliverable.title}}</h3></a>\n              <p class=\"card-category\">{{teamDeliverable.deliverable.pipeline}}</p>\n            </div>\n            <div class=\"card-footer\" style=\"border-top: 1px solid #eee;\">\n              <div class=\"stats\">\n                <h6><strong>Deadline:</strong>&nbsp;{{teamDeliverable.deadline | date: 'dd/MM/yyyy'}}</h6>\n              </div>\n              <div class=\"stats\">\n                <h6 *ngIf=\"teamDeliverable.status\"  style=\"color:#00cc99;\">Submited!</h6>\n                <h6 *ngIf=\"!teamDeliverable.status && !deliverable_color(teamDeliverable.deadline)\" style=\"color:#ff0066\">Deadline is passed!</h6>\n              </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/deliverables-team/deliverables-team.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/deliverables-team/deliverables-team.component.ts ***!
  \******************************************************************/
/*! exports provided: DeliverablesTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverablesTeamComponent", function() { return DeliverablesTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _team_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../team-member.service */ "./src/app/team-member.service.ts");
/* harmony import */ var _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../teamdeliverable.service */ "./src/app/teamdeliverable.service.ts");
/* harmony import */ var _deliverable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../deliverable.service */ "./src/app/deliverable.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");








var DeliverablesTeamComponent = /** @class */ (function () {
    function DeliverablesTeamComponent(route, teamMemberService, auth, datePipe, teamDeliverableService, deliverableService) {
        this.route = route;
        this.teamMemberService = teamMemberService;
        this.auth = auth;
        this.datePipe = datePipe;
        this.teamDeliverableService = teamDeliverableService;
        this.deliverableService = deliverableService;
        this.today = Date.now();
    }
    DeliverablesTeamComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.is_team_member = this.user.profile.is_team_member;
        if (this.user.profile.is_team_member) {
            this.getTeamMemberDetails(this.user.id);
        }
        this.date = new Date(this.today);
        this.getDeliverables();
    };
    DeliverablesTeamComponent.prototype.getTeamMemberDetails = function (userId) {
        var _this = this;
        this.teamMemberService.getTeamMember(userId)
            .subscribe(function (teamMember) {
            _this.team = teamMember.team;
            _this.getTeamDeliverables(teamMember.team.id);
        });
    };
    DeliverablesTeamComponent.prototype.deliverable_color = function (deadline) {
        if (!deadline) {
            return true;
        }
        if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.date, 'yyyy-MM-dd')) {
            return true;
        }
        else {
            return false;
        }
    };
    DeliverablesTeamComponent.prototype.getTeamDeliverables = function (teamId) {
        var _this = this;
        this.teamDeliverableService.getTeamDeliverables(teamId)
            .subscribe(function (teamDeliverables) { return _this.teamDeliverables = teamDeliverables; });
    };
    DeliverablesTeamComponent.prototype.getDeliverables = function () {
        var _this = this;
        this.deliverableService.getDeliverables()
            .subscribe(function (deliverables) { return _this.deliverables = deliverables; });
    };
    DeliverablesTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deliverables-team',
            template: __webpack_require__(/*! ./deliverables-team.component.html */ "./src/app/deliverables-team/deliverables-team.component.html"),
            styles: [__webpack_require__(/*! ./deliverables-team.component.css */ "./src/app/deliverables-team/deliverables-team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _team_member_service__WEBPACK_IMPORTED_MODULE_4__["TeamMemberService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_5__["TeamdeliverableService"],
            _deliverable_service__WEBPACK_IMPORTED_MODULE_6__["DeliverableService"]])
    ], DeliverablesTeamComponent);
    return DeliverablesTeamComponent;
}());



/***/ }),

/***/ "./src/app/file.ts":
/*!*************************!*\
  !*** ./src/app/file.ts ***!
  \*************************/
/*! exports provided: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
var File = /** @class */ (function () {
    function File() {
    }
    return File;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  min-height: 100vh;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"text\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztBQUVEOztFQUVFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmZvcm0tc2lnbmluLWhlYWRpbmcsXHJcbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <span [ngSwitch]=\"auth.isLoggedIn\">\n    <span *ngSwitchCase=\"false\">\n      <div class=\"login\">\n        <div class=\"card card-nav-tabs col-lg-4 col-md-7 col-sm-10\">\n          <div class=\"card-header card-header-rose\">\n            <strong>Virtual Accelerator</strong>\n          </div>\n          <div class=\"card-body\">\n            <form class=\"form-signin\">\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input #username\n                       type=\"text\" id=\"username\" class=\"form-control\"\n                       autofocus required/>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input #password\n                       type=\"password\" id=\"password\" class=\"form-control\"\n                       required/>\n              </div>\n              <div class=\"text-center\">\n              <h6 *ngIf=\"message\" style=\"color:#d81b60;\"><strong>{{message}}</strong></h6>\n              <button (click)=\"login(username.value, password.value)\"\n                      class=\"btn btn-outline-primary\"\n                      type=\"submit\">Sign in</button>\n              </div>\n            </form>\n        </div>\n        <div class=\"card-footer text-muted\">\n          <small>Username and password are provided by ACEin. If you forgot your username or password you have to contact us.</small>\n        </div>\n      </div>\n    </div>\n    </span>\n    <span *ngSwitchCase=\"true\">\n      <form class=\"form-signin\">\n        <button (click)=\"logout()\" type = \"button\"\n                class=\"btn btn-outline-primary btn-block\">Logout</button>\n      </form>\n    </span>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.auth.login(username, password)
            .subscribe(function (res) {
            if (res) {
                location.reload();
                _this.router.navigate(['/users', username]);
            }
            else {
                _this.message = "Wrong username or password.";
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.auth.logout();
        location.reload();
        this.router.navigate(['/login']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages.length = 0;
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7QUFDNUM7RUFDRSxXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLHFCQUFxQjtDQUN0QjtBQUVEO0VBQ0UsWUFBWTtDQUNiO0FBRUQ7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0NBQy9CO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0NBQ2Q7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFFRDtFQUNFLFlBQVk7RUFDWixvQkFBb0I7Q0FDckI7QUFHRDs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1lc3NhZ2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmgyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDJlbTtcclxufVxyXG5cclxuYm9keSwgaW5wdXRbdGV4dF0sIGJ1dHRvbiB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XHJcbn1cclxuXHJcbmJ1dHRvbi5jbGVhciB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY3Vyc29yOiBoYW5kO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogI2FhYTtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbi5jbGVhciB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuXHJcbi8qXHJcbkNvcHlyaWdodCAyMDE3LTIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/profile.ts":
/*!****************************!*\
  !*** ./src/app/profile.ts ***!
  \****************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());



/***/ }),

/***/ "./src/app/team-card/team-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/team-card/team-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team_img {\r\nborder: 1px solid #ddd;\r\nborder-radius: 4px;\r\npadding: 3px;\r\nbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);\r\ndisplay: block;\r\nmargin-left: auto;\r\nmargin-right: auto;\r\n}\r\n\r\n.del {\r\ncolor:rgb(127, 140, 141);\r\n}\r\n\r\n.del:hover {\r\n  color: #c1e2fc;\r\n}\r\n\r\n.vl {\r\nborder-left: 1px solid #dee2e6;\r\nheight: 85%;\r\nposition: absolute;\r\nleft: 33%;\r\ntop: 33px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1jYXJkL3RlYW0tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsNEVBQTRFO0FBQzVFLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsbUJBQW1CO0NBQ2xCOztBQUVEO0FBQ0EseUJBQXlCO0NBQ3hCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtBQUNBLCtCQUErQjtBQUMvQixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLFVBQVU7QUFDVixVQUFVO0NBQ1QiLCJmaWxlIjoic3JjL2FwcC90ZWFtLWNhcmQvdGVhbS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbV9pbWcge1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbnBhZGRpbmc6IDNweDtcclxuYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5kaXNwbGF5OiBibG9jaztcclxubWFyZ2luLWxlZnQ6IGF1dG87XHJcbm1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmRlbCB7XHJcbmNvbG9yOnJnYigxMjcsIDE0MCwgMTQxKTtcclxufVxyXG5cclxuLmRlbDpob3ZlciB7XHJcbiAgY29sb3I6ICNjMWUyZmM7XHJcbn1cclxuXHJcbi52bCB7XHJcbmJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcclxuaGVpZ2h0OiA4NSU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMzMlO1xyXG50b3A6IDMzcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/team-card/team-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/team-card/team-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf = \"team\">\n  <div class=\"card card-nav-tabs\">\n    <h4 class=\"card-header card-header-primary user-text click\" style=\"font-weight:500;\">\n      <b class=\"\">{{ team.name | uppercase }}</b>\n    </h4>\n    <div class=\"card-body\">\n      <!--Team Information-->\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img *ngIf=\"team.photo\" class=\"team_img\" src=\"{{team.photo}}\" alt=\"{{team.name}}\" height=\"140\" width=\"140\">\n          <img *ngIf=\"!team.photo\" class=\"team_img\" src=\"../../assets/img/default.jpg\" alt=\"{{team.name}}\" height=\"140\" width=\"140\"><br>\n          <h6 *ngIf=\"team.website\"><strong>Website:</strong> {{team.website}}</h6>\n          <h6><strong>Pipeline:</strong> {{ team.pipeline }}</h6>\n          <h6><strong>Maturity level:</strong> {{ team.maturity_level }}</h6>\n          <h6><strong>Date of entry:</strong> {{team.date_of_entry | date: 'dd/MM/yyyy'}}</h6>\n          <h6 *ngIf=\"team.research_stream\"><strong>Research stream:</strong> Yes </h6>\n          <h6 *ngIf=\"!team.research_stream\"><strong>Research stream:</strong> No </h6>\n          <h6 *ngIf=\"team.coorporate_existance\"><strong>Coorporate existance:</strong> Yes </h6>\n          <h6 *ngIf=\"!team.coorporate_existance\"><strong>Coorporate existance:</strong> No </h6>\n          <h6 *ngIf=\"team.tag_line\"><strong>Tagline:</strong> {{team.tag_line}}</h6>\n        </div>\n        <div class=\"vl\"></div><!--Vertical line-->\n\n        <div class=\"col-lg-8\" style=\"margin-top:20px;\">\n            <!--TEAM MEMBERS-->\n          <h5 class=\"text-center\"><strong>TEAM MEMBERS</strong></h5>\n          <app-team-member [team]=\"team\"></app-team-member>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/team-card/team-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/team-card/team-card.component.ts ***!
  \**************************************************/
/*! exports provided: TeamCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCardComponent", function() { return TeamCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../team */ "./src/app/team.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TeamCardComponent = /** @class */ (function () {
    function TeamCardComponent(route) {
        this.route = route;
    }
    TeamCardComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        var team = this.team;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _team__WEBPACK_IMPORTED_MODULE_2__["Team"])
    ], TeamCardComponent.prototype, "team", void 0);
    TeamCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-card',
            template: __webpack_require__(/*! ./team-card.component.html */ "./src/app/team-card/team-card.component.html"),
            styles: [__webpack_require__(/*! ./team-card.component.css */ "./src/app/team-card/team-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TeamCardComponent);
    return TeamCardComponent;
}());



/***/ }),

/***/ "./src/app/team-detail/team-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/team-detail/team-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n  margin-top: 50px;\r\n}\r\n\r\n.team_img {\r\nborder: 1px solid #ddd;\r\nborder-radius: 4px;\r\npadding: 3px;\r\nbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);\r\ndisplay: block;\r\nmargin-left: auto;\r\nmargin-right: auto;\r\n}\r\n\r\n.del {\r\ncolor:rgb(127, 140, 141);\r\n}\r\n\r\n.del:hover {\r\n  color: #c1e2fc;\r\n}\r\n\r\n.vl {\r\nborder-left: 1px solid #dee2e6;\r\nheight: 85%;\r\nposition: absolute;\r\nleft: 33%;\r\ntop: 33px;\r\n}\r\n\r\n#back{\r\n  margin-top:20px;\r\n  margin-left:20px;\r\n  padding-left:20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1kZXRhaWwvdGVhbS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtBQUNBLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLDRFQUE0RTtBQUM1RSxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLG1CQUFtQjtDQUNsQjs7QUFFRDtBQUNBLHlCQUF5QjtDQUN4Qjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7QUFDQSwrQkFBK0I7QUFDL0IsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1YsVUFBVTtDQUNUOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC90ZWFtLWRldGFpbC90ZWFtLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi50ZWFtX2ltZyB7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbmJvcmRlci1yYWRpdXM6IDRweDtcclxucGFkZGluZzogM3B4O1xyXG5ib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5tYXJnaW4tbGVmdDogYXV0bztcclxubWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZGVsIHtcclxuY29sb3I6cmdiKDEyNywgMTQwLCAxNDEpO1xyXG59XHJcblxyXG4uZGVsOmhvdmVyIHtcclxuICBjb2xvcjogI2MxZTJmYztcclxufVxyXG5cclxuLnZsIHtcclxuYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG5oZWlnaHQ6IDg1JTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiAzMyU7XHJcbnRvcDogMzNweDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/team-detail/team-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/team-detail/team-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"goBack()\" type=\"button\" class=\"btn btn-outline-primary\" id=\"back\"><i class=\"material-icons\">keyboard_arrow_left</i> Back </button>\n<div *ngIf=\"team\" class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <app-team-card [team]=\"team\"></app-team-card>\n      </div>\n      <div class=\"col-lg-4\">\n        <app-teamdeliverable></app-teamdeliverable>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/team-detail/team-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/team-detail/team-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TeamDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailComponent", function() { return TeamDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../team.service */ "./src/app/team.service.ts");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team */ "./src/app/team.ts");






var TeamDetailComponent = /** @class */ (function () {
    function TeamDetailComponent(route, teamService, location) {
        this.route = route;
        this.teamService = teamService;
        this.location = location;
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        this.getTeam();
        this.team = this.updateTeam();
    };
    TeamDetailComponent.prototype.updateTeam = function () {
        var team = new _team__WEBPACK_IMPORTED_MODULE_5__["Team"]();
        team.name = '';
        team.website = '';
        team.pipeline = '';
        team.maturity_level = null;
        team.tag_line = '';
        team.research_stream = false;
        team.coorporate_existance = false;
        team.date_of_entry = new Date();
        return team;
    };
    TeamDetailComponent.prototype.getTeam = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.teamService.getTeam(id)
            .subscribe(function (team) { return _this.team = team; });
    };
    TeamDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.team);
        this.teamService.updateTeam(this.team)
            .subscribe(function (team) {
            if (team) {
                _this.team = _this.updateTeam();
            }
        });
    };
    TeamDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TeamDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-detail',
            template: __webpack_require__(/*! ./team-detail.component.html */ "./src/app/team-detail/team-detail.component.html"),
            styles: [__webpack_require__(/*! ./team-detail.component.css */ "./src/app/team-detail/team-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());



/***/ }),

/***/ "./src/app/team-member.service.ts":
/*!****************************************!*\
  !*** ./src/app/team-member.service.ts ***!
  \****************************************/
/*! exports provided: TeamMemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberService", function() { return TeamMemberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var TeamMemberService = /** @class */ (function () {
    function TeamMemberService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    /** GET teammember by id. Will 404 if id not found */
    TeamMemberService.prototype.getTeamMember = function (id) {
        var _this = this;
        var url = "api/teammembers/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched teammember id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getTeamMember id=" + id)));
    };
    /** GET teamMembers from the server */
    TeamMemberService.prototype.getTeamMembers = function (teamId) {
        var _this = this;
        var url = "api/teams/" + teamId + "/teammembers";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (teammembers) { return _this.log("fetched teammembers"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTeamMembers', [])));
    };
    /** POST: add a new teamMember to the server */
    TeamMemberService.prototype.addTeamMember = function (teamMember) {
        var _this = this;
        var url = "api/teams/" + teamMember.team + "/teammembers";
        return this.http.post(url, teamMember, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (teamMember) { return _this.log("added teamMember w/ id=" + teamMember.user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addTeamMember')));
    };
    /** PUT: update the team member on the server */
    TeamMemberService.prototype.updateTeamMember = function (teamMember) {
        var url = "api/teams/" + teamMember.team + "/teammembers/" + teamMember.user;
        return this.http.put(url, teamMember, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateTeamMember', teamMember)));
    };
    /** DELETE: delete the team from the server */
    TeamMemberService.prototype.deleteTeamMember = function (teamMember) {
        var _this = this;
        var url = "api/teams/" + teamMember.team + "/teammembers/" + teamMember.user;
        ;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted teamMember id=" + teamMember.user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteTeamMember')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TeamMemberService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    TeamMemberService.prototype.log = function (message) {
        this.messageService.add('TeamMemberService: ' + message);
    };
    TeamMemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], TeamMemberService);
    return TeamMemberService;
}());



/***/ }),

/***/ "./src/app/team-member/team-member.component.css":
/*!*******************************************************!*\
  !*** ./src/app/team-member/team-member.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0tbWVtYmVyL3RlYW0tbWVtYmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/team-member/team-member.component.html":
/*!********************************************************!*\
  !*** ./src/app/team-member/team-member.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team_members\">\n  <div *ngFor=\"let teamMember of teamMembers\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 avatar_position\">\n        <img *ngIf=\"teamMember?.photo\" src=\"{{teamMember.photo}}\" class=\"avatar\">\n        <img *ngIf=\"!teamMember?.photo\" src=\"../../assets/img/faces/{{teamMember.user}}.png\" class=\"avatar\">\n      </div>\n      <div class=\"col-lg-9 row\">\n        <div class =\"col-lg-9\">\n          <h6>\n            <strong>Name:</strong>\n            <span *ngIf=\"teamMember!==editTeamMember\">{{teamMember.name}}</span>\n            <input *ngIf=\"teamMember===editTeamMember\" [(ngModel)]=\"teamMember.name\" class=\"form-control\">\n          </h6>\n          <h6>\n              <strong>Email:</strong>\n              <span *ngIf=\"teamMember!==editTeamMember\">{{teamMember.email}}</span>\n              <input *ngIf=\"teamMember===editTeamMember\" [(ngModel)]=\"teamMember.email\" class=\"form-control\">\n          </h6>\n          <h6>\n            <strong>Phone:</strong>\n            <span *ngIf=\"teamMember!==editTeamMember\">{{teamMember.phone}}</span>\n            <input *ngIf=\"teamMember===editTeamMember\" [(ngModel)]=\"teamMember.phone\" class=\"form-control\">\n          </h6>\n        </div>\n        <div class=\"col-lg-3 row\" *ngIf=\"!user.profile.is_team_member\">\n          <button *ngIf=\"teamMember===editTeamMember\" title=\"Save team member\"(click)=\"update()\" class=\"btn btn-circle\" style=\"background-color:#00cc99;\"><i class=\"material-icons circle-icon\">done</i></button>\n          <button *ngIf=\"teamMember!==editTeamMember\" title=\"Edit team member\" (click)=\"edit(teamMember)\" class=\"btn btn-link\"><i class=\"material-icons circle-icon\">edit</i></button>\n        </div>\n      </div>\n    </div>\n    <hr>\n  </div>\n  <div *ngIf=\"!teamMembers?.length\" class=\"text-center\">\n    <h6>This team hasn't got any member yet. Team members are added only by the administrator of the system.</h6>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/team-member/team-member.component.ts":
/*!******************************************************!*\
  !*** ./src/app/team-member/team-member.component.ts ***!
  \******************************************************/
/*! exports provided: TeamMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberComponent", function() { return TeamMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teamMember__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teamMember */ "./src/app/teamMember.ts");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../team */ "./src/app/team.ts");
/* harmony import */ var _team_member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team-member.service */ "./src/app/team-member.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var TeamMemberComponent = /** @class */ (function () {
    function TeamMemberComponent(route, teamMemberService, modalService) {
        this.route = route;
        this.teamMemberService = teamMemberService;
        this.modalService = modalService;
    }
    TeamMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        var teamIdUrl = +this.route.snapshot.paramMap.get('id');
        var team = this.team;
        this.teamId = team.id;
        this.teamMember = this.newTeamMember(team.id);
        if (teamIdUrl) {
            return this.teamMemberService.getTeamMembers(teamIdUrl)
                .subscribe(function (teamMembers) { return _this.teamMembers = teamMembers; });
        }
        else {
            return this.teamMemberService.getTeamMembers(team.id)
                .subscribe(function (teamMembers) { return _this.teamMembers = teamMembers; });
        }
    };
    TeamMemberComponent.prototype.newTeamMember = function (teamId) {
        var teamMember = new _teamMember__WEBPACK_IMPORTED_MODULE_3__["TeamMember"]();
        teamMember.name = '';
        teamMember.team = teamId;
        teamMember.email = '';
        teamMember.phone = '';
        teamMember.role = '';
        teamMember.field = '';
        return teamMember;
    };
    TeamMemberComponent.prototype.edit = function (teamMember) {
        teamMember.team = this.team;
        this.editTeamMember = teamMember;
    };
    TeamMemberComponent.prototype.update = function () {
        var _this = this;
        if (this.editTeamMember) {
            this.editTeamMember.team = this.editTeamMember.team.id;
            this.teamMemberService.updateTeamMember(this.editTeamMember)
                .subscribe(function (teamMember) {
                var ix = teamMember ? _this.teamMembers.findIndex(function (tm) { return tm.user === teamMember.user; }) : -1;
                if (ix > -1) {
                    _this.teamMembers[ix] = teamMember;
                }
            });
            this.editTeamMember = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _team__WEBPACK_IMPORTED_MODULE_4__["Team"])
    ], TeamMemberComponent.prototype, "team", void 0);
    TeamMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-member',
            template: __webpack_require__(/*! ./team-member.component.html */ "./src/app/team-member/team-member.component.html"),
            styles: [__webpack_require__(/*! ./team-member.component.css */ "./src/app/team-member/team-member.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _team_member_service__WEBPACK_IMPORTED_MODULE_5__["TeamMemberService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], TeamMemberComponent);
    return TeamMemberComponent;
}());



/***/ }),

/***/ "./src/app/team-search/team-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/team-search/team-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BookSearch private styles */\r\n\r\n#search-box {\r\n  width: 200px;\r\n  height: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1zZWFyY2gvdGVhbS1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0I7O0FBRS9CO0VBQ0UsYUFBYTtFQUNiLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3RlYW0tc2VhcmNoL3RlYW0tc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCb29rU2VhcmNoIHByaXZhdGUgc3R5bGVzICovXHJcblxyXG4jc2VhcmNoLWJveCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/team-search/team-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/team-search/team-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"r.name\" [term]=\"t\"></ngb-highlight>\n  </ng-template>\n\n\n  <input id=\"search-box\"\n         type=\"text\"\n         class=\"form-control\"\n         [class.alert-warning]=\"searchFailed\"\n         (selectItem)=\"selectedItem($event)\"\n         [(ngModel)]=\"model\"\n         [ngbTypeahead]=\"search\"\n         [resultTemplate]=\"rt\"\n         [inputFormatter]=\"formatter\"\n         placeholder=\"Search..\"/>\n\n  <span *ngIf=\"searching\">searching...</span>\n  <div class=\"alert alert-warning\" *ngIf=\"searchFailed\">\n    Sorry, suggestions could not be loaded.\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/team-search/team-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/team-search/team-search.component.ts ***!
  \******************************************************/
/*! exports provided: TeamSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSearchComponent", function() { return TeamSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team.service */ "./src/app/team.service.ts");






var TeamSearchComponent = /** @class */ (function () {
    function TeamSearchComponent(router, teamService) {
        var _this = this;
        this.router = router;
        this.teamService = teamService;
        this.searching = false;
        this.searchFailed = false;
        // Push a search term into the observable stream.
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
                return _this.teamService.searchTeams(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searchFailed = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
                    console.log('Failed!');
                    _this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { _this.searching = false; }));
        };
    }
    TeamSearchComponent.prototype.formatter = function (b) {
        return b.name;
    };
    TeamSearchComponent.prototype.selectedItem = function (event) {
        var team = event.item;
        this.router.navigate(["/teams/" + team.id]);
    };
    TeamSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-search',
            template: __webpack_require__(/*! ./team-search.component.html */ "./src/app/team-search/team-search.component.html"),
            styles: [__webpack_require__(/*! ./team-search.component.css */ "./src/app/team-search/team-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"]])
    ], TeamSearchComponent);
    return TeamSearchComponent;
}());



/***/ }),

/***/ "./src/app/team.service.ts":
/*!*********************************!*\
  !*** ./src/app/team.service.ts ***!
  \*********************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TeamService = /** @class */ (function () {
    function TeamService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.teamsUrl = 'api/teams';
    }
    TeamService.prototype.log = function (message) {
        this.messageService.add('TeamService: ' + message);
    };
    TeamService.prototype.getTeams = function () {
        var _this = this;
        return this.http.get(this.teamsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log('fetched teams'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTeams', [])));
    };
    /** GET team by id. Will 404 if id not found */
    TeamService.prototype.getTeam = function (id) {
        var _this = this;
        var url = this.teamsUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched team id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTeam id=" + id)));
    };
    /** PUT: update the team on the server */
    TeamService.prototype.updateTeam = function (team) {
        var _this = this;
        var url = this.teamsUrl + "/" + team.id;
        return this.http.put(url, team, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated team id=" + team.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateTeam')));
    };
    /** POST: add a new team to the server */
    TeamService.prototype.addTeam = function (team) {
        var _this = this;
        var url = "api/teams";
        return this.http.post(url, team, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (team) { return _this.log("added team w/ id=" + team.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addTeam')));
    };
    /** DELETE: delete the team from the server */
    TeamService.prototype.deleteTeam = function (team) {
        var _this = this;
        var id = typeof team === 'number' ? team : team.id;
        var url = this.teamsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted team id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteTeam')));
    };
    /* GET teams whose title contains search term */
    TeamService.prototype.searchTeams = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty team array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get("api/teams/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("found teams matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchTeams', [])));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    TeamService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/team.ts":
/*!*************************!*\
  !*** ./src/app/team.ts ***!
  \*************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team() {
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/teamMember.ts":
/*!*******************************!*\
  !*** ./src/app/teamMember.ts ***!
  \*******************************/
/*! exports provided: TeamMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMember", function() { return TeamMember; });
var TeamMember = /** @class */ (function () {
    function TeamMember() {
    }
    return TeamMember;
}());



/***/ }),

/***/ "./src/app/teamdel/teamdel.component.css":
/*!***********************************************!*\
  !*** ./src/app/teamdel/teamdel.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\ncolor:rgb(127, 140, 141);\r\n}\r\n\r\na:hover {\r\ncolor: #c1e2fc;\r\n}\r\n\r\n.circle-icon {\r\nbackground: grey;\r\ncolor:white;\r\nborder-radius: 50%;\r\ntext-align: center;\r\nvertical-align: middle;\r\npadding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbWRlbC90ZWFtZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSx5QkFBeUI7Q0FDeEI7O0FBRUQ7QUFDQSxlQUFlO0NBQ2Q7O0FBRUQ7QUFDQSxpQkFBaUI7QUFDakIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLGNBQWM7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3RlYW1kZWwvdGVhbWRlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbmNvbG9yOnJnYigxMjcsIDE0MCwgMTQxKTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbmNvbG9yOiAjYzFlMmZjO1xyXG59XHJcblxyXG4uY2lyY2xlLWljb24ge1xyXG5iYWNrZ3JvdW5kOiBncmV5O1xyXG5jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbnBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/teamdel/teamdel.component.html":
/*!************************************************!*\
  !*** ./src/app/teamdel/teamdel.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\" row justify-content-center\" style=\"margin-top:15px; margin-bottom:15px;\">\n  <div *ngFor=\"let teamDeliverable of teamDeliverables\">\n    <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n      <a  [routerLink]=\"['team/teamdeliverables/', teamDeliverable.id]\">\n        <i *ngIf=\"teamDeliverable.status\" class=\"material-icons circle-icon del_success\" >{{teamDeliverable.deliverable.icon}}</i>\n        <i *ngIf=\"!teamDeliverable.status && !deliverable_color(teamDeliverable.deadline)\" class=\"material-icons circle-icon del_danger\" >{{teamDeliverable.deliverable.icon}}</i>\n        <i *ngIf=\"!teamDeliverable.status && deliverable_color(teamDeliverable.deadline)\" class=\"material-icons circle-icon\" >{{teamDeliverable.deliverable.icon}}</i>\n      </a>\n    </div>\n  </div>\n  <div *ngIf=\"!teamDeliverables?.length\" style=\"padding-top: 5px; padding-bottom:9px;\">\n    <h6>No dealiverables!</h6>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/teamdel/teamdel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/teamdel/teamdel.component.ts ***!
  \**********************************************/
/*! exports provided: TeamdelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamdelComponent", function() { return TeamdelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _deliverable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../deliverable.service */ "./src/app/deliverable.service.ts");
/* harmony import */ var _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../teamdeliverable.service */ "./src/app/teamdeliverable.service.ts");






var TeamdelComponent = /** @class */ (function () {
    function TeamdelComponent(route, datePipe, teamDeliverableService, deliverableService) {
        this.route = route;
        this.datePipe = datePipe;
        this.teamDeliverableService = teamDeliverableService;
        this.deliverableService = deliverableService;
        this.today = Date.now();
    }
    TeamdelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var teamId = this.team;
        this.teamDeliverableService.getTeamDeliverables(teamId)
            .subscribe(function (teamDeliverables) { return _this.teamDeliverables = teamDeliverables; });
    };
    TeamdelComponent.prototype.deliverable_color = function (deadline) {
        if (!deadline) {
            return true;
        }
        if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.today, 'yyyy-MM-dd')) {
            return true;
        }
        else {
            return false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TeamdelComponent.prototype, "team", void 0);
    TeamdelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teamdel',
            template: __webpack_require__(/*! ./teamdel.component.html */ "./src/app/teamdel/teamdel.component.html"),
            styles: [__webpack_require__(/*! ./teamdel.component.css */ "./src/app/teamdel/teamdel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_5__["TeamdeliverableService"],
            _deliverable_service__WEBPACK_IMPORTED_MODULE_4__["DeliverableService"]])
    ], TeamdelComponent);
    return TeamdelComponent;
}());



/***/ }),

/***/ "./src/app/teamdeliverable-detail/teamdeliverable-detail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/teamdeliverable-detail/teamdeliverable-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#back{\r\n  margin-top:20px;\r\n  margin-left:20px;\r\n  padding-left:20px;\r\n}\r\n\r\n#teamdeliverable{\r\n  margin-top:50px;\r\n}\r\n\r\n#del_card {\r\n  margin-left:50px;\r\n  margin-right:50px;\r\n}\r\n\r\n.vl {\r\nborder-left: 1px solid #dee2e6;\r\nheight: 85%;\r\nposition: absolute;\r\nleft: 50%;\r\ntop: 33px;\r\n}\r\n\r\n.avatar_position{\r\n  text-align: right;\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  margin-top:10px;\r\n}\r\n\r\n.avatar{\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  height:80px;\r\n  width:80px;\r\n  border: 1px solid #dee2e6;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.btn-file {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.btn-file input[type=file] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    font-size: 100px;\r\n    text-align: right;\r\n    opacity: 0;\r\n    outline: none;\r\n    cursor: inherit;\r\n    display: block;\r\n}\r\n\r\n.btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.428571429;\r\n  border-radius: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbWRlbGl2ZXJhYmxlLWRldGFpbC90ZWFtZGVsaXZlcmFibGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7O0FBRUQ7QUFDQSwrQkFBK0I7QUFDL0IsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1YsVUFBVTtDQUNUOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtFQUMxQiw0RUFBNEU7Q0FDN0U7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC90ZWFtZGVsaXZlcmFibGUtZGV0YWlsL3RlYW1kZWxpdmVyYWJsZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNre1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDoyMHB4O1xyXG59XHJcblxyXG4jdGVhbWRlbGl2ZXJhYmxle1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxufVxyXG5cclxuI2RlbF9jYXJkIHtcclxuICBtYXJnaW4tbGVmdDo1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDo1MHB4O1xyXG59XHJcblxyXG4udmwge1xyXG5ib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbmhlaWdodDogODUlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDUwJTtcclxudG9wOiAzM3B4O1xyXG59XHJcblxyXG4uYXZhdGFyX3Bvc2l0aW9ue1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OjgwcHg7XHJcbiAgd2lkdGg6ODBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmJ0bi1maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJ0bi1maWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/teamdeliverable-detail/teamdeliverable-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/teamdeliverable-detail/teamdeliverable-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"goBack()\" type=\"button\" class=\"btn btn-outline-primary\" id=\"back\"><i class=\"material-icons\">keyboard_arrow_left</i>Back </button>\n<div *ngIf=\"teamdeliverable\" class=\"content\" id=\"teamdeliverable\">\n  <div class=\"container-fluid\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"card card-nav-tabs\" id=\"del_card\">\n        <h4 class=\"card-header card-header-warning user-text click\" style=\"font-weight:500;\">\n          <b class=\"\">{{ teamdeliverable.deliverable.title | uppercase}}</b>\n        </h4>\n        <div class=\"card-body row\">\n          <div class=\"col-6\">\n          <br>\n          <h6> \"{{teamdeliverable.deliverable.description}}\"</h6>\n          <div class=\"text-center\" *ngIf=\"!is_coach\">\n                <h6 *ngIf=\"message\"><b class=\"bold\">{{message}}</b></h6>\n                <h6><b class=\"bold\">Upload a PDF file:</b></h6>\n                <div>\n                  <span class=\"btn btn-outline-primary btn-file\">\n                    Upload <input name=\"imageUrl\" type=\"file\" accept=\"application/pdf\" (change)=\"handleInputChange($event)\">\n                  </span>\n                </div>\n                <div *ngFor=\"let file of files\">\n                  <h6>{{file.name}}</h6>\n                  <div class=\"row justify-content-center\">\n                    <button class=\"clear\" (click)=\"clear()\" class=\"btn btn-circle\" style=\"background-color:#ff0066;\"><i class=\"material-icons circle-icon\">clear</i></button>\n                    <button (click)=\"save()\" class=\"btn btn-circle\" style=\"background-color:#00cc99;\"><i class=\"material-icons circle-icon\">done</i></button>\n                  </div>\n                </div>\n\n          </div>\n          <br>\n          <table class=\"table col-10\">\n              <tbody>\n                  <tr>\n                      <td><h6><b class=\"bold\">Template: </b></h6> </td>\n                      <td><a href=\"{{teamdeliverable.deliverable.template}}\"><i class=\"material-icons circle-icon\">arrow_downward</i>{{teamdeliverable.deliverable.title}} Template</a></td>\n                  </tr>\n                  <tr>\n                      <td><h6><b class=\"bold\">Deadline: </b></h6> </td>\n                      <td *ngIf=\"!isEmptyObject(teamdeliverable.deadline)\"><h6>{{teamdeliverable.deadline | date: 'dd/MM/yyyy'}}</h6></td>\n                      <td *ngIf=\"isEmptyObject(teamdeliverable.deadline)\"><h6>Aknown</h6></td>\n                  </tr>\n                  <tr>\n                      <td><h6><b class=\"bold\">Status: </b></h6> </td>\n                      <td *ngIf=\"teamdeliverable.status\"><h6>Submited!</h6></td>\n                      <td *ngIf=\"!deadline_status(teamdeliverable.deadline) && !teamdeliverable.status\"><h6 style=\"color:#ff0066\">Deadline is passed!</h6></td>\n                      <td *ngIf=\"!teamdeliverable.status && deadline_status(teamdeliverable.deadline)\"><h6>Nothing has been submited yet</h6></td>\n                  </tr>\n                  <tr>\n                      <td><h6><b class=\"bold\">File: </b></h6> </td>\n                      <td *ngIf=\"teamdeliverable.status\"><a href=\"{{teamdeliverable.file}}\"><i class=\"material-icons circle-icon\">arrow_downward</i>{{teamdeliverable.deliverable.title}} Deliverable</a></td>\n                      <td *ngIf=\"!teamdeliverable.status\"><h6>Nothing has been submited yet</h6></td>\n                  </tr>\n              </tbody>\n          </table>\n\n        </div>\n        <div class=\"vl\"></div>\n        <div class=\"col-6\">\n        <!-- Comments -->\n        <app-comments [teamId]=\"teamdeliverable.team\"></app-comments>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/teamdeliverable-detail/teamdeliverable-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/teamdeliverable-detail/teamdeliverable-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: TeamdeliverableDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamdeliverableDetailComponent", function() { return TeamdeliverableDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teamdeliverable.service */ "./src/app/teamdeliverable.service.ts");






var TeamdeliverableDetailComponent = /** @class */ (function () {
    function TeamdeliverableDetailComponent(route, teamdeliverableService, location, datePipe) {
        this.route = route;
        this.teamdeliverableService = teamdeliverableService;
        this.location = location;
        this.datePipe = datePipe;
        this.today = Date.now();
        this.user = JSON.parse(localStorage.getItem('user'));
        this.profile = this.user.profile;
    }
    TeamdeliverableDetailComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.profile = this.user.profile;
        this.is_team_member = this.user.profile.is_team_member;
        this.is_coach = this.user.profile.is_coach;
        this.date = new Date(this.today);
        this.getTeamdeliverable();
    };
    TeamdeliverableDetailComponent.prototype.getTeamdeliverable = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        var team_id = +this.route.parent.snapshot.paramMap.get('id');
        this.teamdeliverableService.getTeamdeliverable(id, team_id)
            .subscribe(function (teamdeliverable) { return _this.teamdeliverable = teamdeliverable; });
    };
    TeamdeliverableDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TeamdeliverableDetailComponent.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    TeamdeliverableDetailComponent.prototype.deadline_status = function (deadline) {
        if (!deadline) {
            return true;
        }
        if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.date, 'yyyy-MM-dd')) {
            return true;
        }
        else {
            return false;
        }
    };
    TeamdeliverableDetailComponent.prototype.handleInputChange = function (e) {
        this.files = e.target.files;
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    TeamdeliverableDetailComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.file = reader.result;
        console.log(this.file);
    };
    TeamdeliverableDetailComponent.prototype.save = function () {
        var _this = this;
        var validFile = true;
        var delivId = this.teamdeliverable.deliverable.id;
        this.teamdeliverable.deliverable = delivId;
        this.teamdeliverable.file = this.file;
        this.teamdeliverable.status = true;
        this.teamdeliverableService.updateTeamDeliverable(this.teamdeliverable)
            .subscribe(function (teamdel) {
            if (teamdel) {
                _this.teamdeliverable = teamdel;
                _this.message = "Submited!";
            }
            else {
                validFile = false;
                _this.message = "You have to submit a PDF file.";
            }
        });
        if (!validFile) {
            this.teamdeliverable.file = null;
            this.teamdeliverable.status = false;
        }
        this.clear();
    };
    TeamdeliverableDetailComponent.prototype.clear = function () {
        this.files = [];
        this.ngOnInit();
    };
    TeamdeliverableDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teamdeliverable-detail',
            template: __webpack_require__(/*! ./teamdeliverable-detail.component.html */ "./src/app/teamdeliverable-detail/teamdeliverable-detail.component.html"),
            styles: [__webpack_require__(/*! ./teamdeliverable-detail.component.css */ "./src/app/teamdeliverable-detail/teamdeliverable-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_4__["TeamdeliverableService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], TeamdeliverableDetailComponent);
    return TeamdeliverableDetailComponent;
}());



/***/ }),

/***/ "./src/app/teamdeliverable.service.ts":
/*!********************************************!*\
  !*** ./src/app/teamdeliverable.service.ts ***!
  \********************************************/
/*! exports provided: TeamdeliverableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamdeliverableService", function() { return TeamdeliverableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TeamdeliverableService = /** @class */ (function () {
    function TeamdeliverableService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    /** GET teamdeliverables from the server */
    TeamdeliverableService.prototype.getTeamDeliverables = function (teamId) {
        var _this = this;
        var url = "api/teams/" + teamId + "/teamdeliverables";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (teamdeliverables) { return _this.log("fetched teamdeliverables"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTeamDeliverables', [])));
    };
    /** GET teamdeliverables from the server */
    TeamdeliverableService.prototype.getAllTeamDeliverables = function () {
        var _this = this;
        var url = "api/teamdeliverables";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (teamdeliverables) { return _this.log("fetched teamdeliverables"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllTeamDeliverables', [])));
    };
    /** GET teamdeliverable by id. Will 404 if id not found */
    TeamdeliverableService.prototype.getTeamdeliverable = function (id, team) {
        var _this = this;
        var url = "api/teams/" + team + "/teamdeliverables/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched teamdeliverable id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getTeamdeliverable id=" + id)));
    };
    /** POST: add a new teamdeliverable to the server */
    TeamdeliverableService.prototype.addTeamDeliverable = function (teamdeliverable) {
        var _this = this;
        var url = "api/teams/" + teamdeliverable.team + "/teamdeliverables";
        return this.http.post(url, teamdeliverable, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (teamdeliverable) { return _this.log("added teamdeliverable w/ id=" + teamdeliverable.id); }), 
        // catchError(error => {
        //   console.log("Return false catchError");
        //   console.log(`Login service: ${error}`);
        //   return of(false);
        // })
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("addTeamdeliverable")));
    };
    /** PUT: update the team on the server */
    TeamdeliverableService.prototype.updateTeamDeliverable = function (teamdeliverable) {
        var _this = this;
        var url = "api/uploadteamdeliverables/" + teamdeliverable.id;
        return this.http.put(url, teamdeliverable, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated teamdeliverable id=" + teamdeliverable.id); }), 
        // catchError(error => {
        //   console.log("Return false catchError");
        //   console.log(`Login service: ${error}`);
        //   return of(false);
        // })
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("addTeamdeliverable")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TeamdeliverableService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    TeamdeliverableService.prototype.log = function (message) {
        this.messageService.add('TeamDeliverableService: ' + message);
    };
    TeamdeliverableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], TeamdeliverableService);
    return TeamdeliverableService;
}());



/***/ }),

/***/ "./src/app/teamdeliverable.ts":
/*!************************************!*\
  !*** ./src/app/teamdeliverable.ts ***!
  \************************************/
/*! exports provided: TeamDeliverable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDeliverable", function() { return TeamDeliverable; });
var TeamDeliverable = /** @class */ (function () {
    function TeamDeliverable() {
    }
    return TeamDeliverable;
}());



/***/ }),

/***/ "./src/app/teamdeliverable/teamdeliverable.component.css":
/*!***************************************************************!*\
  !*** ./src/app/teamdeliverable/teamdeliverable.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\ncolor:rgb(127, 140, 141);\r\n}\r\n\r\na:hover {\r\ncolor: #c1e2fc;\r\n}\r\n\r\n.circle-icon {\r\nbackground: grey;\r\ncolor:white;\r\nborder-radius: 50%;\r\ntext-align: center;\r\nvertical-align: middle;\r\npadding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbWRlbGl2ZXJhYmxlL3RlYW1kZWxpdmVyYWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EseUJBQXlCO0NBQ3hCOztBQUVEO0FBQ0EsZUFBZTtDQUNkOztBQUVEO0FBQ0EsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2QixjQUFjO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC90ZWFtZGVsaXZlcmFibGUvdGVhbWRlbGl2ZXJhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuY29sb3I6cmdiKDEyNywgMTQwLCAxNDEpO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuY29sb3I6ICNjMWUyZmM7XHJcbn1cclxuXHJcbi5jaXJjbGUtaWNvbiB7XHJcbmJhY2tncm91bmQ6IGdyZXk7XHJcbmNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxucGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/teamdeliverable/teamdeliverable.component.html":
/*!****************************************************************!*\
  !*** ./src/app/teamdeliverable/teamdeliverable.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teamdeliverables\">\n      <div class=\"card card-nav-tabs\">\n        <h4 class=\"card-header card-header-warning user-text\"><b>Deliverables</b></h4>\n        <div class=\"card-body\">\n            <div *ngFor=\"let teamDeliverable of teamDeliverables\">\n              <div class=\"container\">\n              <div>\n                <h6><a [routerLink]=\"['teamdeliverables/', teamDeliverable.id]\" class=\"bold\">\n                  <i *ngIf=\"teamDeliverable.status\" class=\"material-icons circle-icon del_success\" >{{teamDeliverable.deliverable.icon}}</i>\n                  <i *ngIf=\"!teamDeliverable.status && !deliverable_color(teamDeliverable.deadline)\" class=\"material-icons circle-icon del_danger\" >{{teamDeliverable.deliverable.icon}}</i>\n                  <i *ngIf=\"!teamDeliverable.status && deliverable_color(teamDeliverable.deadline)\" class=\"material-icons circle-icon\" >{{teamDeliverable.deliverable.icon}}</i>\n                  &nbsp;&nbsp;{{teamDeliverable.deliverable.title}}</a></h6>\n                  <h6 *ngIf=\"teamDeliverable.status\">Submited!</h6>\n                  <h6 *ngIf=\"!teamDeliverable.status && !deliverable_color(teamDeliverable.deadline)\">Deadline is passed!</h6>\n                  <h6 *ngIf=\"!teamDeliverable.status && deliverable_color(teamDeliverable.deadline)\">Deadline: {{teamDeliverable.deadline | date: 'dd/MM/yyyy'}}</h6>\n              </div>\n\n              <hr>\n            </div>\n            </div>\n            <div *ngIf=\"!teamDeliverables?.length\"  class=\"text-center\">\n              <h6>This team hasn't got any deliverable yet.</h6>\n            </div>\n            <div class=\"text-center\" *ngIf=\"teamDeliverables?.length < deliverables?.length\">\n              <button  type=\"button\" class=\"btn btn-outline-primary\" (click)=\"open(content)\"> Add new Deliverable </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add new deliverable</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10\">\n        <form (ngSubmit)=\"onSubmit()\" #teamDeliverableForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"deliverable\">Select deliverable</label>\n            <select class=\"form-control\" type=\"number\" [(ngModel)]=\"teamDeliverable.deliverable\" name=\"deliverable\" id=\"deliverable\">\n              <option *ngFor=\"let deliverable of deliverables\" [ngValue]=\"deliverable.id\"  selected>{{deliverable.title}}</option>\n            </select>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"deadline\">Deadline:</label>&nbsp;&nbsp;\n            <input id=\"deadline\"\n                    type=\"date\"\n                    [(ngModel)]=\"teamDeliverable.deadline\"\n                    name=\"deadline\">\n          </div>\n          <br>\n          <div class=\"text-center\">\n            <h6 *ngIf=\"message\" style=\"color:#d81b60;\"><strong>{{message}}</strong></h6>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/teamdeliverable/teamdeliverable.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/teamdeliverable/teamdeliverable.component.ts ***!
  \**************************************************************/
/*! exports provided: TeamdeliverableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamdeliverableComponent", function() { return TeamdeliverableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _teamdeliverable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../teamdeliverable */ "./src/app/teamdeliverable.ts");
/* harmony import */ var _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../teamdeliverable.service */ "./src/app/teamdeliverable.service.ts");
/* harmony import */ var _deliverable_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../deliverable.service */ "./src/app/deliverable.service.ts");








var TeamdeliverableComponent = /** @class */ (function () {
    function TeamdeliverableComponent(route, datePipe, teamDeliverableService, deliverableService, modalService) {
        this.route = route;
        this.datePipe = datePipe;
        this.teamDeliverableService = teamDeliverableService;
        this.deliverableService = deliverableService;
        this.modalService = modalService;
        this.today = Date.now();
    }
    TeamdeliverableComponent.prototype.ngOnInit = function () {
        this.date = new Date(this.today);
        var teamId = +this.route.snapshot.paramMap.get('id');
        this.getDeliverables();
        this.teamDeliverable = this.newTeamDeliverable(teamId);
        this.getTeamDeliverables(teamId);
    };
    TeamdeliverableComponent.prototype.deliverable_color = function (deadline) {
        if (!deadline) {
            return true;
        }
        if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.date, 'yyyy-MM-dd')) {
            return true;
        }
        else {
            return false;
        }
    };
    TeamdeliverableComponent.prototype.getTeamDeliverables = function (teamId) {
        var _this = this;
        this.teamDeliverableService.getTeamDeliverables(teamId)
            .subscribe(function (teamDeliverables) { return _this.teamDeliverables = teamDeliverables; });
    };
    TeamdeliverableComponent.prototype.getDeliverables = function () {
        var _this = this;
        this.deliverableService.getDeliverables()
            .subscribe(function (deliverables) { return _this.deliverables = deliverables; });
    };
    TeamdeliverableComponent.prototype.newTeamDeliverable = function (teamId) {
        var teamDeliverable = new _teamdeliverable__WEBPACK_IMPORTED_MODULE_5__["TeamDeliverable"]();
        teamDeliverable.deliverable = null;
        teamDeliverable.team = teamId;
        teamDeliverable.deadline = null;
        return teamDeliverable;
    };
    TeamdeliverableComponent.prototype.onSubmit = function () {
        var _this = this;
        this.teamDeliverableService.addTeamDeliverable(this.teamDeliverable)
            .subscribe(function (teamDeliverable) {
            if (teamDeliverable) {
                _this.teamDeliverables.unshift(teamDeliverable);
                _this.teamDeliverable = _this.newTeamDeliverable(teamDeliverable.team);
                _this.message = "";
            }
            else {
                _this.message = "This deliverable has been already added.";
            }
        });
    };
    // Modal method
    TeamdeliverableComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // Modal method
    TeamdeliverableComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    TeamdeliverableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teamdeliverable',
            template: __webpack_require__(/*! ./teamdeliverable.component.html */ "./src/app/teamdeliverable/teamdeliverable.component.html"),
            styles: [__webpack_require__(/*! ./teamdeliverable.component.css */ "./src/app/teamdeliverable/teamdeliverable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _teamdeliverable_service__WEBPACK_IMPORTED_MODULE_6__["TeamdeliverableService"],
            _deliverable_service__WEBPACK_IMPORTED_MODULE_7__["DeliverableService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], TeamdeliverableComponent);
    return TeamdeliverableComponent;
}());



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".teams_component{\r\n  margin-top: 20px;\r\n}\r\n\r\n.teams{\r\n  margin-top: 50px;\r\n}\r\n\r\n.bar-position {\r\n  margin-bottom: 5px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.team_name {\r\n  text-align: left !important;\r\n  color: rgb(127, 140, 141);\r\n  font-family: 'Lato', Tahoma, Geneva, sans-serif;\r\n}\r\n\r\n.team_card_icon {\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  margin-top: -35px;\r\n  margin-right: 15px;\r\n  float: left;\r\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\r\n}\r\n\r\n.team_card_img {\r\n  width:100px;\r\n  height:100px;\r\n  background-color:white;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\na {\r\ncolor:rgb(127, 140, 141);\r\n}\r\n\r\na:hover {\r\ncolor: #c1e2fc;\r\n}\r\n\r\n.circle-icon {\r\nbackground: grey;\r\ncolor:white;\r\nborder-radius: 50%;\r\ntext-align: center;\r\nvertical-align: middle;\r\npadding: 10px;\r\n}\r\n\r\n.check-input {\r\n  margin: 0;\r\n  left: 0;\r\n  right: 5px;\r\n  height: 20px;\r\n  width: 20px;\r\n  position: absolute;\r\n}\r\n\r\n.team-label {\r\n  text-align:left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvdGVhbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixnREFBZ0Q7Q0FDakQ7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVGQUF1RjtDQUN4Rjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtDQUNwQjs7QUFHRDtBQUNBLHlCQUF5QjtDQUN4Qjs7QUFFRDtBQUNBLGVBQWU7Q0FDZDs7QUFFRDtBQUNBLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsY0FBYztDQUNiOztBQUVEO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC90ZWFtcy90ZWFtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW1zX2NvbXBvbmVudHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGVhbXN7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmJhci1wb3NpdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnRlYW1fbmFtZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2IoMTI3LCAxNDAsIDE0MSk7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50ZWFtX2NhcmRfaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjQpO1xyXG59XHJcblxyXG4udGVhbV9jYXJkX2ltZyB7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbiAgaGVpZ2h0OjEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5hIHtcclxuY29sb3I6cmdiKDEyNywgMTQwLCAxNDEpO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuY29sb3I6ICNjMWUyZmM7XHJcbn1cclxuXHJcbi5jaXJjbGUtaWNvbiB7XHJcbmJhY2tncm91bmQ6IGdyZXk7XHJcbmNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxucGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNoZWNrLWlucHV0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogNXB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50ZWFtLWxhYmVsIHtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/teams/teams.component.html":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teams_component\" *ngIf=\"auth.isLoggedIn\">\n  <div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg\">\n    <button class=\"navbar-toggler\"\n            type=\"button\"\n            data-toggle=\"collapse\"\n            data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <button  type=\"button\" class=\"btn btn-outline-primary\" (click)=\"open(content)\"> Add Team </button>\n    <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <app-team-search></app-team-search>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"teams\">\n    <div class=\"row\">\n      <div *ngFor=\"let team of teams\" class=\"col-lg-4 col-md-6 col-sm-12\">\n          <div class=\"card  text-center card-stats\">\n            <a href=\"deliverable.html\"><span></span></a>\n            <div class=\"card-header card-header-icon\">\n              <div class=\"team_card_icon\">\n                <img *ngIf=\"team.photo\" class=\"team_card_img\" src=\"{{team.photo}}\" alt=\"Card image cap\">\n                <img *ngIf=\"!team.photo\" class=\"team_card_img\" src=\"../../assets/img/default.jpg\" alt=\"Card image cap\">\n              </div>\n              <div class = \"row justify-content-between\">\n                <a [routerLink]=\"['/teams/', team.id]\"><h3 class=\"team_name\"><b>{{ team.name | uppercase}}</b></h3></a>\n                <button class=\"delete\" title=\"delete team\" type=\"button\" class=\"btn btn-link\"\n                (click)=\"delete(team)\">x</button>\n              </div>\n            </div>\n            <app-teamdel [team]=\"team.id\"></app-teamdel>\n            <div class=\"card-footer\" style=\"border-top: 1px solid #eee;\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">category</i> {{ team.pipeline | uppercase }}\n              </div>\n              <div class=\"stats\">MATURITY LEVEL: {{ team.maturity_level }}</div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n    </div>\n  </div>\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add new team</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10\">\n        <form (ngSubmit)=\"onSubmit()\" #teamForm=\"ngForm\">\n          <div class=\"form-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"name\"\n                   [(ngModel)]=\"team.name\"\n                   name=\"name\"\n                   placeholder=\"Team Name\"\n                   required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"website\"\n                   [(ngModel)]=\"team.website\"\n                   name=\"website\"\n                   placeholder=\"www.website.com\"\n                   required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"pipeline\"\n                   [(ngModel)]=\"team.pipeline\"\n                   name=\"pipeline\"\n                   placeholder=\"Pipeline\"\n                   required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"number\"\n                   class=\"form-control\"\n                   id=\"maturity_level\"\n                   [(ngModel)]=\"team.maturity_level\"\n                   name=\"maturity_level\"\n                   placeholder=\"Maturity Level\"\n                   required>\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\"\n                      rows=\"5\"\n                      id=\"tag_line\"\n                      [(ngModel)]=\"team.tag_line\"\n                      name=\"tag_line\"\n                      placeholder=\"What is the tagline of the team?\">\n              </textarea>\n          </div>\n          <div class=\"form-check\">\n            <label for=\"research_stream\" class=\"form-check-label\">Research stream</label>\n            <input type=\"checkbox\" class=\"check-input\"\n                      id=\"research_stream\"\n                      [(ngModel)]=\"team.research_stream\"\n                      name=\"research_stream\">\n          </div>\n          <div class=\"form-check\">\n            <label for=\"coorporate_existance\" class=\"form-check-label\">Coorporate existance</label>\n            <input type=\"checkbox\" class=\"check-input\"\n                      id=\"coorporate_existance\"\n                      [(ngModel)]=\"team.coorporate_existance\"\n                      name=\"coorporate_existance\">\n          </div>\n          <div class=\"text-center\">\n            <br>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </div>\n          </form>\n        </div>\n  </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team */ "./src/app/team.ts");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../team.service */ "./src/app/team.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(route, teamService, modalService, auth) {
        this.route = route;
        this.teamService = teamService;
        this.modalService = modalService;
        this.auth = auth;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.getTeams();
        this.team = this.newTeam();
    };
    TeamsComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams()
            .subscribe(function (teams) { return _this.teams = teams; });
    };
    TeamsComponent.prototype.newTeam = function () {
        var team = new _team__WEBPACK_IMPORTED_MODULE_3__["Team"]();
        team.name = '';
        team.website = '';
        team.pipeline = '';
        team.maturity_level = null;
        team.tag_line = '';
        team.research_stream = false;
        team.coorporate_existance = false;
        team.date_of_entry = new Date();
        return team;
    };
    TeamsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.teamService.addTeam(this.team)
            .subscribe(function (team) {
            if (team) {
                _this.teams.unshift(team);
                _this.team = _this.newTeam();
            }
        });
    };
    TeamsComponent.prototype.delete = function (team) {
        this.teams = this.teams.filter(function (h) { return h !== team; });
        this.teamService.deleteTeam(team).subscribe();
    };
    // Modal method
    TeamsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // Modal method
    TeamsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    TeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/token.interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(router, http) {
        this.router = router;
        this.http = http;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var token = localStorage.getItem('vap-jwt-access-token');
        if (token) {
            var authReq = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log(err);
            if (err.status === 401) {
                if (err.error.message == "Token is exp") {
                    //Genrate params for token refreshing
                    var params = {
                        token: token,
                        refreshToken: localStorage.getItem('vap-jwt-refresh-token'),
                    };
                    return _this.http.post("api/token/", params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        //If reload successful update tokens
                        if (data.status == 200) {
                            //Update tokens
                            localStorage.setItem('vap-jwt-access-token', data.result.token);
                            localStorage.setItem('vap-jwt-refresh-token', data.result.refreshToken);
                            //Clone our fieled request ant try to resend it
                            var authReq = req.clone({
                                setHeaders: {
                                    Authorization: "Bearer " + data.result.token
                                }
                            });
                            return next.handle(authReq);
                        }
                    }));
                }
            }
        }));
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/upload-file.service.ts":
/*!****************************************!*\
  !*** ./src/app/upload-file.service.ts ***!
  \****************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UploadFileService = /** @class */ (function () {
    function UploadFileService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    /** POST: add new file to the server */
    UploadFileService.prototype.addFile = function (file) {
        var _this = this;
        var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        var url = "api/images/create/";
        // console.log(JSON.stringify({ file: file.file, remark: file.remark }))
        return this.http.post(url, file, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (file) { return _this.log("added file w/ id=" + file.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addFile', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UploadFileService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    UploadFileService.prototype.log = function (message) {
        this.messageService.add('TeamDeliverableService: ' + message);
    };
    UploadFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/app/upload-file/upload-file.component.css":
/*!*******************************************************!*\
  !*** ./src/app/upload-file/upload-file.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-file {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.btn-file input[type=file] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    font-size: 100px;\r\n    text-align: right;\r\n    opacity: 0;\r\n    outline: none;\r\n    cursor: inherit;\r\n    display: block;\r\n}\r\n.btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.428571429;\r\n  border-radius: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsU0FBUztJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJ0bi1maWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/upload-file/upload-file.component.html":
/*!********************************************************!*\
  !*** ./src/app/upload-file/upload-file.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n      <h6><b class=\"bold\">Upload file:</b></h6>\n      <div>\n        <span class=\"btn btn-outline-primary btn-file\">\n          Upload <input name=\"imageUrl\" type=\"file\" accept=\"application/pdf\" (change)=\"handleInputChange($event)\">\n          <!-- <input name=\"imageUrl\" type=\"file\" accept=\"image/*\" (change)=\"handleInputChange($event)\"> -->\n        </span>\n      </div>\n      <div *ngFor=\"let file of files\">\n        <h6>{{file.name}}</h6>\n        <div class=\"row justify-content-center\">\n          <button class=\"clear\" (click)=\"clear()\" class=\"btn btn-circle\" style=\"background-color:#ff0066;\"><i class=\"material-icons circle-icon\">clear</i></button>\n          <button (click)=\"save()\" class=\"btn btn-circle\" style=\"background-color:#00cc99;\"><i class=\"material-icons circle-icon\">done</i></button>\n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upload-file/upload-file.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-file/upload-file.component.ts ***!
  \******************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-file.service */ "./src/app/upload-file.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file */ "./src/app/file.ts");





var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(route, uploadFileService) {
        this.route = route;
        this.uploadFileService = uploadFileService;
        this.file = '';
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.handleInputChange = function (e) {
        this.files = e.target.files;
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    UploadFileComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.file = reader.result;
        console.log(this.file);
    };
    UploadFileComponent.prototype.save = function () {
        var _this = this;
        var f = new _file__WEBPACK_IMPORTED_MODULE_4__["File"]();
        f.file = this.file;
        this.uploadFileService.addFile(f)
            .subscribe(function (file) { return _this.file = file; });
        this.clear();
    };
    UploadFileComponent.prototype.clear = function () {
        this.files = [];
        this.ngOnInit();
    };
    UploadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/app/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.css */ "./src/app/upload-file/upload-file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _upload_file_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"]])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.usersUrl = 'api/users';
    }
    UserService.prototype.log = function (message) {
        this.messageService.add('UserService: ' + message);
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        var url = "" + this.usersUrl;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log('fetched users'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUsers', [])));
    };
    /** GET user by id. Will 404 if id not found */
    UserService.prototype.getUser = function (username) {
        var _this = this;
        var url = this.usersUrl + "/" + username;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched user username=" + username); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUser username=" + username)));
    };
    /** PUT: update the user on the server */
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        var url = this.usersUrl + "/" + user.id;
        return this.http.put(url, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated user id=" + user.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateUser')));
    };
    /** DELETE: delete the user from the server */
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        var id = typeof user === 'number' ? user : user.id;
        var url = this.usersUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted user id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteUser')));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid content\">\n  <div class=\"row justify-content-center\" style=\"margin-top:100px;\">\n    <div class=\"col-3\">\n      <div class=\"card card-profile\">\n        <div class=\"card-avatar\">\n          <a *ngIf=\"profile.is_coach\">\n            <img  src=\"../../assets/img/faces/{{coach.user}}.png\"/>\n          </a>\n          <a *ngIf=\"profile.is_team_member\">\n            <img  src=\"../../assets/img/faces/{{teamMember.user}}.png\"/>\n          </a>\n        </div>\n        <div class=\"card-body\">\n          <h6 *ngIf=\"profile.is_coach\" class=\"card-category text-gray\">Coach, {{coach?.organization}} </h6>\n          <h6 *ngIf=\"is_team_member\" class=\"card-category text-gray\">Team Member, {{teamMember?.team?.name}} </h6>\n          <div *ngIf=\"is_team_member\" style=\"text-align:left;\">\n            <h6><strong *ngIf=\"teamMember===editTeamMember\">Name: </strong></h6>\n            <h4 class=\"card-title\">\n              <span *ngIf=\"teamMember!==editTeamMember\">{{teamMember?.name}}</span>\n              <input *ngIf=\"teamMember===editTeamMember\" [(ngModel)]=\"teamMember.name\" class=\"form-control\">\n            </h4>\n            <h6>\n              <strong>Email: </strong>\n              <span *ngIf=\"teamMember!==editTeamMember\">{{teamMember?.email}}</span>\n              <input *ngIf=\"teamMember===editTeamMember\" [(ngModel)]=\"teamMember.email\" class=\"form-control\">\n            </h6>\n            <h6>\n              <strong>Phone: </strong>\n              <span *ngIf=\"teamMember!==editTeamMember\">{{teamMember?.phone}}</span>\n              <input *ngIf=\"teamMember===editTeamMember\" [(ngModel)]=\"teamMember.phone\" class=\"form-control\">\n            </h6>\n            <h6>\n              <strong *ngIf=\"teamMember===editTeamMember || teamMember?.role\">Role: </strong>\n              <span *ngIf=\"teamMember!==editTeamMember && teamMember?.role\">{{teamMember?.role}}</span>\n              <input *ngIf=\"teamMember===editTeamMember\" [(ngModel)]=\"teamMember.role\" class=\"form-control\">\n            </h6>\n            <h6>\n              <strong *ngIf=\"teamMember===editTeamMember || teamMember?.field\">Field: </strong>\n              <span *ngIf=\"teamMember!==editTeamMember && teamMember?.field\">{{teamMember?.field}}</span>\n              <input *ngIf=\"teamMember===editTeamMember\" [(ngModel)]=\"teamMember.field\" class=\"form-control\">\n            </h6>\n            <div style=\"float: right;\">\n              <button *ngIf=\"teamMember===editTeamMember\" title=\"Save team member\"(click)=\"updateTeamMember()\" class=\"btn btn-circle\" style=\"background-color:#00cc99;\"><i class=\"material-icons circle-icon\">done</i></button>\n              <button *ngIf=\"teamMember!==editTeamMember\" title=\"Edit team member\" (click)=\"editTeamMemberMethod(teamMember)\" class=\"btn btn-circle\" style=\"background-color:#26c6da;\"><i class=\"material-icons circle-icon\">edit</i></button>\n            </div>\n          </div>\n          <div *ngIf=\"is_coach\" style=\"text-align:left;\">\n            <h6><strong *ngIf=\"coach===editCoach\">Name: </strong></h6>\n            <h4 class=\"card-title\">\n              <span *ngIf=\"coach!==editCoach\">{{coach?.name}}</span>\n              <input *ngIf=\"coach===editCoach\" [(ngModel)]=\"coach.name\" class=\"form-control\">\n            </h4>\n            <h6>\n              <strong>Email: </strong>\n              <span *ngIf=\"coach!==editCoach\">{{coach?.email}}</span>\n              <input *ngIf=\"coach===editCoach\" [(ngModel)]=\"coach.email\" class=\"form-control\">\n            </h6>\n            <h6>\n              <strong>Phone: </strong>\n              <span *ngIf=\"coach!==editCoach\">{{coach?.phone}}</span>\n              <input *ngIf=\"coach===editCoach\" [(ngModel)]=\"coach.phone\" class=\"form-control\">\n            </h6>\n            <h6>\n              <strong *ngIf=\"coach===editCoach || coach?.field\">Organization: </strong>\n              <span *ngIf=\"coach!==editCoach\">{{coach?.organization}}</span>\n              <input *ngIf=\"coach===editCoach\" [(ngModel)]=\"coach.organization\" class=\"form-control\">\n            </h6>\n            <h6>\n              <strong *ngIf=\"coach===editCoach || coach?.field\">Field: </strong>\n              <span *ngIf=\"coach!==editCoach && coach?.field\">{{coach?.field}}</span>\n              <input *ngIf=\"coach===editCoach\" [(ngModel)]=\"coach.field\" class=\"form-control\">\n            </h6>\n            <h6>\n              <strong *ngIf=\"coach===editCoach || coach?.job_title\">Job Title: </strong>\n              <span *ngIf=\"coach!==editCoach && coach?.job_title\">{{coach?.job_title}}</span>\n              <input *ngIf=\"coach===editCoach\" [(ngModel)]=\"coach.job_title\" class=\"form-control\">\n            </h6>\n            <div style=\"float: right;\">\n              <button *ngIf=\"coach===editCoach\" title=\"Save coach\"(click)=\"updateCoach()\" class=\"btn btn-circle\" style=\"background-color:#00cc99;\"><i class=\"material-icons circle-icon\">done</i></button>\n              <button *ngIf=\"coach!==editCoach\" title=\"Edit coach\" (click)=\"editCoachMethod(coach)\" class=\"btn btn-circle\" style=\"background-color:#26c6da;\"><i class=\"material-icons circle-icon\">edit</i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf = \"is_team_member\" class=\"col-8\">\n      <app-team-card [team]=\"teamMember?.team\"></app-team-card>\n    </div>\n    <div *ngIf = \"is_coach\" class=\"col-8\">\n      <app-coach-deliverables></app-coach-deliverables>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile */ "./src/app/profile.ts");
/* harmony import */ var _teamMember__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../teamMember */ "./src/app/teamMember.ts");
/* harmony import */ var _coach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../coach */ "./src/app/coach.ts");
/* harmony import */ var _team_member_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../team-member.service */ "./src/app/team-member.service.ts");
/* harmony import */ var _coach_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../coach.service */ "./src/app/coach.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");











var UserComponent = /** @class */ (function () {
    function UserComponent(route, userService, teamMemberService, coachService, auth) {
        this.route = route;
        this.userService = userService;
        this.teamMemberService = teamMemberService;
        this.coachService = coachService;
        this.auth = auth;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.id = null;
        this.profile = new _profile__WEBPACK_IMPORTED_MODULE_4__["Profile"]();
    }
    UserComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.username = this.user.username;
        this.id = this.user.id;
        this.profile = this.user.profile;
        this.is_team_member = this.user.profile.is_team_member;
        this.is_coach = this.user.profile.is_coach;
        this.photo = this.user.profile.photo;
        console.log(this.user);
        if (this.user.profile.is_team_member) {
            this.teamMember = this.newTeamMember();
            this.getTeamMemberDetails(this.user.id);
        }
        if (this.user.profile.is_coach) {
            this.coach = this.newCoach();
            this.getCoachDetails(this.user.id);
        }
    };
    UserComponent.prototype.newTeamMember = function () {
        var teamMember = new _teamMember__WEBPACK_IMPORTED_MODULE_5__["TeamMember"]();
        teamMember.name = '';
        teamMember.team = this.team;
        // teamMember.photo = '';
        teamMember.email = '';
        teamMember.phone = '';
        teamMember.role = '';
        teamMember.field = '';
        return teamMember;
    };
    UserComponent.prototype.newCoach = function () {
        var coach = new _coach__WEBPACK_IMPORTED_MODULE_6__["Coach"]();
        coach.name = '';
        // teamMember.photo = '';
        coach.email = '';
        coach.phone = '';
        coach.organization = '';
        coach.field = '';
        coach.job_title = '';
        return coach;
    };
    UserComponent.prototype.getTeamMemberDetails = function (userId) {
        var _this = this;
        this.teamMemberService.getTeamMember(userId)
            .subscribe(function (teamMember) {
            _this.teamMember = teamMember;
            _this.team = teamMember.team;
        });
    };
    UserComponent.prototype.getCoachDetails = function (userId) {
        var _this = this;
        this.coachService.getCoach(userId)
            .subscribe(function (coach) { return _this.coach = coach; });
    };
    UserComponent.prototype.editTeamMemberMethod = function (teamMember) {
        teamMember.team = this.team;
        this.editTeamMember = teamMember;
    };
    UserComponent.prototype.editCoachMethod = function (coach) {
        this.editCoach = coach;
    };
    UserComponent.prototype.updateTeamMember = function () {
        var _this = this;
        if (this.editTeamMember) {
            this.editTeamMember.team = this.editTeamMember.team.id;
            this.teamMemberService.updateTeamMember(this.editTeamMember)
                .subscribe(function (teamMember) {
                _this.teamMember = teamMember;
                var updatedUser = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
                updatedUser.id = teamMember.user;
                updatedUser.username = _this.user.username;
                updatedUser.password = _this.user.password;
                updatedUser.profile.name = teamMember.name;
                updatedUser.profile.email = teamMember.email;
                updatedUser.profile.phone = teamMember.phone;
                updatedUser.profile.is_team_member = _this.is_team_member;
                updatedUser.profile.is_coach = _this.is_coach;
                console.log(updatedUser);
                console.log(_this.user);
                localStorage.remove('user');
                localStorage.setItem('user', JSON.stringify(updatedUser));
            });
            location.reload();
            this.editTeamMember = undefined;
        }
    };
    UserComponent.prototype.updateCoach = function () {
        var _this = this;
        if (this.editCoach) {
            this.coachService.updateCoach(this.editCoach)
                .subscribe(function (coach) {
                _this.coach = coach;
                var updatedUser = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
                updatedUser.id = coach.user;
                updatedUser.username = _this.user.username;
                updatedUser.password = _this.user.password;
                updatedUser.profile.name = coach.name;
                updatedUser.profile.email = coach.email;
                updatedUser.profile.phone = coach.phone;
                updatedUser.profile.is_team_member = _this.is_team_member;
                updatedUser.profile.is_coach = _this.is_coach;
                localStorage.remove('user');
                localStorage.setItem('user', JSON.stringify(updatedUser));
            });
            this.editCoach = undefined;
        }
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _team_member_service__WEBPACK_IMPORTED_MODULE_7__["TeamMemberService"],
            _coach_service__WEBPACK_IMPORTED_MODULE_8__["CoachService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]])
    ], UserComponent);
    return UserComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kmpat\Documents\DMST\VirtualAccelerator\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map