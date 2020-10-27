import { Component, OnInit } from '@angular/core';
import { ProductsCategory } from '../types';
import { ProductsService } from '../products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  menu: ProductsCategory[] = [];
  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((menu) => {
      this.menu = menu;
    });
  }
}
