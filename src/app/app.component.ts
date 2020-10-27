import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  scrollTo(event, target: string) {
    event.preventDefault();

    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
