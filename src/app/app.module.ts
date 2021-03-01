import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { TemplateComponent } from './view/template/template.component';
import { LayoutComponent } from './view/layout/layout.component';
import { MyChartComponent } from './view/my-chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TemplateComponent,
    LayoutComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
