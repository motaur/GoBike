import { url } from './../helpers/global-variables';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService
{   
    products = []

    constructor(private http: HttpClient) {  }
   
    getProducts()
    {
        return this.http.get<any>(url + 'getBikes')      
        .subscribe
        (
            data => 
            {               
                this.products = data
                //this.userService.getUserInfo().subscribe(profile => {this.profileForm.patchValue(profile[0])});               
            },
            error => 
            {                
                //this.alertService.error(error);
                alert("Error, can't load products")                                
            }
        )   
    }
    
    addProduct(product)
    {
        return this.http.post<any>(url + 'addProduct', product);
    }

    deleteProd(id)
    {
        return this.http.get<any>(url + 'deleteProd?id=' + id)
    }
}