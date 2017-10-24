import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  widgets: Widget[];
  nh = 0;
  ni = 0;
  ny = 0;

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetServiceClient,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {

      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];
      this.widgetService.findWidgetsByPageId(this.pageId)
        .subscribe((ws: Widget[]) => {
          if (ws.length > 0) {
            this.widgets = ws;
              ws.map((w) => {
                if (w.widgetType === 'HEADING') {
                  this.nh += 1;
                } else if (w.widgetType === 'IMAGE') {
                  this.ni += 1;
                } else if (w.widgetType === 'YOUTUBE') {
                  this.ny += 1;
                }
              });
          }
        });
    });
  }

  addNewImage() {
    const widgetId = Math.random();
    const widget = new Widget(
      widgetId.toString(),
      'IMAGE',
      this.pageId,
      null,
      '100%',
      null,
      'IMAGE URl'
    );
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe( (w: Widget) => {
        if ( w ) {
          this.router.navigate( [`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget/${widgetId}`]);
        }
      });
  }

  addNewYoutube() {
    const widgetId = Math.random();
    const widget = new Widget(
      widgetId.toString(),
      'YOUTUBE',
      this.pageId,
      null,
      '100%',
      null,
      'Youtube url'
    );
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((w: Widget) => {
        this.router.navigate( [`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget/${widgetId}`]);
    });
  }

  addNewHeader() {
    const widgetId = Math.random();
    const widget = new Widget(
      widgetId.toString(),
      'HEADING',
      this.pageId,
      2,
      null,
      'HEADING NAME'
    );
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((w: Widget) => {
        if ( w ) {
          this.router.navigate( [`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget/${widgetId}`]);
        }
      });
  }
}
