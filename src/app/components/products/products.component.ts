import { ProductService } from './../../services/product.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit 
{    
   searchStr = '';

    productForm = this.fb.group
    ({
        brand: [''],
        name: [''],
        price: [''],        
        quantity: [''],
        description: [''],
        image: [''],
                      
    });

    constructor(private fb: FormBuilder, private productService: ProductService, private userService: UserService) 
    { 
        
    }

    ngOnInit()
    {
       this.productService.getProducts()   
    }
    

    onAdd()
    {
        this.productService.addProduct(this.productForm.value).map(res=>res)        
        .subscribe
        (
            data => 
            {      
                alert("New product was added")  
                this.productService.products = data               
                                        
            },
            error => 
            {                
                //this.alertService.error(error);
                alert("Error, product was not added")                                
            }
        )
       
    }
     
}
