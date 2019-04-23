import { Component, OnInit, Input } from '@angular/core';
import { SuperCounter } from '../super-counter';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() counter: SuperCounter;

  constructor() {}

  ngOnInit() {}

  /**
   * Increase the counter value
   */
  increment() {
    this.counter.value += 3;
  }

  /**
   * Decrease the counter value
   */
  decrement() {
    this.counter.value -= 3;
  }
}
