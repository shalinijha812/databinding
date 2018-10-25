import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-module-comp',
  templateUrl: './module-comp.component.html',
  styleUrls: ['./module-comp.component.css']
})
export class ModuleCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('name') name1: string;
  
}
