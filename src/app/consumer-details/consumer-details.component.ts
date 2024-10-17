import { Component, inject, OnInit } from '@angular/core';
import { Consummer } from '../interfaces/consummer';
import { ConsummerService } from '../service/consummer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crm-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrl: './consumer-details.component.css'
})
export class ConsumerDetailsComponent implements OnInit {
  protected consumer? : Consummer;
  private service = inject(ConsummerService);
  
  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {
    const firstName = this.route.snapshot.paramMap.get('firstName');
    console.log(firstName);

    
  }


}
