import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnglishRoutingModule } from './english-routing.module';
import { EnglishHomeComponent } from './english-home/english-home.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsEnglishComponent } from './projects-english/projects-english.component';
import { ResearchEnglishComponent } from './research-english/research-english.component';
import { WorkEnglishComponent } from './work-english/work-english.component';
import { AboutEnglishComponent } from './about-english/about-english.component';

@NgModule({
  declarations: [EnglishHomeComponent, ProjectsEnglishComponent, ResearchEnglishComponent, WorkEnglishComponent, AboutEnglishComponent],
  imports: [CommonModule, EnglishRoutingModule, SharedModule],
})
export class EnglishModule {}
