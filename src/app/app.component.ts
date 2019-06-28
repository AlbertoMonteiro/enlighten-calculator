import { Component } from '@angular/core';

const TOMESWEEK = 20;
const SUNTRADAY = 15;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  force = 1;
  spirit = 1;
  mind = 1;
  vision = 1;
  heart = 1;
  root = 1;
  wantTo = 1;
  tomesNeeded = 0;
  scrollsNeeded = 0;
  remainingScrollsDays = "0";
  remainingTomesDays = "0";

  private values = [
    [8, 4],
    [10, 5],
    [10, 5],
    [12, 6],
    [12, 6],
    [16, 8],
    [16, 8],
    [28, 10],
    [28, 14],
    [32, 16],
    [36, 18],
    [44, 22],
    [60, 30],
    [68, 34]
  ];

  calculate() {
    this.tomesNeeded = 0;
    this.scrollsNeeded = 0;
    const wantToRank = +this.wantTo;
    for (let i = +this.force; i < wantToRank; i++) {
      this.tomesNeeded += this.values[i - 1][1];
    }
    for (let i = +this.spirit; i < wantToRank; i++) {
      this.tomesNeeded += this.values[i - 1][1];
    }
    for (let i = +this.mind; i < wantToRank; i++) {
      this.scrollsNeeded += this.values[i - 1][1];
    }
    for (let i = +this.vision; i < wantToRank; i++) {
      this.scrollsNeeded += this.values[i - 1][1];
    }
    for (let i = +this.heart; i < wantToRank; i++) {
      this.scrollsNeeded += this.values[i - 1][1];
    }
    for (let i = +this.root; i < wantToRank; i++) {
      this.scrollsNeeded += this.values[i - 1][1];
    }
    this.remainingScrollsDays = (this.scrollsNeeded / SUNTRADAY).toFixed(0);
    this.remainingTomesDays = Math.max(7,(this.tomesNeeded / TOMESWEEK * 7)).toFixed(0);
  }
}
