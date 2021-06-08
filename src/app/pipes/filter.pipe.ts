import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCompleted'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return value.filter((todo) => todo.completed === "done");
  }

}
