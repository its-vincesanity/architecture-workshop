import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'titlePipe'})
export class TitlePipe implements PipeTransform {
    transform(value: string): string {
        return value
            .toLowerCase()
            .replace(/(?:^|\s|\/|\-)\w/g, (match) => match.toUpperCase())
            .replace('-', ' ');
    }
}
