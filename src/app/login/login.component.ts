import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthenticationService, User } from './authentication.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private authentificationService = inject(AuthenticationService);
  private router = inject(Router);

  constructor() {
    this.authentificationService.disconnect();
  }

  protected loginForm = new FormGroup({
    login: new FormControl('', {
      validators : [Validators.required, Validators.minLength(3)],
      nonNullable : true
    }),
    password: new FormControl('', {
      validators : [Validators.required, checkPassword],
      nonNullable : true
    }),
  });

  protected onSubmit(): void {
    console.log('submit');
    const {login, password} = this.loginForm.getRawValue();
    
    const user = this.authentificationService.authentUser(login,password).pipe(
      catchError((error) => {
        alert(error.message)
        return []
      })
    ).subscribe({
      next: (u: User) => {
      this.router.navigateByUrl("/home");
      },
      error: (error: Error) => {
      alert(error.message);
      },
      complete: () => {
      console.log("complete");
      },
    });

    console.log("authuser ", user);
    

    if (user !== null) {
      this.router.navigateByUrl("/home")
    }
    // ...
  }

  

  

}

function checkPassword(c: AbstractControl<string>): ValidationErrors | null {
  if (c.value.length < 5) {
    return {
      checkPassword: 'Error control password',
    };
  }
  return null;
}


