import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
yt_iframe_html: any; 

youtubeUrl = "https://www.youtube.com/watch?v=VEQaH4LruUo";

 constructor(
    private embedService: EmbedVideoService
  ) {
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl);
}
}