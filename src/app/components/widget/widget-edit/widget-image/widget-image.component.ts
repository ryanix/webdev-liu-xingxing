import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @ViewChild('f') imageForm: NgForm;

  userId: String;
  webId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  errorFlag: boolean;
  errorMsg = 'Image url is required';

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
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    });
  }

  confirmChange() {
    if (this.imageForm.value.url.length > 0) {
      this.errorFlag = false;
      this.widget.width = this.imageForm.value.width.toString() + '%';
      this.widget.url = this.imageForm.value.url;
      this.widgetService.updateWidget(this.widgetId, this.widget);
      this.router.navigate([`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget`]);
    } else {
      this.errorFlag = true;
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate( [`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget`]);
  }
}