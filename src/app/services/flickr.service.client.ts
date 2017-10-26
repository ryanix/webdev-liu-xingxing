import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';

@Injectable()

export class FlickrServiceClient {
  key = 'e58531f86c17213a0631ea2be4e334c2';
  secret = 'a66c01b708c9a594';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';


  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }

}
