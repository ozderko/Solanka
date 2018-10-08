import {Directive, HostBinding, HostListener} from '@angular/core';


@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  isClick = false;
  @HostBinding('class.hovered') isHovered = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.isClick === false) {
      this.isHovered = false;
    }
  }

  @HostListener('click') onMouseClick() {
    if (this.isClick === false) {
      this.isHovered = true;
      this.isClick = true;
    } else if (this.isHovered === true && this.isClick === true) {
      this.isHovered = false;
      this.isClick = false;
    }
  }


}
