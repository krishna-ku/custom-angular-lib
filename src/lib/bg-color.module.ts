import { NgModule } from '@angular/core';
import { BgColorComponent } from './bg-color.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BgColorComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    BgColorComponent
  ]
})
export class BgColorModule { }
