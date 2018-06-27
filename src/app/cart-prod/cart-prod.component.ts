import { ApiService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-prod',
  templateUrl: './cart-prod.component.html',
  styleUrls: ['./cart-prod.component.css']
})
export class CartProdComponent implements OnInit {
  
  @Input() product;
  
  constructor(private serv: ApiService) { }

  ngOnInit() 
  {
  }

  onDelete()
  {
      this.serv.del(this.product);
               
  }

}
