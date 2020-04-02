import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'novy-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup;

  constructor(
    private userService: UserService
  ) {
    this.registerForm = new FormGroup({
      nickname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
    this.userService.register(this.registerForm.value.nickname, this.registerForm.value.password)
      .then(user => {
        // redirect here
      })
      .catch(error => {
        // display error
      });
  }

}
