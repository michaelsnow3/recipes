import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') showMenu = false;

  @HostListener('click') toggleDropdown(eventData: Event) {
    this.showMenu = !this.showMenu;
  }
}
