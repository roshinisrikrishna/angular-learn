import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(name:string): Promise<User> {
    console.log('Going to fetch user details from API...')
    return new Promise( (resolve, reject)=>{
      this.httpClient.get('https://jsonplaceholder.typicode.com/users/1').subscribe(
        response => {
          console.log('Response from API: ', response);
          let user: User = {name: response['userName'], password : '1234'};
          resolve(user);
        },
        error => {
          console.log('Error while calling API: ', error);
          reject('Error while calling API');
        }
      );
      
    });
  }
}
