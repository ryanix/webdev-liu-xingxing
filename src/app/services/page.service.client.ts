import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import {Page} from '../models/page.model.client';

// injecting service into module
@Injectable()

export class PageServiceClient {
  constructor(private http: Http) {}

  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage,
  };

  createPage(websiteId: String, page: Page) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findPageByWebsiteId(websiteId: String) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findPageById(pageId: String) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updatePage(pageId: String, page: Page) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.put(url, page)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deletePage(pageId: String) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }


}
