import {Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit{
  @HostBinding('class.open') isOpen= false;
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;

  }
  constructor(private renderer: Renderer2, private elRef:ElementRef){
  }

  ngOnInit(){

  }

}
