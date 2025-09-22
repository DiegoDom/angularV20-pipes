import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'herohouse',
})
export class HeroHousePipe implements PipeTransform {
  transform(value: number): string {
    return Creator[value];
  }
}
