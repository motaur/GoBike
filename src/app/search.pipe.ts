import { Pipe, PipeTransform, } from "@angular/core";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform
{
    transform(users, value) //get array of users and valaue for search
    {
        return users.filter(user => {
            return user.name.includes(value) //includes if value includes in user.name
        })
    }
}