import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.scss'],
})
export class TechCardComponent implements OnInit {
  @Input() name: string;
  techLink = {
    Angular: 'assets/logos/skills/angular.png',
    Github: 'assets/logos/skills/GitHub-Mark-64px.png',
    Firebase: 'assets/logos/skills/Firebase_Logo_Logomark.png',
    Python: 'assets/logos/skills/python-logo-only.png',
    TensorFlow: 'assets/logos/skills/TF_FullColor_Icon.png',
    OpenCV: 'assets/logos/skills/OpenCV_logo.png',
  };

  constructor() {}

  ngOnInit(): void {}
}
