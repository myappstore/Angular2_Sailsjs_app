"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var user_component_1 = require("./user.component");
var user_service_1 = require("./services/user.service");
var weekdays_pipe_1 = require("./pipes/weekdays.pipe");
// import { DialogComponent }   from './dialog.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, user_component_1.UserComponent, weekdays_pipe_1.Weekdays],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [user_service_1.UserService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map