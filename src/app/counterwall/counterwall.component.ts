import { Component, OnInit, Input} from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { Counter } from '../counter';

@Component({
  selector: 'counterwall',
  templateUrl: './counterwall.component.html',
  styleUrls: ['./counterwall.component.css']
})

export class CounterwallComponent implements OnInit {
  // counterObj: 
  //   {
  //     countNum: number;
  //     count: number;
  //   };

  counterArray: Counter [];
  counter: Counter ;
  count: number = 0;
  numCounter: number = 0;
  maxCount: number = 6;

  

  constructor() { 
    // this.counterObj = {
    //   countNum: 0,
    //   count: 0,
    // };
    this.counterArray = new Array;
  }

  ngOnInit() {
  }

  countIncrease(index) {
    this.counterArray[index].counterValue++;
    //counter.value ++
    //  this.count ++;
  }

  countDecrease(index) {    
   this.counterArray[index].counterValue --;
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

    // for (let i=0; i<this.numCounter; i++) {
    //   this.counterArray.push(
    //     {counterObj.countNum = i}
    //   )

    //}
  }

}
