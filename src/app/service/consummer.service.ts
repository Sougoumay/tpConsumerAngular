import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consummer } from '../interfaces/consummer';

@Injectable({
  providedIn: 'root'
})
export class ConsummerService {

  private http = inject(HttpClient);

  constructor() { }

  getConsummers() : Observable<Consummer[]> {
    return this.http.get<Consummer[]>('/api/consumers');
  }

  findByQuery(name : string | null) : Observable<Consummer[]> {
    return this.http.get<Consummer[]>('/api/consumers?q='+name);
  }

}
