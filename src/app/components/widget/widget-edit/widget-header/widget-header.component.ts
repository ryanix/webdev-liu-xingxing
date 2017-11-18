import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  @ViewChild('f') headerForm: NgForm;

  userId: String;
  webId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  errorFlag: boolean;
  errorMsg = 'Header name is required';

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
          if ( w ) {
            this.widget = w;
          }
        });
    });
  }

  confirmChange() {
    if (this.headerForm.value.name.length > 0) {
      this.errorFlag = false;
      this.widget.text = this.headerForm.value.name;
      this.widget.size = this.headerForm.value.size;
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe((w: Widget) => {
          if ( w ) {
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
