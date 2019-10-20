import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SectionComponent} from './components/section.component';

@NgModule({
  declarations: [
    SectionComponent
  ],
  exports: [
    SectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionModule { }
