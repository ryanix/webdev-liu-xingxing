"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
var environment_1 = require("../../environments/environment");
// injecting service into module
var WidgetServiceClient = (function () {
    function WidgetServiceClient(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.baseUrl;
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget,
            'sortWidgets': this.sortWidgets,
        };
    }
    WidgetServiceClient.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetServiceClient.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetServiceClient.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetServiceClient.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetServiceClient.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetServiceClient.prototype.sortWidgets = function (pageId, start, end) {
        var url = '/page/' + pageId + '/widget?initial=' + start.toString() + '&final=' + end.toString();
        return this.http.put(url, {})
            .map(function (res) {
            return res.json();
        });
    };
    return WidgetServiceClient;
}());
WidgetServiceClient = __decorate([
    core_1.Injectable()
], WidgetServiceClient);
exports.WidgetServiceClient = WidgetServiceClient;
