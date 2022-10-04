import { Component, OnInit, Input } from '@angular/core';

interface Links {
  url: string;
  caption: string;
}

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
})
export class AboutCardComponent implements OnInit {
  @Input() links: Links[];

  constructor() {}

  ngOnInit(): void {}
}
