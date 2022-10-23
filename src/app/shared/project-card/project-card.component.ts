import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() image: string;
  @Input() linkToDetail: string;
  @Input() linkToSource: string;
  @Input() techs: string[];
  techLinks = {
    Angular: 'assets/logos/skills/angular.png',
    Github: 'assets/logos/skills/GitHub-Mark-64px.png',
    Firebase: 'assets/logos/skills/Firebase_Logo_Logomark.png',
    Python: 'assets/logos/skills/python-logo-only.png',
    Tensorflow: 'assets/logos/skills/TF_FullColor_Icon.png',
    Opencv: 'assets/logos/skills/OpenCV_logo.png',
  };

  constructor() {}

  ngOnInit(): void {}
}
