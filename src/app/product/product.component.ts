import { ApiService } from './../api.service';
import { CartComponent } from './../cart/cart.component';
import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent 
{
    @Input() product; 
    isMarked = false;

    constructor(private api: ApiService)  
    { 
        //this.api.onClick.subscribe(prod=>this.products.push(prod));
    }

  
    
    onClick()
    {
      // TO DO adding to cart
       /* if (!this.isMarked)
        {
            this.isMarked = true;

        }    
            
        else if(this.isMarked)
            this.isMarked = false;*/

           // this.cart.add(this.product);

           this.api.setCartProd(this.product);

        

    }
  
}



  
