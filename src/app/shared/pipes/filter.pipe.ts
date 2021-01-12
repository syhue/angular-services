import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, PropName: string): unknown {
    if (value.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {      
      if (item[PropName] === filterString ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
