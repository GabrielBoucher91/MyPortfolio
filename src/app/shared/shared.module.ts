import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AboutCardComponent } from './about-card/about-card.component';
import { SkillPanelComponent } from './skill-panel/skill-panel.component';

@NgModule({
  declarations: [NavbarComponent, AboutCardComponent, SkillPanelComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, AboutCardComponent],
})
export class SharedModule {}
