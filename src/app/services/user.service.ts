import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { url } from './../helpers/global-variables';

@Injectable()
export class UserService 
{
    users   
    public currentUser;
        
    constructor(private http: HttpClient) { }

   
    getUsers()
    {
        return this.http.get<any>(url + 'getUsers')
            .map  
            (
                function(response) 
                {                
                    return response
                }

            )
    }

    getUserColumns(): string[]
    {
        return ['Id', 'Email', 'UserName', 'PhoneNumber'];
    }

    getOrderColumns(): string[]
    {
        return ['id', 'sum', 'date', 'status'];
    }

    updateProfile(model)
    {
        return this.http.post(url + 'Account/UpdateProfile', model);
    }
    
   
    getUserInfo()
    {        
        return this.http.get(url + 'Account/UserInfo').map  
        (
            function(response) 
            {                          
                return response
            }    
        )          
    }

    create(user: User) 
    {  
       return this.http.post(url + 'Account/Register', user);
    }

    getRole()  
    {   
        //roles based on names im front part only
        let role = 'unauthorized'

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (currentUser && currentUser.access_token) 
        {
            role = 'user'     
                    
            if(currentUser.userName=='admin')
                role = 'admin'
        }        

        return role;
    }

    getOrdersByUser()
    {
        return this.http.get(url + 'Account/getOrdersByUser').map  
        (
            function(response) 
            {                           
                return response
            }    
        )          
    }    
   
    delete(id: number) 
    {
        return this.http.delete('/api/users/' + id);
    }

    logout()
    {
        return this.http.post(url + 'Account/Logout', "").map(response=>{response})
    }
}
