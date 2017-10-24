import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import { User } from '../models/user.model.client';

// injecting service into module
@Injectable()

export class UserServiceClient {
  constructor(private http: Http) {}

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUserName' : this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
  };

  createUser(user: any) {
    const url = 'http://localhost:3100/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: string) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByUsername(username: string) {
    const url = 'http://localhost:3100/api/user/?username=' + username;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByCredentials(username: String, password: String) {
    const url = 'http://localhost:3100/api/user/?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateUser(userId, user) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.put(url, user)
      .map((res: Response) => {
        return res.json();
      });
  }
  deleteUser(userId) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
