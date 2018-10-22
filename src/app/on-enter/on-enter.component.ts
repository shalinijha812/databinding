import { Component} from '@angular/core';

@Component({
  selector: 'app-on-enter',
  templateUrl: './on-enter.component.html',
  styleUrls: ['./on-enter.component.css']
})
export class OnEnterComponent  {

  value = '';
  onEnter(value: string) { this.value = value; }
  // constructor() { }

  // ngOnInit() {
  // }

}
