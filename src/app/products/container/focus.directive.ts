import {Directive, HostBinding, HostListener} from '@angular/core';


@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {
  @HostBinding('class.hovered') isFocus = false;

  @HostListener('click') onFocusClick(){
    if (this.isFocus === false) {
      this.isFocus = true;
    } else {
      this.isFocus = false;
    }
  }
}
