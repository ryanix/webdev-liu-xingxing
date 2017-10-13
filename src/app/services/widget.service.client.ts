import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import {Widget} from '../models/widget.model.client';

// injecting service into module
@Injectable()

export class WidgetServiceClient {
  constructor() {}

  widgets: Widget[] = [
    new Widget('123', 'HEADING', '321', 2, null, 'GIZMODO'),
    new Widget('234', 'HEADING', '321', 4, null, 'Lorem ipsum'),
    new Widget('345', 'IMAGE', '321', null, '100%', null, 'http://lorempixel.com/400/200/'),
    new Widget('456', 'HTML', '321', null, null, '<p>Lorem ipsum</p>'),
    new Widget('567', 'HEADING', '321', 4, null, 'Lorem ipsum'),
    new Widget('678', 'YOUTUBE', '321', null, '100%', null, 'https://youtu.be/AM2Ivdi9c4E'),
    new Widget('789', 'HTML', '321', null, null, '<p>Lorem ipsum</p>')
  ];

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget,
  };

  createWidget(pageId: String, widget: any) {
    widget._id = (this.widgets.length + 1).toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
  }

  findWidgetsByPageId(pageId: String) {
    return this.widgets.filter((w) => {
      if (w.pageId === pageId) {
        return w;
      }
    });
  }

  findWidgetById(widgetId: String) {
    for ( let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId ) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId: String, widget: Widget) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget;
        return widget;
      }
    }
  }

  deleteWidget(widgetId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        delete this.widgets[x];
        return true;
      } else {
        return false;
      }
    }
  }


}
