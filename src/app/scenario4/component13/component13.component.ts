import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component13',
  templateUrl: './component13.component.html',
  styleUrls: ['./component13.component.css']
})
export class Component13Component implements OnInit {
  
 
  childToParentData:string;
  getOutputVal(selected:string){
    this.childToParentData=selected;
    console.log("value received from child : " + selected);
  }
  constructor() {
    
   }

  ngOnInit() {
  }

}
