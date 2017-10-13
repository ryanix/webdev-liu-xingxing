import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteServiceClient} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') addWebForm: NgForm;

  userId: String;
  websites: Website[];
  website: Website;
  errorFlag: boolean;
  errorMsg = 'Name is required for a new website';

  constructor(private router: Router, private route: ActivatedRoute, private webService: WebsiteServiceClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websites = this.webService.findWebsitesByUser(this.userId);
    });
  }

  addWebsite() {
    if (this.addWebForm.value.name.length > 0) {
      this.errorFlag = false;
      const web = new Website (
        1,
        this.addWebForm.value.name,
        this.userId,
        this.addWebForm.value.description
      );
      this.webService.createWebsite(this.userId, web);
      this.router.navigate([`/user/${this.userId}/website`]);
    } else {
      this.errorFlag = true;
    }
  }
}
