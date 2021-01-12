import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'shorten',
})

export class ShortenPipe implements PipeTransform{
    transform(value: any, limit: number) {
        if (value.length > limit && value.length < 20){
            return value.substr(0,limit) + '.';
        }
        else if (value.length >= 20 ){
            return `${value.substr(0, limit)}...`;
        }
        return value;
    }
}