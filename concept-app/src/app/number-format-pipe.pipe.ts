import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormatPipe'
})
export class NumberFormatPipePipe implements PipeTransform {

  transform(value: number): string {
    const s = value.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    return s;
  }

}
