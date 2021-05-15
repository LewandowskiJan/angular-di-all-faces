import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalComponent } from './modules/eager/animal/components/animal/animal.component';
import { EarthComponent } from './modules/eager/earth/components/earth/earth.component';
import { WeatherComponent } from './modules/eager/weather/components/weather/weather.component';

const routes: Routes = [
  {
    path: 'earth',
    component: EarthComponent,
  },
  {
    path: 'animal',
    component: AnimalComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'biome',
    loadChildren: () =>
      import('./modules/lazy/biome/biome.module').then((m) => m.BiomeModule),
  },
  {
    path: 'flora',
    loadChildren: async () =>
      (await import('./modules/lazy/flora/flora.module')).FloraModule,
  },
  { path: '', pathMatch: 'full', redirectTo: 'earth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
