import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteServiceClient} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websites: Website[];
  constructor(private route: ActivatedRoute, private webService: WebsiteServiceClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.webService.findWebsitesByUser(this.userId)
        .subscribe((ws: Website[]) => {
          this.websites = ws;
        });
    });
  }

}
