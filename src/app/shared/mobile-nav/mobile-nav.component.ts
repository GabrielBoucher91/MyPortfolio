import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent implements OnInit {
  showPanel = false;

  constructor() {}

  ngOnInit(): void {}

  togglePanel() {
    this.showPanel = !this.showPanel;
  }
}
