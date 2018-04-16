import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'


import { Quote} from "./quote";

const httpOptions = {
  headers: new HttpHeaders({
    "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  }),
}

@Injectable()
export class QuoteService {
  
  private quoteUrl = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous';

  constructor(
    private http: HttpClient,
  ){ }

  getQuote(): Observable<Quote>{
    return this.http.get<Quote>(this.quoteUrl, httpOptions);
  }
}