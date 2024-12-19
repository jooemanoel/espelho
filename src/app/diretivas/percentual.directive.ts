
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPercentual]'
})
export class PercentualDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;

    // Remove caracteres não numéricos
    let value = input.value.replace(/[^0-9]/g, '');

    // Adiciona a vírgula antes dos últimos 2 dígitos
    if (value.length > 2) {
      value = value.slice(0, -2) + ',' + value.slice(-2);
    }

    // Converte para número decimal para validação
    const numericValue = parseFloat(value.replace(',', '.')) || 0;

    // Verifica se ultrapassa 100,00
    if (numericValue > 100) {
      // Remove o último dígito que causou o excesso
      value = value.replace(/[^0-9]/g, ''); // Remove vírgula temporariamente
      value = value.slice(0, -1); // Remove o último dígito
      if (value.length > 2) {
        value = value.slice(0, -2) + ',' + value.slice(-2); // Reaplica a vírgula
      }
    }

    input.value = value;
  }
}