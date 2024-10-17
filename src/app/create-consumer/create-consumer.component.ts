import { Component, inject, OnInit } from '@angular/core';
import { ConsummerService } from '../service/consummer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Consummer } from '../interfaces/consummer';
import { Router } from '@angular/router';

@Component({
  selector: 'crm-create-consumer',
  templateUrl: './create-consumer.component.html',
  styleUrl: './create-consumer.component.css'
})
export class CreateConsumerComponent {
  private service = inject(ConsummerService);
  private router = inject(Router);

  

  addFormGroup: FormGroup = new FormGroup({
    id  : new FormControl(0),
    civility : new FormControl("",{
      validators : [Validators.required, Validators.minLength(2), Validators.maxLength(3)],
      nonNullable : true
    }),
    firstname : new FormControl("",{
      validators : [Validators.required, Validators.minLength(3)],
      nonNullable : true
    }),
    lastname : new FormControl("", {
      validators : [Validators.required, Validators.minLength(3)],
      nonNullable : true
    }),
    email : new FormControl("", {
      validators : [
        Validators.required, 
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
      ],
      nonNullable : true
    }),
    phone : new FormControl("", {
      validators : [
        Validators.required, 
        Validators.pattern('^[0-9+]{6,}$')
      ],
    })
   });


  ngOnInit(): void {
    
  }

  onSubmit() : void {
    const {civility, firstname, lastname, email, phone} = this.addFormGroup.value;
    const consumer : Consummer = {
      civility : civility,
      firstname : firstname,
      lastname : lastname,
      email : email,
      phone : phone
    }

    this.service.createConsummer(consumer).subscribe({
      next : (consumer : Consummer) => {
        console.log(consumer);
        this.router.navigateByUrl("/consummer")
      }
    });
  
  }

}
