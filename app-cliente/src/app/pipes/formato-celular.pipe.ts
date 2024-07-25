import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoCelular'
})
export class FormatoCelularPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length === 11 && value.startsWith('569')) {
      return `+${value.slice(0, 3)} ${value.slice(3, 7)} ${value.slice(7)}`;
    }
    // Formato General Celulares sin 569
    return value.replace(/(\d{4})(\d{4})(\d{0,4})/, '$1 $2 $3').trim();
  }
}
