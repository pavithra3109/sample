import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeRangeComponent } from './free-range.component';

describe('FreeRangeComponent', () => {
  let component: FreeRangeComponent;
  let fixture: ComponentFixture<FreeRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
