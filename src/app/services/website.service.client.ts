import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import {Website} from '../models/website.model.client';

// injecting service into module
@Injectable()

export class WebsiteServiceClient {
  constructor(private http: Http) {}

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite,
  };

  createWebsite(userId: String, website: any) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.put(url, website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsitesByUser(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsiteById(websiteId: String) {
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWebsite(websiteId: String, website: Website) {
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.put(url, website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteWebsite(websiteId) {
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }


}
