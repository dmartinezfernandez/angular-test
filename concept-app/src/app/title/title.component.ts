import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() value: string | null;
  @Output() clickEvent = new EventEmitter<number>();
  private count = 0;
  constructor() {
    this.value = null;
  }
  onClick(): void {
    this.count++;
    this.clickEvent.emit(this.count);
  };

  ngOnInit(): void {
  }

}
