
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component25',
  templateUrl: './component25.component.html',
  styleUrls: ['./component25.component.css']
})
export class Component25Component implements OnInit {
  @Output() parentEvent=new EventEmitter<string>();
  message:string;
  childToParentData:string;
  getFromChild(userInputFromChild:string){

    this.childToParentData=userInputFromChild;
    this.parentEvent.emit(this.childToParentData);
    
    console.log("value received from child : " + this.childToParentData);
    
  }
  display()
  {
    return this.childToParentData;
  }

  

  constructor() { 

  }

  ngOnInit() {
   
  }

}
