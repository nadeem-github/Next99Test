// src/app/shared/draggable.directive.ts
import {
  Directive,
  ElementRef,
  OnInit,
  Input
} from '@angular/core';
import interact from 'interactjs';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {
  @Input() widgetId!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    interact(this.el.nativeElement)
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        listeners: {
          move: (event) => {
            const target = event.target;

            const dataX = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const dataY = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            target.style.transform = `translate(${dataX}px, ${dataY}px)`;
            target.setAttribute('data-x', dataX);
            target.setAttribute('data-y', dataY);
          }
        }
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            let { x, y } = event.target.dataset;

            x = (parseFloat(x) || 0) + event.deltaRect.left;
            y = (parseFloat(y) || 0) + event.deltaRect.top;

            Object.assign(event.target.style, {
              width: `${event.rect.width}px`,
              height: `${event.rect.height}px`,
              transform: `translate(${x}px, ${y}px)`
            });

            Object.assign(event.target.dataset, { x, y });
          }
        },
        modifiers: [
          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 }
          })
        ],
        inertia: true
      });
  }
}
