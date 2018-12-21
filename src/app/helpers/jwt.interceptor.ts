import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor 
{  
    //previous implementation
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        //alert('I am INTERCEPTOR')
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
           
       
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.access_token}`
                }
            });
        }
       
        return next.handle(request);
    }


    //new implementation
  /*  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        alert('I am INTERCEPTOR')

        console.log("intercepted request ... ");

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.access_token) 
        {
            // Clone the request to add the new header.
            const authReq = req.clone({ headers: req.headers.set("Authorization",  currentUser.access_token)});
            console.log("Sending request with new header now ...");

            //send the newly created request
            return next.handle(authReq).catch((error, caught) => 
            {
                //intercept the respons error and displace it to the console
                console.log("Error Occurred");
                console.log(error);
                //return the error to the method that called it
                return Observable.throw(error);
            }) as any;
        }

        
    }*/
}