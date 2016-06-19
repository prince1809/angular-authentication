System.register(["angular2/core", "angular2/common", "../shared/data.service"], function(exports_1, context_1) {
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
    var core_1, common_1, data_service_1;
    var ProtectedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            ProtectedComponent = (function () {
                function ProtectedComponent(_fb, _dataService) {
                    this._fb = _fb;
                    this._dataService = _dataService;
                }
                ProtectedComponent.prototype.onSaveData = function () {
                    this._dataService.addData(this.myForm.value)
                        .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
                };
                ProtectedComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        title: ['', common_1.Validators.required],
                        content: ['', common_1.Validators.required],
                    });
                };
                ProtectedComponent = __decorate([
                    core_1.Component({
                        template: "\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSaveData()\">\n            <div class=\"input-group\">\n                <label for=\"title\">Title</label>\n                <input [ngFormControl]=\"myForm.find('title')\" type=\"text\" id=\"title\" #title=\"ngForm\">\n            </div>\n            <div class=\"input-group\">\n                <label for=\"content\">Content</label>\n                <input [ngFormControl]=\"myForm.find('content')\" type=\"text\" id=\"content\">\n            </div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Add Data</button>\n        </form>\n    ",
                        providers: [data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, data_service_1.DataService])
                ], ProtectedComponent);
                return ProtectedComponent;
            }());
            exports_1("ProtectedComponent", ProtectedComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RlY3RlZC9wcm90ZWN0ZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdJLDRCQUNVLEdBQWdCLEVBQ2hCLFlBQXlCO29CQUR6QixRQUFHLEdBQUgsR0FBRyxDQUFhO29CQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFDaEMsQ0FBQztnQkFFSix1Q0FBVSxHQUFWO29CQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO3lCQUMzQyxTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzVCLENBQUE7Z0JBQ0gsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7d0JBQzFCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDaEMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUNwQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFyQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsd21CQVlUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O3NDQUFBO2dCQXVCRix5QkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsbURBc0JDLENBQUEiLCJmaWxlIjoicHJvdGVjdGVkL3Byb3RlY3RlZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0b3IsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9kYXRhLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblNhdmVEYXRhKClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3RpdGxlJylcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiAjdGl0bGU9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2NvbnRlbnQnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+QWRkIERhdGE8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFByb3RlY3RlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZVxuICAgICkge31cblxuICAgIG9uU2F2ZURhdGEoKSB7XG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5hZGREYXRhKHRoaXMubXlGb3JtLnZhbHVlKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgIGNvbnRlbnQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
