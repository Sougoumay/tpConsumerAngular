import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsummerComponent } from './consummer.component';

describe('ConsummerComponent', () => {
  let component: ConsummerComponent;
  let fixture: ComponentFixture<ConsummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsummerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
