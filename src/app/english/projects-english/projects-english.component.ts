import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-english',
  templateUrl: './projects-english.component.html',
  styleUrls: ['./projects-english.component.scss'],
})
export class ProjectsEnglishComponent implements OnInit {
  baseAnimDelay = 0.2;
  constructor() {}

  ngOnInit(): void {}

  calcDelay(n: number) {
    return `${n * this.baseAnimDelay}s`;
  }
}
