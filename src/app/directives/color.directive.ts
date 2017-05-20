import { Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  /*@HostBinding('style.backgroundColor') bgColor: string = 'transparent';
  @HostBinding('offsetTop') offst: number = 0;*/


  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    /*this.render.setStyle(this.elRef.nativeElement, 'background-color', 'red');*/
    this.render.setStyle(this.elRef.nativeElement, 'min-height', '200px');
  }

  @HostListener('window:scroll', ['$event'])
  mouseover(eventData: Event) {
    /*this.render.setStyle(this.elRef.nativeElement, 'background-color', 'red');*/
    /*this.bgColor = 'red';*/
    const max = 300;
    const top = this.elRef.nativeElement.getBoundingClientRect().top;
    if (top > 50 && top < max + 50) {
      this.elRef.nativeElement.style.height = max - (top * 0.3) + 'px';
    }
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    /*this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');*/
    /*this.bgColor = 'transparent';*/
  }
}
