import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicRoutingModule } from './graphic-routing.module';
import { GraphicComponent } from './components/graphic/graphic.component';
import { GraphicLayoutComponent } from './graphic-layout.component';


@NgModule({
    declarations: [
        GraphicComponent,
        GraphicLayoutComponent
    ],
    exports: [
        GraphicLayoutComponent
    ],
    imports: [
        CommonModule,
        GraphicRoutingModule
    ]
})
export class GraphicModule { }
