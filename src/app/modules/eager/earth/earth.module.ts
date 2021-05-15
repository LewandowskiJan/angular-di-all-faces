import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentModule } from './../../shared/content/content.module';
import { MaterialModule } from './../../../util/material/material.module';

import { EarthComponent } from './components/earth/earth.component';
import { ContinentService } from 'src/app/services/continent.service';

@NgModule({
  declarations: [EarthComponent],
  imports: [CommonModule, ContentModule, MaterialModule],
  providers: [ContinentService],
})
export class EarthModule {}
