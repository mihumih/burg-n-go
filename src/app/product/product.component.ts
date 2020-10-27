import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../types';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() isEven: number;
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
}
