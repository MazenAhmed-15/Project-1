import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideHoodieComponent } from './wide-hoodie.component';

describe('WideHoodieComponent', () => {
  let component: WideHoodieComponent;
  let fixture: ComponentFixture<WideHoodieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WideHoodieComponent]
    });
    fixture = TestBed.createComponent(WideHoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
