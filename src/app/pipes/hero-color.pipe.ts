import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'herocolor',
})
export class HeroColorPipe implements PipeTransform {
  transform(value: Color): string {
    return ColorMap[value];
  }
}
