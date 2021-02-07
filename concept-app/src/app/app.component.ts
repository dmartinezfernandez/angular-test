import { Component, OnInit } from '@angular/core';
import { DoSomethingService } from './do-something.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'concept-app';
  somePromiseValue = -1;
  someObservableValueManuallySubscribed = -1;
  count = 0;
  constructor(private doSomethingService: DoSomethingService) {
    this.getSomeObservable().subscribe(value => {
      this.someObservableValueManuallySubscribed = value;
    });
  }
  getSomePromise = () => {
    return this.doSomethingService.getNumberPromise().then((result) => {
      console.log(result);
      return result;
    });
  }
  getSomeObservable = () => {
    return this.doSomethingService.getNumberObservable();
  }
  onClickEvent = (count: number) => {
    this.count = count;
    console.log(this.count);
  }
  ngOnInit(): void {
    this.doSomethingService.getNumberPromise()
      .then(value => {
        this.somePromiseValue = value;
      });
  }
}
