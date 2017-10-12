import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import { User } from '../models/user.model.client';

// injecting service into module
@Injectable()

export class UserServiceClient {
  constructor() {}

  users: User[] = [
    new User('123',  'alice',     'alice',     'Alice',   'Wonder'  ),
    new User('234',  'bob',       'bob',       'Bob',     'Marley'  ),
    new User('345',  'charly',    'charly',    'Charly',  'Garcia'  ),
    new User('456',  'jannunzi',  'jannunzi',  'Jose',    'Annunzi' ),
  ];

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUserName' : this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
  };

  createUser(user: any) {
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  return this.users[x]; }
    }
  }

  findUserByUsername(username: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  findUserByCredentials(username: String, password: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x];
      }
    }
  }

  updateUser(userId, user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x] = user;
        return user;
      }
    }
  }
  deleteUser(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        delete this.users[x];
        return true;
      }
    }
  }
}
