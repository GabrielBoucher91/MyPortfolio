import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNumberComponent } from './project-number.component';

describe('ProjectNumberComponent', () => {
  let component: ProjectNumberComponent;
  let fixture: ComponentFixture<ProjectNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
