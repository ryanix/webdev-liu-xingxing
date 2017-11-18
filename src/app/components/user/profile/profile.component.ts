import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserServiceClient} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  sucFlag: Boolean;
  errFlag: Boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceClient,
    private router: Router,
    private sharedService: SharedService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.sharedService.user;
      // this.userService.findUserById(this.user._id)
      //   .subscribe((user: User) => {
      //     if (user) {
      //       this.user = user;
      //     }
      //   });
    });
  }

  logout() {
    this.userService.logout()
      .subscribe( (data: any) => {
        this.router.navigate(['/login']);
      });
  }

  update() {
    this.userService.updateUser(this.user._id, this.user)
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
