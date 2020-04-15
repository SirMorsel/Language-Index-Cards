import { Component } from '@angular/core';

import { DataService } from './_service/data.service';
import { IndexCard } from './_interface/index-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Index-Cards';

  public indexCards: IndexCard[];

  constructor(public dataService: DataService){
    this.loadData();
  }

  loadData() {
      this.indexCards = [];
      this.indexCards = [];
      this.dataService.getIndexCards().subscribe((data: IndexCard[])=> {
        data.forEach((indexCard: IndexCard) => {
            this.indexCards.push(indexCard);
        });
      console.log(`Array: ${this.indexCards}`);
      }, error => {
        console.log(`ERROR: ${error.message}`);
      });
  }
}
