"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Widget = (function () {
    function Widget(widgetType, pageId, size, width, text, url) {
        this.type = widgetType;
        this._page = pageId;
        this.size = size;
        this.width = width;
        this.text = text;
        this.url = url;
        this.dateCreated = new Date();
    }
    return Widget;
}());
exports.Widget = Widget;
