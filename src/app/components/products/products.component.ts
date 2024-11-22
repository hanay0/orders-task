import { Component, inject, OnInit } from '@angular/core';
import { OrdersService } from '../../services/products.service';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  constructor() {}
  private ordersService = inject(OrdersService);
  products: Product[] = [];

  ngOnInit(): void {
      this.ordersService.getProducts().subscribe(res => {
        console.log(res);
        this.products = res
      })
  }
}
