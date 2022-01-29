import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-picker-color',
  templateUrl: './picker-color.component.html',
  styleUrls: ['./picker-color.component.scss']
})
export class PickerColorComponent implements AfterViewInit {

  @ViewChild('sliderone', {read:ElementRef}) public sliderone!: ElementRef;
  @ViewChild('slidertwo', {read:ElementRef}) public slidertwo!: ElementRef;
  @ViewChild('sliderthree', {read:ElementRef}) public sliderthree!: ElementRef;


  public hue:number=0;
  public sat:number = 0;
  public light:number = 0;

  title:string = "ColorPicker";
  rangeMinHue:number = 0;
  rangeMaxHue:number = 360;
  rangeMinSat:number = 0;
  rangeMaxSat:number = 100;
  rangeMinLight:number = 0;
  rangeMaxLight:number = 100;

  constructor() { }
  ngAfterViewInit(): void {
   console.log(this.sliderone.nativeElement.value);
   
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

}
