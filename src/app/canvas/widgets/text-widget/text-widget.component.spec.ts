import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWidgetComponent } from './text-widget.component';

describe('TextWidgetComponent', () => {
  let component: TextWidgetComponent;
  let fixture: ComponentFixture<TextWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextWidgetComponent]
    });
    fixture = TestBed.createComponent(TextWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
