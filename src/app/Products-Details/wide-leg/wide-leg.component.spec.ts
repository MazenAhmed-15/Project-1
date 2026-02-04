import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideLegComponent } from './wide-leg.component';

describe('WideLegComponent', () => {
  let component: WideLegComponent;
  let fixture: ComponentFixture<WideLegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WideLegComponent]
    });
    fixture = TestBed.createComponent(WideLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
