import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import {Website} from '../models/website.model.client';

// injecting service into module
@Injectable()

export class WebsiteServiceClient {
  constructor() {}

  websites: Website[] = [
    new Website(  '123',  'Facebook',     '456',  'Lorem' ),
    new Website(  '234',  'Tweeter',      '456',  'Lorem' ),
    new Website(  '456',  'Gizmodo',      '456',  'Lorem' ),
    new Website(  '890',  'Go',           '123',  'Lorem' ),
    new Website(  '567',  'Tic Tac Toe',  '123',  'Lorem' ),
    new Website(  '678',  'Checkers',     '123',  'Lorem' ),
    new Website(  '789',  'Chess',        '234',  'Lorem' )

  ];

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite,
  };

  createWebsite(userId: String, website: any) {
    website._id = (this.websites.length + 1).toString();
    website.websiteId = userId;
    this.websites.push(website);
  }

  findWebsitesByUser(userId: String) {
    const webs = [];
    for ( let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId ) {
        webs.push(this.websites[x]);
      }
    }
    return webs;
  }

  findWebsiteById(websiteId: String) {
    for ( let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === websiteId ) {
        return this.websites[x];
      }
    }
  }

  updateWebsite(websiteId: String, website: Website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x] = website;
        return website;
      }
    }
  }

  deleteWebsite(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        delete this.websites[x];
        return true;
      } else {
        return false;
      }
    }
  }


}
