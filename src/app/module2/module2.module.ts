import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCompComponent } from './module-comp/module-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ModuleCompComponent],
  exports:[ModuleCompComponent]
})
export class Module2Module { }
