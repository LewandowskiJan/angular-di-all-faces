import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './containers/content/content.component';
import { MaterialModule } from './../../../util/material/material.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ContentComponent],
})
export class ContentModule {}
