import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentModule } from './../../shared/content/content.module';
import { MaterialModule } from './../../../util/material/material.module';

import { AnimalComponent } from './components/animal/animal.component';
import { ContinentService } from 'src/app/services/continent.service';

@NgModule({
  declarations: [AnimalComponent],
  imports: [CommonModule, ContentModule, MaterialModule],
  providers: [ContinentService],
})
export class AnimalModule {}
