import { CartService } from '../../services/cart.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit
{
  constructor(private cart: CartService, private router: Router,) 
  {
    
  }
 
  getSum()
  {
       let sum = 0;

      this.cart.prods.forEach(function (p) 
      {
          sum += p.price * p.quantity;
      }); 

      return sum;
  }

  ngOnInit()
  {  
      //update list of products
       this.cart.getProds()      
  }

  onBuy()
  {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.access_token) 
        this.cart.createOrder(this.getSum())
    else
    {
        alert("Please, log in!")
        this.router.navigate(['/login']);
    }       

  }

}
