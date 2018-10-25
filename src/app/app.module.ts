
import { Module2Module } from './module2/module2.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { FormsModule } from '@angular/forms';
import { Scenario1fComponent } from './scenario1f/scenario1f.component';

import { Component1Component } from './scenario3/component1/component1.component';
import { Component2Component } from './scenario3/component2/component2.component';
import { Component13Component } from './scenario4/component13/component13.component';
import { Component23Component } from './scenario4/component23/component23.component';
import { Component15Component } from './scenario5/component15/component15.component';
import { Component25Component } from './scenario5/component25/component25.component';
import { Component35Component } from './scenario5/component35/component35.component';

import { Component36Component } from './scenario6/component36/component36.component';
import { Component26Component } from './scenario6/component26/component26.component';
import { Component16Component } from './scenario6/component16/component16.component';


@NgModule({
  declarations: [
    AppComponent,
   
    Scenario1Component,
    Scenario2Component,
    Scenario1fComponent,
    Component1Component,
    Component2Component,
    Component13Component,
    Component23Component,
    Component15Component,
    Component25Component,
    Component35Component,
    
    Component36Component,
    Component26Component,
    Component16Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
