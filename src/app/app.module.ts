import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppMaterialModule } from './app-material.module';
import { DummyComponent } from './component/dummy/dummy.component';
import { HelpComponent } from './component/help/help.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { jwtInterceptorInterceptor } from './common/jwtinterceptor.interceptor';
import { PhonePipe } from './common/phone.pipe';
import { ConsummerComponent } from './consummer/consummer.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ConsumerDetailsComponent } from './consumer-details/consumer-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    DummyComponent, 
    HelpComponent, 
    HomeComponent, 
    PhonePipe, 
    ConsummerComponent, 
    ConsumerDetailsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    AppMaterialModule, 
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([jwtInterceptorInterceptor]),
      withFetch()
    )
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
