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
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  dateCreated: Date;
  errorFlag: boolean;
  errorMsg = 'username already exists!';


  constructor(private userService: UserServiceClient, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.userService.findUserByUsername(this.registerForm.value.username)
      .subscribe((user: User) => {
        const u = user;
        if (Object.getOwnPropertyNames(u).length > 1) {
          this.errorFlag = true;
        } else {
          const nuser = new User(
            this.registerForm.value.username,
            this.registerForm.value.password
          );
          nuser.firstName = this.firstName;
          nuser.lastName = this.lastName;
          nuser.email = this.email;
          nuser.phone = this.phone;
          nuser.websites = [];
          nuser.dateCreated = new Date();
          this.userService.createUser(nuser)
            .subscribe( (nu: User) => {
                if (nu) {
                  this.router.navigate([`/user/${nu._id}`]);
                }
            });
        }
      });
  }
}
