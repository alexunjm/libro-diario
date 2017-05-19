import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = 'blue';
  }
}
