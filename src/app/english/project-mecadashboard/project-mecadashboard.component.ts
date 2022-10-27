import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-mecadashboard',
  templateUrl: './project-mecadashboard.component.html',
  styleUrls: ['./project-mecadashboard.component.scss'],
})
export class ProjectMecadashboardComponent implements OnInit {
  baseAnimDelay = 0.2;
  constructor() {}

  ngOnInit(): void {}

  calcDelay(n: number) {
    return `${n * this.baseAnimDelay}s`;
  }
}
