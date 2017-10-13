import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import {Page} from '../models/page.model.client';

// injecting service into module
@Injectable()

export class PageServiceClient {
  constructor() {}

  pages: Page[] = [
    new Page('321',  'Post 1', '456', 'Lorem' ),
    new Page('432',  'Post 2', '456', 'Lorem' ),
    new Page('543',  'Post 3', '456', 'Lorem' )
  ];

  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage,
  };

  createPage(websiteId: String, page: Page) {
    page._id = (this.pages.length + 1).toString();
    page.websiteId = websiteId;
    this.pages.push(page);
  }

  findPageByWebsiteId(websiteId: String) {
    return this.pages.filter((p) => {
      if (p.websiteId === websiteId) {
        return p;
      }
    });
  }

  findPageById(pageId: String) {
    for ( let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId ) {
        return this.pages[x];
      }
    }
  }

  updatePage(pageId: String, page: Page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x] = page;
        return page;
      }
    }
  }

  deletePage(pageId: String) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
      }
    }
  }


}
