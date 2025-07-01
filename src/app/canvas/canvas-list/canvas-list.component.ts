import { Component } from '@angular/core';
import { CanvasService } from '../canvas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-canvas-list',
  templateUrl: './canvas-list.component.html',
  styleUrls: ['./canvas-list.component.scss']
})
export class CanvasListComponent {
  canvases$ = this.canvasService.canvases$;

  canvasForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)])
  });

  constructor(private canvasService: CanvasService) { }

  ngOnInit(): void { }

  addCanvas() {
    const name = this.canvasForm.get('name')?.value?.trim();
    if (name) {
      this.canvasService.addCanvas(name);
      this.canvasForm.reset();
    }
  }

  deleteCanvas(id: string) {
    this.canvasService.deleteCanvas(id);
  }

  selectCanvas(id: string) {
    this.canvasService.selectCanvas(id);
  }
}
