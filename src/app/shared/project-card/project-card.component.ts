import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() linkToDetail: string;
  @Input() linkToSource: string;
  @Input() techs: string[];
  techLinks = {
    Angular: 'assets/logos/skills/angular.png',
    Github: 'assets/logos/skills/GitHub-Mark-64px.png',
    Firebase: 'assets/logos/skills/Firebase_Logo_Logomark.png',
  };

  constructor() {}

  ngOnInit(): void {}
}
