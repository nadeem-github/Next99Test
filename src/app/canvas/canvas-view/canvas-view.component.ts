import { Component } from '@angular/core';
import { Canvas, CanvasService, Widget } from '../canvas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WidgetSettingsModalComponent } from '../widgets/widget-settings-modal/widget-settings-modal.component';

@Component({
  selector: 'app-canvas-view',
  templateUrl: './canvas-view.component.html',
  styleUrls: ['./canvas-view.component.scss']
})
export class CanvasViewComponent {
  
  widget: any;

  constructor(public canvasService: CanvasService, private modal: NgbModal) { }

  // get selectedCanvas(): Canvas | null {
  //   return this.canvasService.getSelectedCanvas();
  // }

  get selectedCanvas() {
    return this.canvasService.getSelectedCanvas();
  }


  addWidget(type: 'text' | 'image' | 'table') {
    this.canvasService.addWidget(type);
  }

  removeWidget(widgetId: string) {
    this.canvasService.removeWidget(widgetId);
  }

  openSettings(widget: Widget) {
    const modalRef = this.modal.open(WidgetSettingsModalComponent);
    modalRef.componentInstance.widget = { ...widget };

    modalRef.result.then((updatedWidget) => {
      widget.config = updatedWidget.config;
    }).catch(() => { });
  }

}
