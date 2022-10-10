import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss'],
})
export class UsefulLinksComponent implements OnInit {
  @Input() type: string;
  @Input() link: string;
  logos = {
    Article: 'assets/logos/links/article.png',
    Video: 'assets/logos/links/video.png',
    Page: 'assets/logos/links/page.png',
  };

  constructor() {}

  ngOnInit(): void {}
}
