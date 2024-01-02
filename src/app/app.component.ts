import { Component } from '@angular/core';
import AOS from 'node_modules/aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Portfolio';

  ngOnInit() {
   

    AOS.init({
      startEvent: 'load',
      offset:150,
      duration: 1300, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      

    });
  }
}
