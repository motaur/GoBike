import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService
{     
    url = 'http://localhost:57108/api/'   

    constructor(private http: HttpClient) {  }
   
    getProducts()
    {
        return this.http.get<any>(this.url + 'getBikes').map  
        (
            function(response) 
            {                
                return response
            }    
        )   
    }
    
    addProduct(product)
    {
        return this.http.post(this.url + 'addProduct', product);
    }
}