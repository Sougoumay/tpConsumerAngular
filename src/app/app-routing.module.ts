import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authenticationGuard } from './login/authentication.guard';
import { ConsummerComponent } from './consummer/consummer.component';
import { ConsumerEditComponent } from './consumer-edit/consumer-edit.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate : [authenticationGuard] },
  {path : "consummer", component : ConsummerComponent, canActivate : [authenticationGuard]},
  {path : "consumer/edit", component : ConsumerEditComponent, canActivate : [authenticationGuard]},
  //{path : "consummer/:firstName", component : ConsumerDetailsComponent, canActivate : [authenticationGuard]},
  { path : '**', component : HomeComponent, pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
