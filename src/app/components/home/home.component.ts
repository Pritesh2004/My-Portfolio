import { Component, HostListener } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit():void{

    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white'
    })
    
    writer
      .type('Java Developer')
      .rest(1500)
      .changeOps({ deleteSpeed: 80 })
      .remove(14)
      .type('Web Developer')
      .rest(1500)
      .changeOps({ deleteSpeed: 80 })
      .remove(21)
      .type('Full-Stack Developer')
      .rest(1550)
      .clear()
      .start()
          
    
  }

}
