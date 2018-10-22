import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component23',
  templateUrl: './component23.component.html',
  styleUrls: ['./component23.component.css']
})
export class Component23Component implements OnInit {
  @Output() childEvent = new EventEmitter();
  fireEvent(){
    this.childEvent.emit('yourName');

  }

  constructor() { }

  ngOnInit() {
  }

}
