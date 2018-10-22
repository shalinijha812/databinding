import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-component13',
  templateUrl: './component13.component.html',
  styleUrls: ['./component13.component.css']
})
export class Component13Component implements OnInit {
  @Output()
  public childEvent=new EventEmitter;
  

  constructor() { }

  ngOnInit() {
  }

}
