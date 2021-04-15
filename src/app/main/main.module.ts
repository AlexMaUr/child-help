import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { EvenOddModule } from '../core/pipes/even-odd/even-odd.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,

    EvenOddModule,
  ],
  exports: [MainComponent]
})
export class MainModule { }
