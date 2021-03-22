import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { TemplateComponent } from './view/template/template.component';
import { LayoutComponent } from './view/layout/layout.component';
import { MyChartComponent } from './view/my-chart/my-chart.component';
import { BasiclineComponent } from './view/chart/basicline/basicline.component';
import { BasicareaComponent } from './view/chart/basicarea/basicarea.component';
import { BarsimpleComponent } from './view/chart/barsimple/barsimple.component';
import { BarareaComponent } from './view/chart/bararea/bararea.component';
import { StackedareaComponent } from './view/chart/stackedarea/stackedarea.component';
import { StackedlineComponent } from './view/chart/stackedline/stackedline.component';
import { SmoothedlineComponent } from './view/chart/smoothedline/smoothedline.component';
import { AxisalignComponent } from './view/chart/axisalign/axisalign.component';
import { SerieslayoutComponent } from './view/chart/serieslayout/serieslayout.component';
import { HeadComponent } from './view/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TemplateComponent,
    LayoutComponent,
    MyChartComponent,
    BasiclineComponent,
    BasicareaComponent,
    BarsimpleComponent,
    BarareaComponent,
    StackedareaComponent,
    StackedlineComponent,
    SmoothedlineComponent,
    AxisalignComponent,
    SerieslayoutComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
