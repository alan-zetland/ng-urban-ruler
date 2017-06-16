import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choose-value-units',
  templateUrl: './choose-value-units.component.html',
  styleUrls: ['./choose-value-units.component.css']
})
export class ChooseValueUnitsComponent implements OnInit {
  @Input() chosenType: string;
  @Input() selected: boolean;
  @Input() chosenMeasureData: any;
  selectedType: any;


  constructor() { }

  ngOnInit() {
    //this.chosenUnit = "hello world";
    console.log("Chosen: " + this.chosenType);
    console.log("Selection?: " + this.selected);
    console.log(this.chosenMeasureData);
  }

}
