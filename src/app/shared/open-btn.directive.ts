import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOpenBtn]'
})
export class OpenBtnDirective {
    @HostBinding("class.open") isOpen:boolean = false;

    @HostListener('click') toggleOpen(){
        this.isOpen =!this.isOpen;
    }
    constructor() { }

}
