import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-compare',
  templateUrl: './if-compare.component.html',
  styleUrls: ['./if-compare.component.css']
})
export class IfCompareComponent implements OnInit {

  X:number;
  Y: number;

  constructor(){
    this.X=100;
    this.Y=200;
  }

  public getX(){
    return this.X;
  }

  public getY(){
    return this.Y;
  }
  ngOnInit(): void {
  }

}