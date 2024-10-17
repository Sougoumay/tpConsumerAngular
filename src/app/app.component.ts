import { Component, inject } from '@angular/core';
import { DemoObservableService } from './common/demo-observable.service';
import { map, Observable, take } from 'rxjs';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularCRM-19';
  private demoObs = inject(DemoObservableService);

  myObservable: Observable<number>;

  constructor() {
    this.myObservable = this.demoObs.getObservable()
    .pipe(
        map((x) => x * 10), // Transformation of the result
      )}

  clicked(label: string) {
    console.log('The button was clicked', label);
  }
}
