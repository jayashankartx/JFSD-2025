import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  standalone: false,
  templateUrl: './tdf.html',
  styleUrl: './tdf.css',
})
export class Tdf {
  firstname : string = "";
  lastname : string = "";
  phone : string = "";
  dob : Date | undefined = undefined;

  handleForm(val : any){
    console.log(val);
    //In real world applications, we have to submit the data to backend

  }

}
