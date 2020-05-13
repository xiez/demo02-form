import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveDriver2Component } from './reactive-driver2.component';

const routes: Routes = [{ path: '', component: ReactiveDriver2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveDriver2RoutingModule { }
