import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnglishRoutingModule } from './english-routing.module';
import { EnglishHomeComponent } from './english-home/english-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EnglishHomeComponent],
  imports: [CommonModule, EnglishRoutingModule, SharedModule],
})
export class EnglishModule {}
