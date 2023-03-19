import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import {GraphicModule} from "./modules/graphic/graphic.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatSelectModule,
    BrowserAnimationsModule,
    DxChartModule,
    DxSelectBoxModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent, pathMatch: 'full'}
    ]),
    GraphicModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
