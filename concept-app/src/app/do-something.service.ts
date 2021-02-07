import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoSomethingService {
  obs: Observable<number>;
  constructor() {
    this.obs = new Observable<number>((observer) => {
        observer.next(Math.floor(Math.random() * 100));
        observer.complete();
      });
  }
  public getNumberPromise = (): Promise<number> => {
    return new Promise<number>((resolve) => {
      setTimeout(() => resolve(Math.floor(Math.random() * 100)), 3000);
    });
  }

  // https://luukgruijs.medium.com/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
  public getNewNumberObservable = (): Observable<number> => {
    return new Observable<number>((observer) => {
      observer.next(Math.floor(Math.random() * 100));
      // observer.complete();
    });
  }
  public getNumberObservable = (): Observable<number> => this.obs;

  public getNumberObservableDeprecatedWay = (): Observable<number> => {
    return of(Math.floor(Math.random() * 10));
  }
}
