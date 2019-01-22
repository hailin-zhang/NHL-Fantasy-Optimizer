import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'hyphenate'
})
export class HyphenatePipe implements PipeTransform {
    transform(name: string): string {
        return name.split(' ').join('-');
    }
}
