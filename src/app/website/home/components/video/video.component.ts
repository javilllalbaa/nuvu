import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  safeUrl;
  videoSource = "https://www.youtube.com/embed/QFlVNtGJVDU?autoplay=1&start=20&end=56&loop=1&controls=1&disablekb=1&showinfo=0"

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoSource);    
  }

}
