"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_service_1 = require("./services/user.service");
var Rx_1 = require("rxjs/Rx");
var UserComponent = /** @class */ (function () {
    function UserComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.users = [];
        this.show_error = null;
        this.showDialog = false;
        this.days_arr = [
            { name: 'Sun', selected: false },
            { name: 'Mon', selected: false },
            { name: 'Tue', selected: false },
            { name: 'Wed', selected: false },
            { name: 'Thu', selected: false },
            { name: 'Fri', selected: false },
            { name: 'Sat', selected: false },
        ];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.userForm = this.fb.group({
            'full_name': [null, forms_1.Validators.required],
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
            'city': [null],
            'ride_in_group': [null, forms_1.Validators.required],
            'days': this.fb.array([], forms_1.Validators.required)
        });
        this.fillData();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.users = response.data;
            }
        }, function (error) {
            _this.show_error = error;
            return Rx_1.Observable.throw(error);
        });
    };
    // if there is no data then fill some data into database
    UserComponent.prototype.fillData = function () {
        var _this = this;
        this.userService.fillData()
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.users = response.data;
            }
        }, function (error) {
            _this.show_error = error;
            return Rx_1.Observable.throw(error);
        });
    };
    UserComponent.prototype.resetForm = function () {
        this.userForm.reset();
        this.userForm.setControl('days', new forms_1.FormArray([]));
        this.days_arr.forEach(function (item) {
            item.selected = false;
        });
    };
    UserComponent.prototype.saveData = function (data) {
        var _this = this;
        this.show_error = null;
        this.userService.saveData(data)
            .subscribe(function (data) {
            if (data.status == 201) {
                _this.getUsers();
                _this.resetForm();
            }
            else {
                _this.show_error = data.error;
            }
        }, function (error) {
            _this.show_error = error;
            return Rx_1.Observable.throw(error);
        });
    };
    UserComponent.prototype.deleteUser = function (user, index) {
        var _this = this;
        if (confirm("Are you sure want to delete user " + user.full_name + " ?")) {
            this.userService.deleteUser(user.id).subscribe(function (response) {
                _this.users.splice(index, 1);
            });
        }
    };
    UserComponent.prototype.onChange = function (name, isChecked) {
        var daysFormArray = this.userForm.controls.days;
        if (isChecked && name != null) {
            daysFormArray.push(new forms_1.FormControl(name));
        }
        else {
            var index = daysFormArray.controls.findIndex(function (x) { return x.value == name; });
            daysFormArray.removeAt(index);
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-section',
            templateUrl: 'templates/user.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map