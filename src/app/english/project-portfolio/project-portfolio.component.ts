import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-portfolio',
  templateUrl: './project-portfolio.component.html',
  styleUrls: ['./project-portfolio.component.scss'],
})
export class ProjectPortfolioComponent implements OnInit {
  baseAnimDelay = 0.2;

  constructor() {}

  ngOnInit(): void {}

  calcDelay(n) {
    return `${n * this.baseAnimDelay}s`;
  }
}
