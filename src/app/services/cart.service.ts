import { HttpClient  } from '@angular/common/http';
import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService 
{     
    prods = [];
    url = 'http://localhost:57108/api/'
            
    constructor(private http: HttpClient) {  }

    //remove prod from cart
    del(prod: any)
    {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
           
        if (currentUser && currentUser.access_token) 
        {
            this.http.get<any>(this.url + 'deleteProdFromCart?user=' + currentUser.userName + '&productID=' + prod.id)
            .map  
            (
                function(response) 
                {                
                    return response
                }

            ).subscribe(prods =>{this.prods = prods})            
          
        }
        else //for unauthorized
        {
            this.prods = this.prods.filter(p => p.name !== prod.name)
            localStorage.setItem('cart', JSON.stringify(this.prods))
        }   
       
    }

    //get prods from cart by current user
    getProds()
    {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         
        //for authorized user get cart from DB
        if (currentUser && currentUser.access_token) 
        {
           this.http.get<any>(this.url + 'getCartProds?user=' + currentUser.userName)
           .map  
            (
                function(response) 
                {                
                    return response
                }
            ).subscribe(products => {this.prods = products}) 
      
        }
        else //for unauthorized get cart from local storage
            this.prods = JSON.parse(localStorage.getItem('cart'))

        return this.prods
        
    }

    //add prod to cart of current user
    setCartProd(prod: any, quantity: any)
    {   
         //not in cart, then check user
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         
        //for authorized user
        if (currentUser && currentUser.access_token) 
        {    
            this.http.get<any>(this.url + 'addProdToCart?user=' + currentUser.userName + '&productID=' + prod.id + '&quantity=' + quantity)
            .map  
            (
                function(response) 
                {                
                    return response
                }

            ).subscribe(products => {this.prods = products}) 

            alert(prod.name + " added in your cart")
               
              
        }
        else //for unauthorized
        {             
            this.prods.push(prod)
            localStorage.setItem('cart', JSON.stringify(this.prods))
            alert(prod.name + ' added in to your cart, id: ' + prod.id)
        }     
                                              
    }

    //create order for current user from products in the cart
    createOrder(sum)
    {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.access_token) 
        {
           this.http.get<any>(this.url + 'createOrder?username=' + currentUser.userName + '&summ=' + sum)
           .map  
            (
                function(response) 
                {                
                    return response
                }
            )
            .subscribe(order => { console.log(order);
                                    alert('New order number ' + order[0].id + ' created successfully')
                                    //clear the cart          
                                    this.prods = []   
                                }
                      )
                     
            
      
        }
        else
            alert("Please log in")                  

    }
}