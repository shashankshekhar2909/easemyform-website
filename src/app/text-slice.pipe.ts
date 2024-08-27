import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSlice'
})
export class TextSlicePipe implements PipeTransform {

  transform(value: string, charLimit: number): string {
    if (!value || value.length <= charLimit) return value;

    return value.slice(0, charLimit) + '...';
  }

}
