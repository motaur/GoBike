import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent
{   
    productForm = this.fb.group
    ({
        brand: [''],
        name: [''],
        price: [''],        
        quantity: [''],
        description: [''],
        image: [''],
                      
    });

    constructor(private fb: FormBuilder, private productService: ProductService) 
    { 
        
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
    }
        
     
}
