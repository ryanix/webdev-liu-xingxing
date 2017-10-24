import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({name: 'safe'})

export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url) {
    let new_url = '';
    if (url.indexOf('youte.be')) {
      const feature = url.split('/').slice(-1);
      new_url = 'https://www.youtube.com/embed/' + feature;
    } else {
      new_url = url;
    }
    console.log(url, new_url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(new_url);
  }
}
