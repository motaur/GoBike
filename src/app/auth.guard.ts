import { UserService } from './services/user.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    {
        if (localStorage.getItem('currentUser')) 
        {
            let component = route.data['route']

            if(component=='profile')
                return true
            else if (component=='admin')
            {
                if(this.userService.getRole()=='admin')
                    return true
                else
                    this.router.navigate(['/forbidden'], { queryParams: { returnUrl: state.url }});
                    return false
            }
            else
                this.router.navigate(['/forbidden'], { queryParams: { returnUrl: state.url }});
                return false
            
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}