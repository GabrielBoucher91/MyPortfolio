import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEnglishComponent } from './about-english.component';

describe('AboutEnglishComponent', () => {
  let component: AboutEnglishComponent;
  let fixture: ComponentFixture<AboutEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
