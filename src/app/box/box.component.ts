import { visitAll } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
 
  visible : boolean = false
  constructor() { }

  @Output() event = new EventEmitter<boolean>()

  ngOnInit(): void {
  }

  showToggle() : void {
    this.visible = !this.visible
    this.event.emit(this.visible)
  }

}