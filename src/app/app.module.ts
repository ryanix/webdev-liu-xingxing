import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';

import {UserServiceClient} from './services/user.service.client';
import {WebsiteServiceClient} from './services/website.service.client';
import {PageServiceClient} from './services/page.service.client';
import {WidgetServiceClient} from './services/widget.service.client';

import { SafePipe} from './Pipe/SafePip';

import {SortableDirective} from '../../assignment/directives/sortable.directive';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {FlickrServiceClient} from './services/flickr.service.client';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';

import { QuillEditorModule } from 'ngx-quill-editor';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,

    SafePipe,
    SortableDirective,
    FlickrImageSearchComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule,
  ],
  // Client Side services here
  providers: [
    TestService,
    UserServiceClient,
    WebsiteServiceClient,
    PageServiceClient,
    WidgetServiceClient,
    FlickrServiceClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
