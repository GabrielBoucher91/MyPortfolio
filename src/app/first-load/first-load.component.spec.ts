import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLoadComponent } from './first-load.component';

describe('FirstLoadComponent', () => {
  let component: FirstLoadComponent;
  let fixture: ComponentFixture<FirstLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
