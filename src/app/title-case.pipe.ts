import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {

    let words: string[] = value.split(' ');

    let prepositions = ['of', 'the'];

    for (let i = 0; i < words.length; i++) {
      if (prepositions.includes(words[i]) && i != 0) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
    }

    return words.join(' ');
  }

}
