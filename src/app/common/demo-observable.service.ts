import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoObservableService {

  constructor() { }

  getObservable(): Observable<number> {
    return new Observable<number>((subscriber: Subscriber<number>) => {
      // Send results
      setTimeout(() => {
        subscriber.next(1);
        console.log(1);
      }, 1000);
      setTimeout(() => {
        subscriber.next(2);
        console.log(2);
      }, 2000);
      setTimeout(() => {
        subscriber.next(3);
        console.log(3);
      }, 3000);
      // End of processing
      setTimeout(() => {
        subscriber.complete();
        console.log(4);
      }, 4000);
      });
    }
}
