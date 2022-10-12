import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-english',
  templateUrl: './about-english.component.html',
  styleUrls: ['./about-english.component.scss'],
})
export class AboutEnglishComponent implements OnInit {
  webLink = [{ url: '/EN/projects', caption: 'Go to projects' }];
  roboticsLink = [
    { url: '/EN/research', caption: 'Go to research' },
    { url: '/EN/work', caption: 'Go to work experience' },
  ];
  researchLink = [{ url: '/EN/research', caption: 'Go to research' }];
  workLink = [{ url: '/EN/work', caption: 'Go to work experience' }];

  constructor() {}

  ngOnInit(): void {}
}
