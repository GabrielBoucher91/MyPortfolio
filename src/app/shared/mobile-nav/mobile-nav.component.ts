import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  animations: [
    trigger('slide', [
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate(
          '0.5s ease-in',
          style({ transform: 'translateY(-100%)', opacity: 0.7 })
        ),
      ]),
      transition(':enter', [
        style({ transform: 'translateY(-120%)', opacity: 0.3 }),
        animate(
          '0.5s ease-in',
          style({ transform: 'translateY(0%)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class MobileNavComponent implements OnInit {
  showPanel = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  togglePanel() {
    this.showPanel = !this.showPanel;
  }

  onClickLink(link: string) {
    this.showPanel = false;
    this.router.navigate([link], { relativeTo: this.route });
  }
}
