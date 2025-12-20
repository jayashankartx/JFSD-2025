import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  builder = inject(FormBuilder);
  router = inject(Router);


  loginForm = this.builder.group({
    username: [''], password: ['']
    //username: ['', [Validators.required, Validators.minLength(3)]],
    //lastname: ['', [Validators.required, Validators.minLength(2)]],
    //phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/), Validators.minLength(10), Validators.maxLength(10)]]
  });

  handleLogin() {
    //console.log(this.userForm.value);
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
    //alert('Form submitted, user name is ' + username);

    if(username==password){
      this.router.navigate(['success', username]);
    } else {
      alert('username or password is incorrect. So redirecting');
      this.router.navigate(['login']);
    }

  }


}
