import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { User } from '../login/authentication.service';
import { Consummer } from '../interfaces/consummer';
import { ConsummerService } from '../service/consummer.service';
import { NotExpr } from '@angular/compiler';
import { Subscription } from 'rxjs';


@Component({
  selector: 'crm-consummer',
  templateUrl: './consummer.component.html',
  styleUrl: './consummer.component.css'
})
export class ConsummerComponent implements OnInit, OnDestroy {


  private subs: Subscription[] = [];
  private service = inject(ConsummerService);

  displayedColumns: string[] = ['id', 'civility', 'firstname', 'lastname', 'email', 'phone', 'createdAt', 'updatedAt'];
  consummers : Consummer[] = [];

  ngOnInit(): void {
    this.service.getConsummers('').subscribe({
      next : (data) => {
        this.consummers = data;
      }
    });
  }

  find(query : string) : void {


    console.log(query);

    if(query) {
      this.service.getConsummers(query)
      .subscribe({
        next : (data) => {
          this.consummers = data;
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }


}

