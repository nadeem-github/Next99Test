import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CanvasListComponent } from './canvas/canvas-list/canvas-list.component';
import { CanvasViewComponent } from './canvas/canvas-view/canvas-view.component';
import { TextWidgetComponent } from './canvas/widgets/text-widget/text-widget.component';
import { ImageWidgetComponent } from './canvas/widgets/image-widget/image-widget.component';
import { TableWidgetComponent } from './canvas/widgets/table-widget/table-widget.component';
import { DraggableDirective } from './shared/draggable.directive';
import { WidgetSettingsModalComponent } from './canvas/widgets/widget-settings-modal/widget-settings-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasListComponent,
    CanvasViewComponent,
    TextWidgetComponent,
    ImageWidgetComponent,
    TableWidgetComponent,
    DraggableDirective,
    WidgetSettingsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
