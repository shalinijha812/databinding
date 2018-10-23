import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component36',
  templateUrl: './component36.component.html',
  styleUrls: ['./component36.component.css']
})
export class Component36Component implements OnInit {
  @Input('data') msgFromSibling:string;

  constructor() { }

  ngOnInit() {
  }

}
