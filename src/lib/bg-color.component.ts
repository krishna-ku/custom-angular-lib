import { Component, OnInit } from '@angular/core';
import { BgColorService } from './bg-color.service';

@Component({
  selector: 'lib-bg-color',
  template: `
  <div [style.backgroundColor]="bgColor">
      Change my background color
    </div>
    <input type="text" [(ngModel)]="colorInput" placeholder="Enter color">
    <button (click)="changeColor()">Change</button>
  `,
  styles: [
  ]
})
export class BgColorComponent implements OnInit {

  constructor(private colorService:BgColorService) {}

  bgColor:string='';
  colorInput: string = '';
  
  ngOnInit(): void {
    this.bgColor=this.colorService.getBgColor();
  }

  changeColor() {
    this.colorService.setBgColor(this.colorInput);
    this.bgColor = this.colorInput;
    this.colorInput = '';
  }

}
