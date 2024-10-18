import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsummerComponent } from './consummer.component';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

@Component({
  selector : 'crm-consumer'
})
class MockConsumerService {

}

describe('ConsummerComponent', () => {
  let component: ConsummerComponent;
  let fixture: ComponentFixture<ConsummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsummerComponent],
      providers : [provideHttpClient(), provideNoopAnimations()],
      imports : [AppMaterialModule, ReactiveFormsModule]
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
