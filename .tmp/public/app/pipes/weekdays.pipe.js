"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Weekdays = /** @class */ (function () {
    function Weekdays() {
    }
    Weekdays.prototype.transform = function (value) {
        var newStr = "";
        value = value.replace(/^,|,$/g, '');
        var arr = value.split(',');
        if (arr.length == 2 && arr.indexOf('Sun') !== -1 && arr.indexOf('Sat') !== -1) {
            newStr = 'Weekends';
        }
        else if (arr.length == 7) {
            newStr = 'Every day';
        }
        else if (arr.length == 5 && arr.indexOf('Sun') == -1 && arr.indexOf('Sat') == -1) {
            newStr = 'Week days';
        }
        else {
            newStr = value.replace(/^,|,$/g, '');
        }
        return newStr;
    };
    Weekdays = __decorate([
        core_1.Pipe({ name: 'weekdays' })
    ], Weekdays);
    return Weekdays;
}());
exports.Weekdays = Weekdays;
//# sourceMappingURL=weekdays.pipe.js.map