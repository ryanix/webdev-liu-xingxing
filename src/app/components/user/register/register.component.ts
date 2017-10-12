import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserServiceClient} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'username already exists!';


  constructor(private userService: UserServiceClient, private router: Router) { }

  ngOnInit() {
  }

  register() {
    const user: User = this.userService.findUserByUsername(this.registerForm.value.username);
    if (user) {
      this.errorFlag = true;
    }else {
      const nuser = new User(
        (this.userService.users.length + 1).toString(),
        this.registerForm.value.username,
        this.registerForm.value.password
      );
      this.userService.createUser(nuser);
      this.router.navigate([`/user/${nuser._id}`]);
    }
  }
}
