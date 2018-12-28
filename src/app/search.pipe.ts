import { Pipe, PipeTransform, } from "@angular/core";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform
{
    transform(products, value) //get array of products and value for search
    {        
        return products.filter(product => 
        {
            return product.name.includes(value) //includes if value includes in prod.name
        })
    }
}