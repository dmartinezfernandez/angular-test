import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {

  constructor(element: ElementRef) {
    console.log(element);
    const color = 'PaleGoldenRod';
    const padding = '10px';
    element.nativeElement.style.background = color;
    element.nativeElement.style.padding = '10px';
    element.nativeElement.title = `A custom directive (${color} background + padding ${padding} + title).`;
  }

}
