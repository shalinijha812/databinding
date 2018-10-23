import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component26',
  templateUrl: './component26.component.html',
  styleUrls: ['./component26.component.css']
})
export class Component26Component implements OnInit {
  @Output() childEvent=new EventEmitter<string>();
  tempMsg:string;
  onkeyUp(initialMsg:string){
    this.tempMsg=initialMsg;
    console.log(this.tempMsg);
  }
  connectToChild(initialMsg:string){
    this.childEvent.emit(initialMsg);

  }
  

  constructor() { }

  ngOnInit() {
  }

}
