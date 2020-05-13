import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo7Component } from './demo7.component';

const routes: Routes = [{ path: '', component: Demo7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo7RoutingModule { }
