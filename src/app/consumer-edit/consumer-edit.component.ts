import { Component, inject, OnInit } from '@angular/core';
import { ConsummerService } from '../service/consummer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Consummer } from '../interfaces/consummer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'crm-consumer-edit',
  templateUrl: './consumer-edit.component.html',
  styleUrl: './consumer-edit.component.css'
})
export class ConsumerEditComponent implements OnInit {

  private service = inject(ConsummerService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  protected editFormGroup : FormGroup = new FormGroup({
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
  private consumerId? : number; 


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.consumerId = Number(id);
    this.getById(this.consumerId);
  }

  getById(id : number) : void {
    this.service.getById(id).subscribe({
      next : (consumer : Consummer) => {
        console.log(this.consumerId, consumer);
        this.editFormData(consumer)
      }
    })
  }

  editFormData(consumer : Consummer) : void {
    this.editFormGroup.controls['civility'].setValue(consumer.civility);
        this.editFormGroup.controls['firstname'].setValue(consumer.firstname);
        this.editFormGroup.controls['lastname'].setValue(consumer.lastname);
        this.editFormGroup.controls['email'].setValue(consumer.email);
        this.editFormGroup.controls['phone'].setValue(consumer.phone);
  }

  onSubmit() : void {
    const {civility, firstname, lastname, email, phone} = this.editFormGroup?.value;
    const consumer : Consummer = {
      id : this.consumerId,
      civility : civility,
      firstname : firstname,
      lastname : lastname,
      email : email,
      phone : phone,
    }

    console.log("In submit fonction", consumer);

    this.service.editConsummer(consumer).subscribe({
      next : () => {
        this.router.navigateByUrl("/consummer")
      }
    });
  
  }

}
