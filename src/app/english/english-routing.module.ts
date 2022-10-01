import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishHomeComponent } from './english-home/english-home.component';

const routes: Routes = [{ path: '', component: EnglishHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishRoutingModule {}
