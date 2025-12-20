import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  tempDB: any = [];
  http = inject(HttpClient);

  //Get data that returns observable.
  //Invoking getData without subscribe, then request will not be sent.
  // request will be sent only if someone subscribes
  getData(): Observable<any> {
    let URL = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(URL);
  }

  // save accepts object and returns void used by mdf reactive form.
  save(profile: any): void {
    this.tempDB.push(profile);
  }

  //findAll returns all the elements in the array used by list profile
  findAll(): any {
    return this.tempDB;
  }
}
