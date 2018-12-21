import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { CartService } from './services/cart.service';



@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CartService]
})
export class AppComponent 
{ 

  constructor(private cart: CartService, private userService: UserService ){}

  ngOnInit() 
  {
    //<!----*ngIf="userService.roleMatch(['Admin'])"--->
  }
    
}
