import {Component, Input} from '@angular/core';

@Component
({
    selector: 'app-user',
    templateUrl:'./user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent
{
    @Input() user; // [user] in html
    isMarked = false;

    onClick()
    {
        if (!this.isMarked)
            this.isMarked = true;
            
        else if(this.isMarked)
            this.isMarked = false;

    }
}