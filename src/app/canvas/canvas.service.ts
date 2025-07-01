// src/app/canvas/canvas.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Canvas {
  id: string;
  name: string;
  widgets: any[]; // for now, keep it any[]
}

export interface Widget {
  id: string;
  type: 'text' | 'image' | 'table';
  config: any; // configurable later
  position: { top: number; left: number };
}

@Injectable({
  providedIn: 'root'
})
export class CanvasService {
  private canvases: Canvas[] = [];
  private selectedCanvasId = new BehaviorSubject<string | null>(null);

  canvases$ = new BehaviorSubject<Canvas[]>([]);
  selectedCanvas$ = this.selectedCanvasId.asObservable();

  constructor() { }

  addCanvas(name: string) {
    const newCanvas: Canvas = {
      id: Date.now().toString(),
      name,
      widgets: []
    };
    this.canvases.push(newCanvas);
    this.canvases$.next(this.canvases);
    this.selectCanvas(newCanvas.id);
  }

  deleteCanvas(id: string) {
    this.canvases = this.canvases.filter(c => c.id !== id);
    this.canvases$.next(this.canvases);
    if (this.selectedCanvasId.value === id) {
      this.selectedCanvasId.next(null);
    }
  }

  selectCanvas(id: string) {
    this.selectedCanvasId.next(id);
  }

  getSelectedCanvas(): Canvas | null {
    return this.canvases.find(c => c.id === this.selectedCanvasId.value) || null;
  }


  addWidget(type: 'text' | 'image' | 'table') {
    const canvas = this.getSelectedCanvas();
    if (!canvas) return;

    const newWidget: Widget = {
      id: Date.now().toString(),
      type,
      config: {},
      position: { top: 100, left: 100 }
    };

    canvas.widgets.push(newWidget);
    this.canvases$.next(this.canvases);
  }

  removeWidget(widgetId: string) {
    const canvas = this.getSelectedCanvas();
    if (!canvas) return;

    canvas.widgets = canvas.widgets.filter(w => w.id !== widgetId);
    this.canvases$.next(this.canvases);
  }

  saveToStorage() {
    localStorage.setItem('canvases', JSON.stringify(this.canvases));
  }

  loadFromStorage() {
    const saved = localStorage.getItem('canvases');
    if (saved) {
      this.canvases = JSON.parse(saved);
      this.canvases$.next(this.canvases);
    }
  }



}
