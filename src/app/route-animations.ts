import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(
      ':enter',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1,
        }),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1,
          'z-index': 10,
        }),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        animate(
          '1s ease',
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
            'z-index': 10,
          })
        ),
      ],
      { optional: true }
    ),
    // Animate the new page in
    // query(':enter', [animate('600ms ease', style({ opacity: 1 }))]),
  ]),
]);
