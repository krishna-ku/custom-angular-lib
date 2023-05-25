import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BgColorService {

  private backgroundColor:string='yellow'

  setBgColor(color:string){
    this.backgroundColor=color;
  }

  getBgColor(){
    return this.backgroundColor;
  }

  // constructor() { }
}
