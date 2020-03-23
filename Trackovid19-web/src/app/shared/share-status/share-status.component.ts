import { Component, OnDestroy, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-status',
  templateUrl: './share-status.component.html',
  styleUrls: ['./share-status.component.scss'],
})
export class ShareStatusComponent implements OnInit {
  @Input('showShare') showShare = false;
  @Input() closable = true;
  closed = new EventEmitter();

  public closing = false;
  router: Router;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit(): void {
    //this.loadUser();
  }

  ngOnDestroy(): void {}

  public open() {
    setTimeout(() => {
      this.showShare = true;
    }, 500);
  }

  public close() {
    // TODO: Emit event
    this.closing = true;
    setTimeout(() => {
      this.showShare = false;
      this.closing = false;
      this.closed.emit();
    }, 500);
  }

  shareFacebook() {
    var facebookWindow = window.open(
      'https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/embed/Iw9koAS7h_Y',
      'facebook-popup',
      'height=350,width=600',
    );
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }

  shareTwitter() {
    var twitterWindow = window.open(
      'https://twitter.com/intent/tweet?via=covidografia&url=https://www.youtube.com/embed/Iw9koAS7h_Y',
      'height=350,width=600',
    );
    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
    return false;
  }

  shareLinkedIn() {
    var linkedinWindow = window.open(
      'https://www.linkedin.com/sharing/share-offsite/?url=https://www.youtube.com/embed/Iw9koAS7h_Y',
      'height=350,width=600',
    );
    if (linkedinWindow.focus) {
      linkedinWindow.focus();
    }
    return false;
  }
}
