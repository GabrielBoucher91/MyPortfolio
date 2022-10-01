import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishHomeComponent } from './english-home.component';

describe('EnglishHomeComponent', () => {
  let component: EnglishHomeComponent;
  let fixture: ComponentFixture<EnglishHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
