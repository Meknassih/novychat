import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'novy-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private routerService: Router
  ) {
    this.registerForm = new FormGroup({
      nickname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
    
  }

  onSubmit() {
    console.warn('register', this.registerForm.value);
    this.userService.register(this.registerForm.value.nickname, this.registerForm.value.password)
      .then(user => {
        // redirect here
        this.routerService.navigate(['chat']);
      })
      .catch(error => {
        // display error
      });
  }

  login() {
    console.warn('login',this.registerForm.value);
    this.userService.login(this.registerForm.value.nickname, this.registerForm.value.password)
      .then(user => {
        // redirect here
        this.routerService.navigate(['chat']);
      })
      .catch(error => {
        // display error
      });
  }

}
