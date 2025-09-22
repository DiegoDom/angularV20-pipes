import { Injectable, signal } from '@angular/core';

export type Locale = 'es' | 'en' | 'fr';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocale = signal<Locale>('en');

  constructor() {
    this.currentLocale.set((localStorage.getItem('locale') as Locale) ?? 'en');
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: Locale) {
    console.log({ locale });
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
