import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChooseValueUnitsComponent } from './choose-value-units/choose-value-units.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    ChooseValueUnitsComponent,
    ResultsComponent  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
