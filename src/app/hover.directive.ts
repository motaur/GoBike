import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appHover]'
})
export class HoverDirective
{
    @HostBinding('class.hovered') isHovered = false; // work when is hovered true, add to <> DOM element class = "hovered", that we describe his style in css

    @HostListener('mouseenter') onMouseEnter()
    {
        this.isHovered = true;
    }

    @HostListener('mouseleave') onMouseLeave()
    {
        this.isHovered = false;
    }
}