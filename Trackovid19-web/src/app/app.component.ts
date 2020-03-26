import { Component, Renderer2, Inject } from '@angular/core';
import { GeolocalizationService } from './shared/services/geolocalization.service';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Trackovid19-web';
  constructor(
    geolocalizationService: GeolocalizationService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
  ) {
    //geolocalizationService.geoFindMe()

    // Init Facebook SDK
    const s = this.renderer2.createElement('script');
    s.src = `https://connect.facebook.net/pt_PT/sdk.js#version=v6.0&appId=${environment.facebookAPI}&xfbml=true&autoLogAppEvents=true`;
    this.renderer2.setProperty(s, 'async', 'true');
    this.renderer2.setProperty(s, 'defer', 'true');

    this.renderer2.appendChild(this._document.body, s);
  }
}
