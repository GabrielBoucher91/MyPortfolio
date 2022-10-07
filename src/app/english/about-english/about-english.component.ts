import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-english',
  templateUrl: './about-english.component.html',
  styleUrls: ['./about-english.component.scss'],
})
export class AboutEnglishComponent implements OnInit {
  webLink = [{ url: '/projects', caption: 'Go to projects' }];
  roboticsLink = [
    { url: '/research', caption: 'Go to research' },
    { url: '/work', caption: 'Go to work experience' },
  ];
  researchLink = [{ url: '/research', caption: 'Go to research' }];
  workLink = [{ url: '/work', caption: 'Go to work experience' }];

  constructor() {}

  ngOnInit(): void {}
}
