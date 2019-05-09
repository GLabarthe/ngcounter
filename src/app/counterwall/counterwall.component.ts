import { Component, OnInit, Input} from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'counterwall',
  templateUrl: './counterwall.component.html',
  styleUrls: ['./counterwall.component.css']
})

export class CounterwallComponent implements OnInit {
  
  counterArray: Counter [];
  counter: Counter ;
  count: number = 0;
  numCounter: number = 0;
  maxCount: number = 6;

  constructor() {    
    this.counterArray = new Array;
  }

  ngOnInit() {
  }

  countIncrease(index) {
    this.counterArray[index].counterValue++;
  }

  countDecrease(index) {
    if (this.counterArray[index].counterValue > 0){
         this.counterArray[index].counterValue --;
    }
  }

  createCounter() {
    
    if (this.numCounter < this.maxCount)
    {
      this.numCounter ++;
    }    
    this.populateCounterArray();
  }
  populateCounterArray(){
    if (this.counterArray.length < this.maxCount)
    {
      this.counter = new Counter();
      this.counterArray.push(this.counter);
    }    
    console.log(this.counterArray);
  }
}
