import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEnglishComponent } from './work-english.component';

describe('WorkEnglishComponent', () => {
  let component: WorkEnglishComponent;
  let fixture: ComponentFixture<WorkEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
