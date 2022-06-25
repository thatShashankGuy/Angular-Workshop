import { visitAll } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
 
  visible : boolean = false
  constructor() { }
   //parent to child --@input
  @Input() messageRecieved :string = ''
  @Input() jack : boolean = false
  //Child to parent --@output
  @Output() event = new EventEmitter<boolean>()
  @Output() messageEven = new EventEmitter<string>()

  ngOnInit(): void {
  }

  showToggle() : void {
    this.visible = !this.visible
    this.event.emit(this.visible)
  }

}
