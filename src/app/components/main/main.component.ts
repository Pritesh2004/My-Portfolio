import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  menuVariable:boolean=false;

  openMenu(){
    this.menuVariable =! this.menuVariable;
  }
}
