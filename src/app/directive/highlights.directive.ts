import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private el:ElementRef) { 
    console.log(el);
    el.nativeElement.style.backgroundColor="yellow"
    el.nativeElement.style.color="black"
  }

}
