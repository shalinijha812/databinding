
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component15',
  templateUrl: './component15.component.html',
  styleUrls: ['./component15.component.css']
})
export class Component15Component implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }
  userInput3:string;
  onReceiving(userInputFromGp : string)
  {
    this.userInput3=userInputFromGp;
  }

}
