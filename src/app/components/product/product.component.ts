import { ProductService } from './../../services/product.service';
import { UserService } from './../../services/user.service';
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
    
    constructor(private cart: CartService, private productService: ProductService, private userService: UserService)  
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

    onDelete()
    {
        this.productService.deleteProd(this.product.id).map(res=>res)        
        .subscribe
        (
            data => 
            {      
                alert("The product was removed")
                        
            },
            error => 
            {                
                //this.alertService.error(error);
                alert("Error, product was not removed")                                
            }
        )

    }

    
  
}



  
