import { Component } from '@angular/core';

@Component({
  selector: 'app-style-class-demo',
  standalone: false,
  templateUrl: './style-class-demo.html',
  styleUrl: './style-class-demo.css',//This line is added to activate css
})
export class StyleClassDemo {
  myStyles = { color: "blue", border: "2px solid black", padding: "20px" };
  status = true;

  toggle() {
    this.status = !this.status;
  }

  changeStylesToRed() {
    this.myStyles.color = "red";
    this.myStyles.border = "blue";
  }

  changeStylesToGreen() {
    this.myStyles.color = "green";
    this.myStyles.border = "red";
  }

  changeStylesToDefault() {
    this.myStyles.color = "blue";
    this.myStyles.border = "green";
  }
}
