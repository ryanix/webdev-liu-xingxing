import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { SharedService } from './shared.service';
import { Router} from '@angular/router';
import { User } from '../models/user.model.client';

// injecting service into module
@Injectable()


export class UserServiceClient {
  constructor(
    private http: Http,
    private router: Router,
    private sharedService: SharedService,
    ) {}

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUserName' : this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
  };

  login(username: String, password: String) {
    this.options.withCredentials = true;

    const body = {
      username: username,
      password: password,
    };

    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  register(user) {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/register', user, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post('/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if ( user !== 0 ) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (status) => {
          return status;
        }
      );
  }

  createUser(user: any) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByUsername(username: string) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByCredentials(username: String, password: String) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateUser(userId, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map((res: Response) => {
        return res.json();
      });
  }
  deleteUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
