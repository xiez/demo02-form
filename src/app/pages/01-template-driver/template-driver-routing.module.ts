import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDriverComponent } from './template-driver.component';

const routes: Routes = [{ path: '', component: TemplateDriverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDriverRoutingModule { }
