import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit 
{    
    products = [];

    searchStr = '';

    constructor(private apiService: ApiService)  { }

    ngOnInit()
    {
       this.apiService.getProducts().subscribe(products => {this.products = products});
    }
       

}
