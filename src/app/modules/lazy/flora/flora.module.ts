import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentModule } from './../../shared/content/content.module';
import { MaterialModule } from './../../../util/material/material.module';

import { FloraRoutingModule } from './flora-routing.module';
import { FloraComponent } from './components/flora/flora.component';
import { ContinentService } from 'src/app/services/continent.service';

@NgModule({
  declarations: [FloraComponent],
  imports: [CommonModule, FloraRoutingModule, ContentModule, MaterialModule],
  providers: [ContinentService],
})
export class FloraModule {}
