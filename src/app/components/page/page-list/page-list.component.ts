import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageServiceClient} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: String;
  webId: String;
  pageId: String;
  pages: Page[];

  constructor(private pageService: PageServiceClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageService.findPageByWebsiteId(this.webId)
        .subscribe((ps: Page[]) => {
          this.pages = ps;
        });
    });
  }

}
