import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMecadashboardComponent } from './project-mecadashboard.component';

describe('ProjectMecadashboardComponent', () => {
  let component: ProjectMecadashboardComponent;
  let fixture: ComponentFixture<ProjectMecadashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMecadashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMecadashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
