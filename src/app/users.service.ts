import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService
{   
    size = 12;
    
    constructor(private http: Http)
    {
        
    }

    setSize(s)
    {
        this.size = s;
    }

    getUsers()
    {
       
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')  //get url ---> work with it - parsing

        .map    //full code: modification into to JS objects
        (
            function(response) 
            {
                return response.json();
            }    
        )   //short same code with => modification array results 
        .map(response=>response.results)
        .map(users =>   { return    users.map(u =>
                                    {
                                        return { 
                                            name: u.name.first + ' ' + u.name.last,  
                                            geo: u.location.state, 
                                            image:  u.picture.large
                                        } })
                                    })         
    }
}