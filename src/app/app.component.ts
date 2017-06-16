import { Component, OnInit } from '@angular/core';
import { ChooseValueUnitsComponent } from './choose-value-units/choose-value-units.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Urban Ruler';
  MeasureTypes = ['Length', 'Distance',
            'Height', 'Depth', "Area"];

  UnitData = [
    {
      name:"Length"
    },
    {
      name:"Distance"
    },
    {
      name:"Height"
    },
    {
      name:"Depth"
    },
    {
      name:"Area"
    }



  ];

  testVar: string;
  selectedType: any;
  selected: boolean = false;


  constructor(){
    this.testVar = "bob hoskins";
  }

  ngOnInit() {
    this.selectedType = 'select a type of measurement';
    this.selected = false;
  }

  setSelection(type:any){
    console.log("setting..." + type);
    	this.selectedType = type;
      this.selected = true;
  }
}
