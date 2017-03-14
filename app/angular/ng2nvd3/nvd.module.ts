import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { NvdComponent } from './nvd.component';
import { NgxChartsDemoComponent } from '../ngxdemo/ngx.component';
import { NgxModule } from '../ngxdemo/ngx.module';
import {nvD3} from 'ng2-nvd3';
declare let d3: any;
@NgModule({
  imports: [BrowserModule, FormsModule,NgxModule, nvD3],
  declarations: [NvdComponent, nvD3],
  bootstrap: [NvdComponent]
})
export class NvdModule { }
