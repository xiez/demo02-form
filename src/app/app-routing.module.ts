import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '01-template-driver',
  loadChildren: () => import('./pages/01-template-driver/template-driver.module').then(m => m.TemplateDriverModule)
}, {
  path: '02-reactive-driver',
  loadChildren: () => import('./pages/02-reactive-driver/reactive-driver.module').then(m => m.ReactiveDriverModule)
},
{
  path: 'demo05',
  loadChildren: () => import('./pages/reactive-driver2/reactive-driver2.module').then(m => m.ReactiveDriver2Module)
},
{ path: 'demo04', loadChildren: () => import('./pages/demo04/demo04.module').then(m => m.Demo04Module) },
{ path: 'demo06', loadChildren: () => import('./pages/demo06/demo06.module').then(m => m.Demo06Module) },
{ path: 'demo07', loadChildren: () => import('./pages/demo7/demo7.module').then(m => m.Demo7Module) }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
