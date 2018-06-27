import { CartComponent } from './cart/cart.component';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService
{     
    prods = [];
            
    constructor(private http: Http) {  }
   
    getProducts()
    {
        return this.http.get('http://localhost:61849/api/getBikes').map  
        (
            function(response) 
            {
                console.log( response.json())
                return response.json();
            }    
        )   
    } 

    setCartProd(prod: any)
    {     
        this.prods.push(prod);                           
    }

    del(prod: any)
    {
        /*the problem is that is remove all elements with this name, 
        so if user chose couple products with same name,
         and remove one, it will remove all of them*/
        this.prods = this.prods.filter(p => p.name !== prod.name);
        
    }

    getSum()
    {
         let sum = 0;

        this.prods.forEach(function (p) 
        {
            sum += p.price;
        }); 

        return sum;
    }

   /* removeItemFromCart(item){
    let index: number = this.cart.indexOf(item);
    this.cart.splice(index, 1);
    this.amounts.splice(index,1);
    this.amount-=1;
  }*/

   /* getUsers()
    {
       
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')  //get url ---> work with it - parsing

        .map    //full code: modification into to JS objects
        (
            function(response) 
            {
                return response.json();
            }    
        )   //short same code with => modification array results 
        .map(response=>response.results)
        .map(users =>   { return    users.map(u =>
                                    {
                                        return { 
                                            name: u.name.first + ' ' + u.name.last,  
                                            geo: u.location.state, 
                                            image:  u.picture.large
                                        } })
                                    })         
    }*/
}