import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'EN',
    pathMatch: 'full',
  },
  {
    path: 'EN',
    loadChildren: () =>
      import('./english/english.module').then((m) => m.EnglishModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
