import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('loading', [
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate(
          '0.5s ease-in',
          style({ transform: 'translateY(-100%)', opacity: 0.7 })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  loadingScreen = true;
}
