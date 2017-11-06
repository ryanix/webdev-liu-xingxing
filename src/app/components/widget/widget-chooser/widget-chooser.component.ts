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
  nht = 0;
  nt = 0;

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
        .subscribe((ws) => {
          if (ws.length > 0) {
            this.widgets = ws;
              ws.map((w) => {
                if (!w) {
                  return;
                }
                if (w.widgetType === 'HEADING') {
                  this.nh += 1;
                } else if (w.widgetType === 'IMAGE') {
                  this.ni += 1;
                } else if (w.widgetType === 'YOUTUBE') {
                  this.ny += 1;
                } else if (w.widgetType === 'HTML') {
                  this.nht += 1;
                } else if (w.widgetType === 'INPUT') {
                  this.nt += 1;
                }
              });
          }
        });
    });
  }

  addNewImage() {
    const widget = new Widget(
      'IMAGE',
      this.pageId,
      null,
      '100%',
      null,
      'IMAGE URl'
    );
    this.addWidget(this.pageId, widget);
  }

  addNewYoutube() {
    const widget = new Widget(
      'YOUTUBE',
      this.pageId,
      null,
      '100%',
      null,
      'Youtube url'
    );
    this.addWidget(this.pageId, widget);
  }

  addNewHeader() {
    const widget = new Widget(
      'HEADING',
      this.pageId,
      2,
      null,
      'HEADING NAME'
    );
    this.addWidget(this.pageId, widget);
  }

  addNewHtml() {
    const widget = new Widget(
      'HTML',
      this.pageId,
      null,
      '100%',
      '',
    );
    this.addWidget(this.pageId, widget);
  }

  addNewInput() {
    const widget = new Widget(
      'INPUT',
      this.pageId,
      null,
      null,
      null,
    );
    this.addWidget(this.pageId, widget);
  }

  addWidget(pageId, widget) {
    this.widgetService.createWidget(pageId, widget)
      .subscribe( (w) => {
        if ( w ) {
          this.router.navigate( [`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget/${w._id}`]);
        }
      });
  }
}
