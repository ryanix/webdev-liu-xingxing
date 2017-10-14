import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../../../services/widget.service.client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  widgets: Widget[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetServiceClient,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];
      this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
      this.widgets.map((w) => {
        if (w.widgetType === 'YOUTUBE' && w.url) {
          const url = 'https://www.youtube.com/embed/' + w.url.split('/').slice(-1)[0];
          w.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      });
      console.log(this.widgets);
    });
  }

  redirectTo(id) {
    this.router.navigate([`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget/${id}`]);
  }
}
