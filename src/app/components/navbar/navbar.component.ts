import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  menuVariable:boolean=false;

  openMenu(){
    this.menuVariable =! this.menuVariable;
  }

  

}
