import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AboutCardComponent } from './about-card/about-card.component';
import { SkillPanelComponent } from './skill-panel/skill-panel.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AboutCardComponent,
    SkillPanelComponent,
    UsefulLinksComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    AboutCardComponent,
    SkillPanelComponent,
    UsefulLinksComponent,
  ],
})
export class SharedModule {}
