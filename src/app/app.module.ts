import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnEnterComponent } from './on-enter/on-enter.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { FormsModule } from '@angular/forms';
import { Scenario1fComponent } from './scenario1f/scenario1f.component';

import { Component1Component } from './scenario3/component1/component1.component';
import { Component2Component } from './scenario3/component2/component2.component';
import { Scenario4Component } from './scenario4/scenario4/scenario4.component';
import { Component13Component } from './scenario4/component13/component13.component';
import { Component23Component } from './scenario4/component23/component23.component';


@NgModule({
  declarations: [
    AppComponent,
    OnEnterComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario1fComponent,
    Component1Component,
    Component2Component,
    Scenario4Component,
    Component13Component,
    Component23Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
