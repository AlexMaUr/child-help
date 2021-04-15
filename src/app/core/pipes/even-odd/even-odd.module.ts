import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenOddPipe } from './even-odd.pipe';

@NgModule({
  declarations: [EvenOddPipe],
  exports: [EvenOddPipe],
  imports: [CommonModule],
})
export class EvenOddModule {}
