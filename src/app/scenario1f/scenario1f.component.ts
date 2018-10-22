import { Component } from '@angular/core';

@Component({
  selector: 'app-scenario1f',
  templateUrl: './scenario1f.component.html',
  styleUrls: ['./scenario1f.component.css']
})
export class Scenario1fComponent {
  varvalue='';
  onKey(varvalue:string){
    this.varvalue=varvalue;
  }


}
