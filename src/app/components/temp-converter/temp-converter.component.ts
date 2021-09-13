import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent {

  convertedTemp = 0;
  constructor() { }

  convertToF(tempInC: number) {
    this.convertedTemp = tempInC * 2;
  }

  convertToC(tempInF: number) {
    this.convertedTemp = tempInF / 2;
  }

}
