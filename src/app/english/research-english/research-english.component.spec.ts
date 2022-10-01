import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchEnglishComponent } from './research-english.component';

describe('ResearchEnglishComponent', () => {
  let component: ResearchEnglishComponent;
  let fixture: ComponentFixture<ResearchEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
