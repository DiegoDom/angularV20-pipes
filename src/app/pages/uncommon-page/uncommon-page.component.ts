import { Component, signal } from '@angular/core';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';

const client1 = {
  name: 'Diego',
  gender: 'male',
  age: 29,
  address: 'Guadalajara, Mexico',
};

const client2 = {
  name: 'Mine',
  gender: 'female',
  age: 28,
  address: 'Zapopan, Mexico',
};

@Component({
  selector: 'uncommon-page',
  imports: [
    AsyncPipe,
    CardComponent,
    I18nPluralPipe,
    I18nSelectPipe,
    JsonPipe,
    KeyValuePipe,
    SlicePipe,
    TitleCasePipe,
    UpperCasePipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //? i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'Mr.',
    female: 'Ms.',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  //? i18n Plural
  clients = signal([
    'John',
    'Lau',
    'Chris',
    'Donna',
    'Cam',
    'Val',
    'Louis',
    'Carl',
    'Violet',
    'Mary',
  ]);

  clientsMap = signal({
    '=0': 'There are no more customers waiting',
    '=1': 'There are one customer waiting',
    '=2': 'There are a couple of customers waiting',
    other: 'There are # customers waiting',
  });

  passTurn() {
    this.clients.update((prev) => prev.slice(1));
  }

  //? KeyValue Pipe
  profile = {
    name: 'Diego',
    age: 29,
    address: 'Guadalajara, Mexico',
  };

  //? Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('The promise have been solved');
    }, 1500);
  });

  myObservableTimer = interval(1500).pipe(
    map((value) => value + 1),
    tap((value) => console.log(`tap: ${value}`))
  );
}
