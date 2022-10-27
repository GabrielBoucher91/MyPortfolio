import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutEnglishComponent } from './about-english/about-english.component';
import { EnglishHomeComponent } from './english-home/english-home.component';
import { ProjectMecadashboardComponent } from './project-mecadashboard/project-mecadashboard.component';
import { ProjectNumberComponent } from './project-number/project-number.component';
import { ProjectPortfolioComponent } from './project-portfolio/project-portfolio.component';
import { ProjectsEnglishComponent } from './projects-english/projects-english.component';
import { ResearchEnglishComponent } from './research-english/research-english.component';
import { WorkEnglishComponent } from './work-english/work-english.component';

const routes: Routes = [
  {
    path: '',
    component: EnglishHomeComponent,
    children: [
      {
        path: '',
        component: AboutEnglishComponent,
      },
      {
        path: 'projects',
        component: ProjectsEnglishComponent,
      },
      {
        path: 'projects/portfolio',
        component: ProjectPortfolioComponent,
      },
      {
        path: 'projects/number',
        component: ProjectNumberComponent,
      },
      {
        path: 'projects/mecadashboard',
        component: ProjectMecadashboardComponent,
      },
      {
        path: 'research',
        component: ResearchEnglishComponent,
      },
      {
        path: 'work',
        component: WorkEnglishComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishRoutingModule {}
