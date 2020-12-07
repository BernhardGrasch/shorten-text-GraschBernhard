import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(text: string, limit: number): string {
    if (!text)
    {
      return null;
    }
    if (!limit)
    {
      limit = 20;
    }
    if (text.length <= 20)
    {
      return text;
    }

    return text.substring(0, limit - 3) + '....';
  }
}
