import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-first-load',
  templateUrl: './first-load.component.html',
  styleUrls: ['./first-load.component.scss'],
})
export class FirstLoadComponent implements OnInit {
  @Output() over = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    setTimeout(() => {
      this.onOver();
    }, 2000);
  }

  onOver() {
    this.over.emit();
  }
}
