import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  templateUrl: './scenario2.component.html',
  styleUrls: ['./scenario2.component.css']
})
export class Scenario2Component {
  display1 = "";
  //result = '';
  
  onkeyUp(){
    console.log(this.display1);
  }

  

}
