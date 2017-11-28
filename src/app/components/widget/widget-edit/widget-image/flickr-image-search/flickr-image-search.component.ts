import { Component, OnInit } from '@angular/core';
import {FlickrServiceClient} from '../../../../../services/flickr.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../../../../../services/widget.service.client';
import {Widget} from '../../../../../models/widget.model.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  searchText: String;
  photos: any;
  webId: String;
  pageId: String;
  userId: String;
  widgetId: String;
  widget: Widget;

  constructor(
    private flickrService: FlickrServiceClient,
    private route: ActivatedRoute,
    private widgetService: WidgetServiceClient,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe( (w: Widget) => {
          this.widget = w;
        });
    });
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          let val = data.body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(pic) {
    this.widget.url = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg';
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((w: Widget) => {
        this.router.navigate([`user/${this.userId}/website/${this.webId}/page/${this.pageId}/widget/${this.widgetId}`]);
      });
  }
}

