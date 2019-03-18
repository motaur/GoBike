import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit 
{    
    columns
    orders   

    profileForm = this.fb.group
    ({
        username: [''],
        firstName: [''],
        lastName: [''],        
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
        telephone: ['']                
    });         
    
    constructor(private fb: FormBuilder, private userService: UserService) { }
        
    ngOnInit() 
    {
        this.userService.getUserInfo().subscribe(profile => 
        {
            this.profileForm.patchValue(profile[0])
            this.userService.getOrdersByUser().subscribe(orders => {this.orders = Observable.of(orders)})
        })
        
        this.columns = this.userService.getOrderColumns()
        
    }  

    onUpdate() 
    {
        this.userService.updateProfile(this.profileForm.value).map(res=>res)        
        .subscribe
        (
            data => 
            {      
                alert("Details updated")
                //this.userService.getUserInfo().subscribe(profile => {this.profileForm.patchValue(profile[0])});               
            },
            error => 
            {                
                //this.alertService.error(error);
                alert("Error, details not updated")                                
            }
        )               
    }

    logout()
    {        
        this.userService.logout().subscribe(response => {response; alert("Logged out"); localStorage.removeItem('currentUser')}, 
        error=>{error; alert("error")})        
    }
}
