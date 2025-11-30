import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {

  id: string = "001";
  name: string = "Joe";
  salary: number = 100000;
  dateofbirth : Date = new Date("2024-08-04");
}

