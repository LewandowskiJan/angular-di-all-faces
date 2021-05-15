import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FloraComponent } from './components/flora/flora.component';

const routes: Routes = [
  {
    path: '',
    component: FloraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloraRoutingModule {}
