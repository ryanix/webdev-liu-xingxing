"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.errorMsg = 'Header name is required';
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (w) {
                if (w) {
                    _this.widget = w;
                }
            });
        });
    };
    WidgetHeaderComponent.prototype.confirmChange = function () {
        var _this = this;
        if (this.headerForm.value.name.length > 0) {
            this.errorFlag = false;
            this.widget.text = this.headerForm.value.text;
            this.widget.size = this.headerForm.value.size;
            this.widget.name = this.headerForm.value.name;
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (w) {
                if (w) {
                    _this.router.navigate(["/user/" + _this.userId + "/website/" + _this.webId + "/page/" + _this.pageId + "/widget"]);
                }
                else {
                    _this.errorFlag = true;
                }
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (w) {
            if (w) {
                _this.router.navigate(["/user/" + _this.userId + "/website/" + _this.webId + "/page/" + _this.pageId + "/widget"]);
            }
        });
    };
    return WidgetHeaderComponent;
}());
__decorate([
    core_1.ViewChild('f')
], WidgetHeaderComponent.prototype, "headerForm", void 0);
WidgetHeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-widget-header',
        templateUrl: './widget-header.component.html',
        styleUrls: ['./widget-header.component.css']
    })
], WidgetHeaderComponent);
exports.WidgetHeaderComponent = WidgetHeaderComponent;
