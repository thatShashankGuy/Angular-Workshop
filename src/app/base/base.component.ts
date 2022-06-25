import { Component, OnInit, OnDestroy,HostListener, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit,OnDestroy,OnChanges{
  textfromArea : string = 'no data'
  title :string  = 'Angular Basic Component'
  nextTitle : string = 'new Title'
  color :string = 'color : blue'
  ngModText : string  = ''
  random : number = 0; 
  constructor() {
   }

  ngOnInit(): void {
    this.random = Math.floor((Math.random() * 10000) + 1  )
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Items destroyed');
  }

  addText(event :any): void {
      this.textfromArea = event.target.value
  }
  removeText(): string {
    this.textfromArea = ''
    return this.textfromArea
  }

}
