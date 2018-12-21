import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService, private user: UserService) { }

    ngOnInit() 
    {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() 
    {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
               data => {
                            
                            alert('Logged in successfully')
                            this.loading = false; 
                            this.router.navigate([this.returnUrl]);
                            
                        },
                error => {
                            console.log(error)
                           // this.alertService.error(error);
                            alert('Failed to Log In: ' + error.error.error_description)
                            this.loading = false; 
                            
                        }
            )
         
       
    }
}