import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentModule } from './../../shared/content/content.module';
import { MaterialModule } from './../../../util/material/material.module';

import { BiomeRoutingModule } from './biome-routing.module';
import { BiomeComponent } from './components/biome/biome.component';
import { ContinentService } from 'src/app/services/continent.service';

@NgModule({
  declarations: [BiomeComponent],
  imports: [CommonModule, BiomeRoutingModule, ContentModule, MaterialModule],
  providers: [ContinentService],
})
export class BiomeModule {}
