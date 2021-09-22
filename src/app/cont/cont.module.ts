import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContRoutingModule } from './cont-routing.module';
import { ContComponent } from './cont.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConDecComponent } from './con-dec/con-dec.component';

@NgModule({
  declarations: [
    ContComponent,
    ConDecComponent
  ],
  imports: [
    CommonModule,
    ContRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ContModule { }
