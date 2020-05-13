import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveDriverComponent } from './reactive-driver.component';

const routes: Routes = [{ path: '', component: ReactiveDriverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveDriverRoutingModule { }
