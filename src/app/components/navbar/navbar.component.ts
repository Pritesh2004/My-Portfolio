import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  
  menuVariable:boolean=false;

  openMenu(){
    this.menuVariable =! this.menuVariable;
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof PopStateEvent) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
  
  }

  

}
