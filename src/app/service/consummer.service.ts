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

  getConsummers(name : string | null) : Observable<Consummer[]> {
    return this.http.get<Consummer[]>('/api/consumers?q='+name);
  }

  createConsummer(consumer : Consummer) : Observable<Consummer> {
    return this.http.post<Consummer>('/api/consumers', consumer);
  }

  getById(id : number) : Observable<Consummer> {
    console.log(`consumer number ${id}`)
    return this.http.get<Consummer>(`/api/consumers/${id}`);
  }
  
  editConsummer(consumer : Consummer) : Observable<void> {
    return this.http.put<void>(`/api/consumers/${consumer.id}`, consumer);
  }

  deleteConsumer(id : number) : Observable<void>  {
    return this.http.delete<void>(`/api/consumers/${id}`)
  }


}
