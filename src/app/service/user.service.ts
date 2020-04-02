import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  register(nickname: string, password: string) {
    return new Promise((resolve, reject) => {
      // Create a new instance of the user class
      let user = new Parse.User();
      user.set('username', nickname);
      user.set('password', password);

      user.signUp().then(user => {
        console.log('User created successful with name: ' + user.get('username'));
        resolve(user);
      }).catch(error => {
        console.error('Error: ' + error.code + ' ' + error.message);
        reject(error);
      });
    });
  }

  login(nickname: string, password: string) {
    return new Promise((resolve, reject) => {
      // Create a new instance of the user class
      let user = Parse.User
        .logIn(nickname, password).then(user => {
          console.log('User login successful with name: ' + user.get('username'));
          resolve(user);
        }).catch(error => {
          console.log('Error: ' + error.code + ' ' + error.message);
          reject(error);
        });
    });
  }
}
