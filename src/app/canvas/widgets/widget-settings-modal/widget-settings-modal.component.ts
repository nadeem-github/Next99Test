import { Component, Input } from '@angular/core';
import { Widget } from '../../canvas.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-widget-settings-modal',
  templateUrl: './widget-settings-modal.component.html',
  styleUrls: ['./widget-settings-modal.component.scss']
})
export class WidgetSettingsModalComponent {
  @Input() widget!: Widget;

  constructor(public activeModal: NgbActiveModal) { }
}
