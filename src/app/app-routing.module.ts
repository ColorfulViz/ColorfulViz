import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './view/index/index.component';
import {TemplateComponent} from './view/template/template.component';
import {LayoutComponent} from './view/layout/layout.component';
import {MyChartComponent} from './view/my-chart/my-chart.component';
import {BasiclineComponent} from './view/chart/basicline/basicline.component';
import {BasicareaComponent} from './view/chart/basicarea/basicarea.component';
import {StackedareaComponent} from './view/chart/stackedarea/stackedarea.component';
import {StackedlineComponent} from './view/chart/stackedline/stackedline.component';
import {BarsimpleComponent} from './view/chart/barsimple/barsimple.component';
import {BarareaComponent} from './view/chart/bararea/bararea.component';


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
    path:'BasicLine',
    component:BasiclineComponent
  },
  {
    path:'BasicArea',
    component:BasicareaComponent
  },
  {
    path:'StackedArea',
    component:StackedareaComponent
  },
  {
    path:'StackedLine',
    component:StackedlineComponent
  },
  {
    path:'BarSimple',
    component:BarsimpleComponent
  },
  {
    path:'BarSimple',
    component:BarsimpleComponent
  },
  {
    path:'BarArea',
    component:BarareaComponent
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
