import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-english',
  templateUrl: './about-english.component.html',
  styleUrls: ['./about-english.component.scss'],
})
export class AboutEnglishComponent implements OnInit {
  webLink = [{ url: '/projects', caption: 'Go to projects' }];
  roboticsLink = [
    { url: '/research', caption: 'Got to research' },
    { url: '/work', caption: 'Got to work experience' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
