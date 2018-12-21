import { CartService } from '../../services/cart.service';
import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent 
{
    @Input() product; 

    quantity = 1
    
    constructor(private cart: CartService)  
    { 
       
    }

    onClick()
    {   
        
        this.cart.setCartProd(this.product, this.quantity);
    }

    remove()
    {
        this.quantity--
    }

    add()
    {
        this.quantity++
    }
  
}



  
