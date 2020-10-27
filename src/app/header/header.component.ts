import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  scrollTo(event, target: string) {
    event.preventDefault();

    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  toggleIsMenuOpen(state: boolean) {
    this.isMenuOpen = state;
  }
}
