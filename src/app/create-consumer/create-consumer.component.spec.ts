import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsumerComponent } from './create-consumer.component';
import { provideHttpClient } from '@angular/common/http';
import { AppMaterialModule } from '../app-material.module';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';


describe('CreateConsumerComponent', () => {
  let component: CreateConsumerComponent;
  let fixture: ComponentFixture<CreateConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateConsumerComponent],
      providers : [provideHttpClient(), provideNoopAnimations()],
      imports : [AppMaterialModule,  ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
