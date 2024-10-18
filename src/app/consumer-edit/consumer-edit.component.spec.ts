import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerEditComponent } from './consumer-edit.component';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

describe('ConsumerEditComponent', () => {
  let component: ConsumerEditComponent;
  let fixture: ComponentFixture<ConsumerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumerEditComponent],
      providers : [provideHttpClient(), provideNoopAnimations()],
      imports : [AppMaterialModule,  ReactiveFormsModule, AppRoutingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
