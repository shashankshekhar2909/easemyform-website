import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EaseMyForm';

  ngAfterViewInit() {
    const ads = document.getElementsByClassName('adsbygoogle');
    for (let i = 0; i < ads.length; i++) {
      try {
        (window as { [key: string]: any })['adsbygoogle'] = (window as { [key: string]: any })['adsbygoogle'] || [];
        (window as { [key: string]: any })['adsbygoogle'].push({});
      } catch (e) {
        console.error('Error loading Google AdSense:', e);
      }
    }
  }
}
