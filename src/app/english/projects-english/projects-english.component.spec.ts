import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEnglishComponent } from './projects-english.component';

describe('ProjectsEnglishComponent', () => {
  let component: ProjectsEnglishComponent;
  let fixture: ComponentFixture<ProjectsEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
