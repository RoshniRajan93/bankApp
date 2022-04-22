import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private el:ElementRef) { 
    console.log(el);
    el.nativeElement.style.backgroundColor="#FFC312"
    el.nativeElement.style.color="black"
  }

}
