import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit 
{    
    products = [];

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
       this.productService.getProducts().subscribe(products => {this.products = products});   
    }
    

    onAdd()
    {
        this.productService.addProduct(this.productForm.value).map(res=>res)        
        .subscribe
        (
            data => 
            {      
                alert("New product was added")
                //this.userService.getUserInfo().subscribe(profile => {this.profileForm.patchValue(profile[0])});               
            },
            error => 
            {                
                //this.alertService.error(error);
                alert("Error, product was not added")                                
            }
        )

        this.ngOnInit()
    }
        
     

    

    
}
