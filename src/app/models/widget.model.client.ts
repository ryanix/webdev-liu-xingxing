import {SafeResourceUrl} from '@angular/platform-browser';

export class Widget {
  _page: String;
  size: Number;
  width: String;
  text: String;
  url: String;
  type: String[];
  name: String;
  placeholder: String;
  description: String;
  height: String;
  rows: Number;
  class: String;
  icon: String;
  deletable: Boolean;
  formatted: Boolean;
  dateCreated: Date;

  constructor( widgetType, pageId, size?, width?, text?,  url?) {
    this.type = widgetType;
    this._page  = pageId;
    this.size = size;
    this.width = width;
    this.text = text;
    this.url = url;
    this.dateCreated = new Date();
  }
}
