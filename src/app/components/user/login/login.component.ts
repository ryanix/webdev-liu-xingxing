import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceClient} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserServiceClient, private router: Router) { }

  login() {
    // alert(username + ' ' + password);
    const user: User = this.userService.findUserByCredentials(this.loginForm.value.username, this.loginForm.value.password);
    if (user) {
      this.router.navigate([`/user/${user._id}`]);
    }else {
      this.errorFlag = true;
    }
  }
  ngOnInit() {
  }

}
