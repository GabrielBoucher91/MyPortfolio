import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AboutCardComponent } from './about-card/about-card.component';
import { SkillPanelComponent } from './skill-panel/skill-panel.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { WorkCardComponent } from './work-card/work-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AboutCardComponent,
    SkillPanelComponent,
    UsefulLinksComponent,
    WorkCardComponent,
    ProjectCardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    AboutCardComponent,
    SkillPanelComponent,
    UsefulLinksComponent,
    WorkCardComponent,
    ProjectCardComponent,
  ],
})
export class SharedModule {}
