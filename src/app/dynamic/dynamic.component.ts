import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  yuri = 'Show/Hide Employee Data'
  message = true
  headerTable : Array<string> = new Array('NAME','GENDER','CODE');
  employeeDataTable : Array <Array<any>> = new Array(['Shrey','M',98],['Naveen','M',51],['Sonia','F',67]);
  receivedToggle :  boolean = false
  constructor() {
     
   }

  ngOnInit(): void {
  }

  togglefunc(e :boolean){
    this.receivedToggle = e
  }

}
