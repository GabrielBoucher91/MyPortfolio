import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-english',
  templateUrl: './work-english.component.html',
  styleUrls: ['./work-english.component.scss'],
})
export class WorkEnglishComponent implements OnInit {
  baseDelay = 0.2;

  constructor() {}

  ngOnInit(): void {}

  calcDelay(n) {
    return `${n * this.baseDelay}s`;
  }
}
