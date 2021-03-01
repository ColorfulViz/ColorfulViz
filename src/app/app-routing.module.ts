import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './view/index/index.component';
import {TemplateComponent} from './view/template/template.component';
import {LayoutComponent} from './view/layout/layout.component';
import {MyChartComponent} from './view/my-chart/my-chart.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'template',
    component:TemplateComponent
  },
  {
    path:'layout',
    component:LayoutComponent
  },
  {
    path:'my-chart',
    component:MyChartComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
