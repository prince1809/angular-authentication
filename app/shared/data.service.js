System.register(["angular2/core", "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var url, DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            url = "abcd.firebaseio.com";
            DataService = (function () {
                function DataService(_http) {
                    this._http = _http;
                }
                DataService.prototype.getAllData = function () {
                    return this._http.get(url + '/users/data.json')
                        .map(function (response) { return response.json(); });
                };
                DataService.prototype.addData = function (data) {
                    var body = JSON.stringify(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(url + '/users/data.json', body, { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                DataService.prototype.deleteAllData = function () {
                    return this._http.delete(url + '/users/data.json')
                        .map(function (response) { return response.json(); });
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUlNLEdBQUc7Ozs7Ozs7Ozs7O1lBQUgsR0FBRyxHQUFHLHFCQUFxQixDQUFDO1lBRWxDO2dCQUNFLHFCQUNVLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFDbkIsQ0FBQztnQkFFSCxnQ0FBVSxHQUFWO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsa0JBQWtCLENBQUM7eUJBQzVDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCw2QkFBTyxHQUFQLFVBQVEsSUFBUztvQkFDZixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFDLGtCQUFrQixFQUFDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzt5QkFDdEUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELG1DQUFhLEdBQWI7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxrQkFBa0IsQ0FBQzt5QkFDL0MsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQXRCSDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkF5QmIsa0JBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELHFDQXdCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHAsSGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmNvbnN0IHVybCA9IFwiYWJjZC5maXJlYmFzZWlvLmNvbVwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaHR0cDogSHR0cFxuICApe31cblxuICBnZXRBbGxEYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHVybCsnL3VzZXJzL2RhdGEuanNvbicpXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG5cbiAgYWRkRGF0YShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHVybCsnL3VzZXJzL2RhdGEuanNvbicsYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxuXG4gIGRlbGV0ZUFsbERhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodXJsKycvdXNlcnMvZGF0YS5qc29uJylcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
