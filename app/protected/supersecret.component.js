System.register(["angular2/core", "../shared/data.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_service_1;
    var SuperSecretComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            SuperSecretComponent = (function () {
                function SuperSecretComponent(_dataService) {
                    this._dataService = _dataService;
                }
                SuperSecretComponent.prototype.onGetData = function () {
                    var _this = this;
                    this._dataService.getAllData()
                        .subscribe(function (data) { return _this.dataset = JSON.stringify(data); }, function (error) { return console.log(error); });
                };
                SuperSecretComponent.prototype.onDeleteData = function () {
                    var _this = this;
                    this._dataService.deleteAllData()
                        .subscribe(function (data) { return _this.dataset = ""; }, function (error) { return console.log(error); });
                };
                SuperSecretComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Data</h1>\n        <p>{{ dataset }}</p>\n        <button (click)=\"onGetData()\">Get Data</button>\n        <br>\n        <button (click)=\"onDeleteData()\">Delete all Data</button>\n    ",
                        providers: [data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], SuperSecretComponent);
                return SuperSecretComponent;
            }());
            exports_1("SuperSecretComponent", SuperSecretComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RlY3RlZC9zdXBlcnNlY3JldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFHSSw4QkFDVSxZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQ2hDLENBQUM7Z0JBRUosd0NBQVMsR0FBVDtvQkFBQSxpQkFNQztvQkFMQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTt5QkFDN0IsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxFQUMzQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzVCLENBQUE7Z0JBQ0gsQ0FBQztnQkFFRCwyQ0FBWSxHQUFaO29CQUFBLGlCQU1DO29CQUxDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFO3lCQUNoQyxTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFBO2dCQUNILENBQUM7Z0JBaENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLDJNQU1UO3dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O3dDQUFBO2dCQXdCRiwyQkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsdURBc0JDLENBQUEiLCJmaWxlIjoicHJvdGVjdGVkL3N1cGVyc2VjcmV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9kYXRhLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPkRhdGE8L2gxPlxuICAgICAgICA8cD57eyBkYXRhc2V0IH19PC9wPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldERhdGEoKVwiPkdldCBEYXRhPC9idXR0b24+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25EZWxldGVEYXRhKClcIj5EZWxldGUgYWxsIERhdGE8L2J1dHRvbj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxufSlcbi8vIEBDYW5BY3RpdmF0ZSgpXG5leHBvcnQgY2xhc3MgU3VwZXJTZWNyZXRDb21wb25lbnQge1xuICAgIGRhdGFzZXQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZVxuICAgICkge31cblxuICAgIG9uR2V0RGF0YSgpIHtcbiAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmdldEFsbERhdGEoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB0aGlzLmRhdGFzZXQgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApXG4gICAgfVxuXG4gICAgb25EZWxldGVEYXRhKCkge1xuICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuZGVsZXRlQWxsRGF0YSgpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMuZGF0YXNldCA9IFwiXCIsXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
