import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import {Widget} from '../models/widget.model.client';

// injecting service into module
@Injectable()

export class WidgetServiceClient {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget,
    'sortWidgets': this.sortWidgets,
  };

  createWidget(pageId: String, widget: any) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetsByPageId(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetById(widgetId: String) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWidget(widgetId: String, widget: Widget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.put(url, widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteWidget(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  sortWidgets(pageId, start, end) {
    const url = '/page/' + pageId + '/widget?initial=' + start.toString() + '&final=' + end.toString();
    return this.http.put(url, {})
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }


}
