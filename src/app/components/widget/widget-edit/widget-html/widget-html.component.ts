import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  @ViewChild('f') youtubeForm: NgForm;

  userId: String;
  webId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  errorFlag: boolean;
  errorMsg = 'HTML name should not be empty';

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetServiceClient,
    private router: Router,
  ) { }

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

  confirmChange() {
    if (this.youtubeForm.valid) {
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe((w: Widget) => {
          if (w) {
            this.router.navigate([`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget`]);
          } else {
            this.errorFlag = true;
          }
        });
    } else {
      this.errorFlag = true;
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((w: Widget) => {
        if ( w ) {
          this.router.navigate( [`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget`]);
        }
      });
  }

}
