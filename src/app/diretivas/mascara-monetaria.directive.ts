import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMascaraMonetaria]'
})
export class MascaraMonetariaDirective {
  private readonly regex: RegExp = /^[0-9]*$/;

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/[^0-9]/g, '');

    if (value.length > 2) {
      value = value.slice(0, -2) + ',' + value.slice(-2);
    }

    input.value = value;
  }
}
