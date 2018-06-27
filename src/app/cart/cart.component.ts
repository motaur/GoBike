import { ApiService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent 
{
  constructor(private api:ApiService) 
  {
    
  }


}
