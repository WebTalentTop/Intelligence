import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import {CovalentCoreModule} from '@covalent/core';
import { NgxChartsDemoComponent } from './ngx.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CovalentCoreModule],
  declarations: [NgxChartsDemoComponent],
  bootstrap: [NgxChartsDemoComponent]
})
export class NgxModule { }
