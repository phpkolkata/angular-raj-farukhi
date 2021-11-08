import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit',
})
export class LimitPipe implements PipeTransform {
  transform(value: any, limit: number) {
    return value.substr(0, limit) + '...';
  }
}
