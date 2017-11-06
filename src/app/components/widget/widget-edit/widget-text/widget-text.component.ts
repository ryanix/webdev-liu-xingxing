import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from "../../../../models/widget.model.client";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {WidgetServiceClient} from "../../../../services/widget.service.client";

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  @ViewChild('f') textForm: NgForm;

  userId: String;
  webId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  errorFlag: boolean;
  errorMsg = 'Placeholder is required for text input widget.';

  constructor(
    private route: ActivatedRoute,
    private  widgetService: WidgetServiceClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
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
    if (this.textForm.valid) {
      this.errorFlag = false;
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe((w: Widget) => {
          if (w) {
            this.router.navigate([`/user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget`]);
        }
      });
    }else {
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
