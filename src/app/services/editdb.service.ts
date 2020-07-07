import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { listype} from './listype';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DbserviceService {

  url: string = "http://localhost:3000/catalog";  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("http://localhost:3000/catalog").
    subscribe((data) => console.log(data));        
  }  
 
  getProdlist(): Observable<listype[]> {
    return this.http.get<listype[]>(this.url)
  }  
  addProd(worker: listype) {
    return this.http.post<listype>(this.url, worker).subscribe();
  }
  modProd(id, worker: listype) {
    return this.http.put(`${this.url}/${id}`, worker).subscribe();
  }
  delProd(id) {
    return this.http.delete<void>(`${this.url}/${id}`).subscribe();
  }

}