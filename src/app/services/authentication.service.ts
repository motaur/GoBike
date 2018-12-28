import { url } from './../helpers/global-variables';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationService 
{
    url = 'http://localhost:57108/'
    
    constructor(private http: HttpClient) { }

  
    login(username: string, password: string) 
    {
        
        return this.http.post<any>(this.url + 'token', 'grant_type=password&username=' + username + '&password=' + password)
               
            .map(user => {
                // login successful if there's a jwt token in the response
                
                                
                if (user && user.access_token) 
                {                    
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    
                }

                return user;
              
            });
    }

    logout() 
    {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');

        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');

        return this.http.post<any>(this.url + 'Account/Logout', '')
    }
}
