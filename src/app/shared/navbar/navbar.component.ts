import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() about = 'About';
  @Input() projects = 'Projects';
  @Input() research = 'Research';
  @Input() work = 'Work Experience';
  @Input() contact = 'Contact';

  constructor() {}

  ngOnInit(): void {}
}
