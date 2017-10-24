import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {WidgetServiceClient} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  constructor(private route: ActivatedRoute, private widgetService: WidgetServiceClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe((w: Widget) => {
          this.widget = w;
        });
    });
  }
}
