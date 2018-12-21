import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService} from '../../services/alert.service';
import { UserService} from '../../services/user.service';
import 'rxjs/add/operator/map'



@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent 
{    
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() 
    {
        this.loading = true;
      
        this.userService.create(this.model).map(res=>res)
        
            .subscribe
            (
                data => 
                {
                    
                    alert("Registration successful")
                    // this.alertService.success('Registration successful', true);
                    this.loading = false;                   
                    this.router.navigate(['/profile']);
                },
                error => 
                {
                    
                    //this.alertService.error(error);
                    alert("Error, user was not registered")
                    this.loading = false;
                    
                }
            )
            
    }
   
}
