import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'By Sandus B','It is well',new Date(2018,3,23),0,0),
    new Quote(2,'By Walt Disney','Whatever you do,do it well',new Date(2015,5,23),0,0),
    new Quote(3,'By Mark Twain','Never regret anything that made you smile',new Date(2013,3,20),0,0),
    new Quote(4,'By Robert H. schiuller','Tough times never last,but tough people do',new Date(2017,7,25),0,0),
    // new Quote(5,'Let him that would move the world,first move himself','By Socrates',new Date(2014,4,26),0,0),
    // new Quote(6,'The past does not equal the future','By Tonny Robbins',new Date(2012,5,29),0,0),
  ]


  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`);

      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  addNewQuote(quote){
    let quotelength = this.quotes.length;
    quote.id=quotelength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit() {
  }

}
