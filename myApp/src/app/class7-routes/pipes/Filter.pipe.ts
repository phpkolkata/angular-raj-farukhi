import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], filter: { name: string }): any {
    // console.log('data', data);
    // data.filter((item) => {
    //   return item.name.indexOf(filter.name) != -1;
    // });
    return data.filter((item) => {
      if (item.name.indexOf(filter.name) !== 0) {
        console.log(item);
        return true;
      }
      return false;
    });
  }
}
