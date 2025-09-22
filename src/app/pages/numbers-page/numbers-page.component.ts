import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'numbers-page',
  imports: [CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {
  totalSells = signal(2_433_232.5567);
  percent = signal(0.4856);
}
