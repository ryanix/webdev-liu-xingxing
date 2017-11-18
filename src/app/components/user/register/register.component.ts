import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserServiceClient} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

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


  constructor(
    private userService: UserServiceClient,
    private router: Router,
    private sharedService: SharedService) { }

  ngOnInit() {
  }

  register() {
    this.userService.findUserByUsername(this.registerForm.value.username)
      .subscribe((user: User) => {
        if (user) {
          this.errorFlag = true;
        } else {
          this.errorFlag = false;
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
          this.userService.register(nuser)
            .subscribe( (nu: User) => {
                if (nu) {
                  this.sharedService.user = nu;
                  this.router.navigate([`/profile`]);
                }
            });
        }
      });
  }
}
