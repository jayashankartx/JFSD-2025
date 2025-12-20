import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../profile-service';

@Component({
  selector: 'app-mdf',
  standalone: false,
  templateUrl: './mdf.html',
  styleUrl: './mdf.css',
})
export class Mdf {
  _builder = inject(FormBuilder);//depedency injection to inject a builder that will compose a form.
service = inject(ProfileService);//Dependency injection to inject a backend service.

  userForm = this._builder.group({
    firstname: ['', [Validators.required, Validators.minLength(3)]],//the properties are stores as an array
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/), Validators.minLength(10), Validators.maxLength(10)]] //^means that start with characters mentioned 0-9 and size is 10 end.
  });

  handleForm() {
    console.log(this.userForm.value);
    this.service.save(this.userForm.value);
    this.userForm.reset({});
    this.userForm.patchValue({ lastname: 'JBS' });
  }

}
