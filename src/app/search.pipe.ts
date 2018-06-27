import { Pipe, PipeTransform, } from "@angular/core";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform
{
    transform(product, value) //get array of users and value for search
    {
        return product.filter(product => 
        {
            return product.name.includes(value) //includes if value includes in user.name
        })
    }
}