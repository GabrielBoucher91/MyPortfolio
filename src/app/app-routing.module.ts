import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
    data: { animation: 'Landing' },
  },
  {
    path: 'EN',
    loadChildren: () =>
      import('./english/english.module').then((m) => m.EnglishModule),
    data: { animation: 'Transition' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
