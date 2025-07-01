import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSettingsModalComponent } from './widget-settings-modal.component';

describe('WidgetSettingsModalComponent', () => {
  let component: WidgetSettingsModalComponent;
  let fixture: ComponentFixture<WidgetSettingsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetSettingsModalComponent]
    });
    fixture = TestBed.createComponent(WidgetSettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
