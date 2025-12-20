import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: false,
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success implements OnInit{

  username = "";
  active = inject(ActivatedRoute);

  //auto-executed when compoent is initialized
  ngOnInit(): void {
    this.active.params
    .subscribe({
      next: (p: Params) => this.username=p['user'],
      error: (error: any) => alert('error ...')
    })
  }

}
