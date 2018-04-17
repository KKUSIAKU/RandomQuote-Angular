import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { Quote } from '../quote';

import { QuoteService } from '../quote.servie';
//import { QUOTES } from '../quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  quote:Quote = {quote:"",author:""};

  constructor(private quoteService:QuoteService){
    // this.quoteService.getQuote().subscribe(quote => this.quote = quote);
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.quoteService.getQuote()
    .subscribe(quote => this.quote = quote);
  }

  //quotes = QUOTES;
}
