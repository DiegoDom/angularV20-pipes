import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { heroes } from '../../../data/heroes.data';
import { HeroHousePipe } from '../../pipes/hero-house.pipe';
import { HeroSortPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroHousePipe, HeroSortPipe, HeroFilterPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Diego Domínguez');
  uppercase = signal<boolean>(false);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

  toggleUpperCase(): void {
    this.uppercase.update((c) => !c);
  }
}
