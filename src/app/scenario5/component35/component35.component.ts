
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component35',
  templateUrl: './component35.component.html',
  styleUrls: ['./component35.component.css']
})
export class Component35Component implements OnInit {
  message:string;
  @Output() childEvent=new EventEmitter<string>();


  // fireEvent(){
  //   this.childEvent.emit('yourName');

  // }
  userInput1:string;
  onkeyUp(userInput:string){
    this.userInput1=userInput;
    console.log(this.userInput1);
  }
  connectToChild(userInput:string){
    this.childEvent.emit(userInput);

  }
  
  constructor() {
    
   }

  ngOnInit() {
  }

}
