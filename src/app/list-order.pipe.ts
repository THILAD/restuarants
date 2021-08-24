import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listOrder'
})
export class ListOrderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
