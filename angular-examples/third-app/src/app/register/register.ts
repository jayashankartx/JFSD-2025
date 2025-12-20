import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  _builder = inject(FormBuilder);


  registerForm = this._builder.group({
    firstname: [''], lastname: [''], phone: ['']
    //username: ['', [Validators.required, Validators.minLength(3)]],
    //lastname: ['', [Validators.required, Validators.minLength(2)]],
    //phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/), Validators.minLength(10), Validators.maxLength(10)]]
  });

  handleRegister() {
    //console.log(this.userForm.value);
    let firstname = this.registerForm.controls['firstname'].value;
    let lastname = this.registerForm.controls['lastname'].value;
    let phone = this.registerForm.controls['phone'].value;
    alert('Form submitted, user name is ' + firstname + ' ' + lastname + 'ph#' + phone);

  }

}
