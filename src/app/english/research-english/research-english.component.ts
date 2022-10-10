import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-english',
  templateUrl: './research-english.component.html',
  styleUrls: ['./research-english.component.scss'],
})
export class ResearchEnglishComponent implements OnInit {
  baseAnimDelay = 0.2;

  constructor() {}

  ngOnInit(): void {}

  calcDelay(n) {
    return `${n * this.baseAnimDelay}s`;
  }
}
