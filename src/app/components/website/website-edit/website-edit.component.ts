import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteServiceClient} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') editWebForm: NgForm;

  userId: String;
  webId: String;
  websites: Website[];
  website: Website;
  errorFlag: boolean;
  errorMsg = 'Name is required!';

  constructor(private router: Router, private route: ActivatedRoute, private webService: WebsiteServiceClient) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.website = this.webService.findWebsiteById(this.webId);
      this.websites = this.webService.findWebsitesByUser(this.userId);
    });
  }

  updateWebSite() {
    if (this.editWebForm.value.name.length > 0) {
      this.errorFlag = false;
      this.website.name = this.editWebForm.value.name;
      this.website.description = this.editWebForm.value.description;
      this.webService.updateWebsite(this.website._id, this.website);
      this.router.navigate([`/user/${this.userId}/website`]);
    } else {
      this.errorFlag = true;
    }
  }

  deleteWebsite() {
    this.webService.deleteWebsite(this.webId);
    this.router.navigate([`/user/${this.userId}/website`]);
  }

  refresh() {
    this.errorFlag = false;
  }

}
