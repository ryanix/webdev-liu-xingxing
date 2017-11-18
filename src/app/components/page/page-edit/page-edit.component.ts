import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageServiceClient} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: String;
  webId: String;
  pageId: String;
  pages: Page[];
  page: Page;
  errorFlag: boolean;
  errorMsg = 'Page name is required!';

  constructor(private route: ActivatedRoute, private pageService: PageServiceClient, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];
      this.pageService.findPageById(this.pageId)
        .subscribe( (p) => {
          this.page = p;
        });
      this.pageService.findPageByWebsiteId(this.webId)
        .subscribe((ps) => {
          this.pages = ps;
        });
    });
  }

  updatePage() {
    if (this.page.name.length > 0) {
      this.errorFlag = false;
      this.pageService.updatePage(this.pageId, this.page)
        .subscribe((p: Page) => {
          if (p) {
            this.router.navigate([`/user/${this.userId}/website/${this.webId}/page`]);
          }else {
            this.errorFlag = true;
          }
        });
    } else {
      this.errorFlag = true;
    }
  }

  deletePage() {
    this.pageService.deletePage(this.pageId)
      .subscribe((p: Page) => {
        this.router.navigate([`/user/${this.userId}/website/${this.webId}/page`]);
      });
  }

  refresh() {
    this.errorFlag = false;
  }
}
