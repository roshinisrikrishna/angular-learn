import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  startTime: Date;
  userName:string;
  password:string;
  message:string;
  messageStyle:string;

  constructor(public userService: UserService){
    this.startTime = new Date();
    this.userName='';
    this.password='';
  }

  login(){
    //TODO
    console.log('Going to login for: ', this.userName);
    //1. Get user detais from API
    //2. Check if password matches
    //3. Set message accordingly
    this.userService.getUser('userName').then(
      user => {
        console.log('Got user from service: ', user);
        if(user.password === this.password) {
          this.message = 'Login success.';
          //Maybe redirect him to some useful page

        } else {
          this.message = 'Login failed.';
          this.userName = '';
          this.password = '';
        }
      },
      error => {
        console.log('Could not fetch user details. ', error);
      });

    
  }
}
