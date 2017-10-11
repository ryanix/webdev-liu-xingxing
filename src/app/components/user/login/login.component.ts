import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceClient} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  constructor(private userService: UserServiceClient, private router: Router) { }

  login(username: String, password: String) {
    // alert(username + ' ' + password);
    const user: User = this.userService.findUserByUsername(username.toString())
    if (user) {
      this.router.navigate([`/user/:${user._id}`]);
    }
  }
  ngOnInit() {
  }

}
