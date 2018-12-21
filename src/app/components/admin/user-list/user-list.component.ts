import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  columns
  users
  
  
  constructor(private userService: UserService) { }

  ngOnInit() 
  {
    this.columns =  this.userService.getUserColumns();
    this.userService.getUsers().subscribe(users =>{this.users = Observable.of(users)})    
  }


}
