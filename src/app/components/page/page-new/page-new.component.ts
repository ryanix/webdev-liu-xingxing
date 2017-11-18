import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageServiceClient} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

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
      this.page = new Page(
        '',
        this.webId
      );
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageService.findPageByWebsiteId(this.webId)
        .subscribe((p: Page[]) => {
          this.pages = p;
        });
    });
  }

  addNewPage() {
    if (this.page.name.length > 0) {
      this.errorFlag = false;
      this.page._website = this.webId;
      this.pageService.createPage(this.webId, this.page)
        .subscribe((p) => {
          if ( p ) {
            this.router.navigate([`/user/${this.userId}/website/${this.webId}/page`]);
          }else {
            this.errorFlag = true;
          }
        });
    } else {
      this.errorFlag = true;
    }
  }

  refresh() {
    this.errorFlag = false;
  }
}
