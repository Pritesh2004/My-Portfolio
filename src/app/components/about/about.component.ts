import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import AOS from 'node_modules/aos';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{
  


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }


  openDialog(){
    this.dialog.open(DialogAnimationsExampleDialog);
  }
}



@Component({
  selector: 'extra-info',
  templateUrl: 'extra-info.html',
  standalone: true,
  imports: [MatButtonModule]
})
export class DialogAnimationsExampleDialog {
  constructor() {}
}