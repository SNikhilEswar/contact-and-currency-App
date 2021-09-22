import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
Api = 'https://contact-d50df-default-rtdb.firebaseio.com/contact.json';
url = 'https://contact-d50df-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  user:User;

addData(users: User) {
  return this.http.post<User>(this.Api, users);
}


getData() {
  return this.http.get<User>(this.Api).pipe(
    map((resdata) => {
      console.log(resdata);
      const userArray = [];
      for(const key in resdata) {
        if(resdata.hasOwnProperty(key)){
          userArray.push({userId:key, ...resdata[key]})
        }
      }
      return userArray
    })
  )
}


deletedata(userid) {
  return this.http.delete(`${this.url}/contact/${userid}.json`);
}
singledata(userId:any) {
  return this.http.get<User>(`${this.url}/contact/${userId}.json`);
}






















}

