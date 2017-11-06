import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserServiceClient} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: String;
  user: User;
  sucFlag: Boolean;
  errFlag: Boolean;

  constructor(private route: ActivatedRoute, private userService: UserServiceClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId.toString())
        .subscribe((user: User) => {
          if (user) {
            this.user = user;
          }
        });
    });
  }

  update() {
    this.userService.updateUser(this.userId, this.user)
      .subscribe((user: User) => {
        if (user) {
          this.sucFlag = true;
          this.errFlag = false;
        } else {
          this.sucFlag = false;
          this.errFlag = true;
        }
      });
  }

}
