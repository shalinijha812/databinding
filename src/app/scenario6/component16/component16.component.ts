import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component16',
  templateUrl: './component16.component.html',
  styleUrls: ['./component16.component.css']
})
export class Component16Component implements OnInit {

  public msg:string;
  onReceiving(msgFromChild:string){
    this.msg=msgFromChild;
  }
  constructor() { }

  ngOnInit() {
  }

}
