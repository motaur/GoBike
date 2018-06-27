import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent 
{
  cartSize = 0;

  constructor(private serv: ApiService){}

  ngOnInit() 
  {
      this.cartSize = this.serv.prods.length;
  }
    
}
