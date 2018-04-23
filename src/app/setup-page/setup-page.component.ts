import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit 
{
  size;

  constructor(private usersService: UsersService) { }

  ngOnInit() 
  {
    this.size = this.usersService.size;
  }

  onChange()
  {
    this.usersService.setSize(+this.size);
    alert("amount of users changed to " + this.size);
  }

}
