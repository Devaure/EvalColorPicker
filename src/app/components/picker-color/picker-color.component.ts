import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-picker-color',
  templateUrl: './picker-color.component.html',
  styleUrls: ['./picker-color.component.scss']
})
export class PickerColorComponent implements AfterViewInit {


  @Input()public hue:number=0;
  @Input()public sat:number = 0;
  @Input()public light:number = 0;

  title:string = "ColorPicker";
  rangeMinHue:number = 0;
  rangeMaxHue:number = 360;
  rangeMinSat:number = 0;
  rangeMaxSat:number = 100;
  rangeMinLight:number = 0;
  rangeMaxLight:number = 100;

  colors={
    thehue: "",
    theSat: "",
    theLight: ""
  }

  constructor() { }
  ngAfterViewInit(): void {
  
   
   
  }

  ngOnInit(): void {
  
  }

  setValue(e:Event){
    this.hue = parseInt((<HTMLInputElement>e.target).value);
  }

  setValueSlideTwo(e:Event){
    this.sat = parseInt((<HTMLInputElement>e.target).value);
  }

  setValueSlideThree(e:Event){
    this.light = parseInt((<HTMLInputElement>e.target).value);
  }

  myStyle(){
    return `hsl(${this.hue}, ${this.sat}%, ${this.light}%)`
  }

  myStyleSecondary(){
    return `hsl(${this.hue+30}, ${this.sat}%, ${this.light}%)`
  }

  myStyleTertiary(){
    return `hsl(${this.hue+180}, ${this.sat}%, ${this.light}%)`
  }
 

 

}
