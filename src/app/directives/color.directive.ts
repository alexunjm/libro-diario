import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

}
