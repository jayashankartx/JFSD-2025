import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  standalone: false,
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  employee = {id: 100, name: "Alex", salary: 1000, birthday: "2001-10-20"};
  workers = [ {id: 100, name: "Alex", salary: 1000, birthday: "2001-10-20", address:{city:'blr', state: 'KA', pin: '59583'}}, 
    {id: 100, name: "Alex", salary: 1000, birthday: "2001-06-20", address:{city:'blr', state: 'KA', pin: '59583'} },
    {id: 200, name: "Joe", salary: 2000, birthday: "2001-07-20", address:{city:'chn', state: 'TN', pin: '59683'} },
    {id: 300, name: "John", salary: 3000, birthday: "2001-10-20", address:{city:'hyd', state: 'TA', pin: '64258'} }
   ];
   users = [{username:"Sachin", gender : "Male"}, {username:"Preeti", gender: "Female"}];

}
