import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === "all") return value;
    if (args === "done") return value.filter((v) => v.isDone === true);
    if (args === "not done") return value.filter((v) => v.isDone !== true);
  }
}
