import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-number',
  templateUrl: './project-number.component.html',
  styleUrls: ['./project-number.component.scss'],
})
export class ProjectNumberComponent implements OnInit {
  baseAnimDelay = 0.2;
  constructor() {}

  ngOnInit(): void {}

  calcDelay(n: number) {
    return `${n * this.baseAnimDelay}s`;
  }
}
