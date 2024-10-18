import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authenticationGuard } from './login/authentication.guard';
import { ConsummerComponent } from './consummer/consummer.component';
import { ConsumerEditComponent } from './consumer-edit/consumer-edit.component';
import { CreateConsumerComponent } from './create-consumer/create-consumer.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate : [authenticationGuard] },
  {path : "consummer", component : ConsummerComponent, canActivate : [authenticationGuard]},
  {path : "consumer/create", component : CreateConsumerComponent, canActivate : [authenticationGuard]},
  {path : "consumer/edit/:id", component : ConsumerEditComponent, canActivate : [authenticationGuard]},
  //{path : "consummer/:firstName", component : ConsumerDetailsComponent, canActivate : [authenticationGuard]},
  { path : '**', component : HomeComponent, pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes
    //, {bindToComponentInputs : true} : ceci permet de recuperer les valeurs passé dans les params du query 
    //  si on met @input() et en dessous le nom du paramètre. Donc on a pas besoin de faire activatedroute.snapshot...

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
