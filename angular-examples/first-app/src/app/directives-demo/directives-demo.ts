import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  standalone: false,
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css',
})
export class DirectivesDemo {
  names = ["John", "Sid", "Joe", "Mark"];
  users = [{ id: 100, name: "Alex" }, { id: 200, name: "Brad" }, { id: 300, name: "Greg" }];
  username: string | undefined = undefined;

  option = 0;
  toggle() {
    this.option ++;
    if (this.username == undefined) {
      this.username = 'Guest'
    }
    else
      this.username = undefined;

    if(this.option==5) this.option=0;
  }


}
