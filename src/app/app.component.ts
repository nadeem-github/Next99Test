import { Component } from '@angular/core';
import { CanvasService } from './canvas/canvas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public canvasService: CanvasService) { }

  save() {
    this.canvasService.saveToStorage();
  }

}
