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


  openExperienceDialog(){
    this.dialog.open(DialogForExperience);
  }

  openEducationDialog(){
    this.dialog.open(DialogForEducation);
  }

  openCertificateDialog(){
    this.dialog.open(DialogForCertificate);
  }

  openProjectDialog(){
    this.dialog.open(DialogForProject);
  }

  openProject1Dialog(){
    this.dialog.open(DialogForProject1);
  }

  openProject2Dialog(){
    this.dialog.open(DialogForProject2);
  }
}



@Component({
  selector: 'exp-dialog',
  templateUrl: 'exp-dialog.html',
  standalone: true,
  imports: [MatButtonModule]
})
export class DialogForExperience {
  constructor() {}
}


@Component({
  selector: 'edu-dialog',
  templateUrl: 'edu-dialog.html',
  standalone: true,
  imports: [MatButtonModule]
})
export class DialogForEducation {
  constructor() {}
}


@Component({
  selector: 'certificate-dialog',
  templateUrl: 'certificate-dialog.html',
  standalone: true,
  imports: [MatButtonModule]
})
export class DialogForCertificate {
  constructor() {}
}


@Component({
  selector: 'project-dialog',
  templateUrl: 'project-dialog.html',
  standalone: true,
  imports: [MatButtonModule]
})
export class DialogForProject {
  constructor() {}
}


@Component({
  selector: 'pro1-dialog',
  templateUrl: 'pro1-dialog.html',
  standalone: true,
  imports: [MatButtonModule]
})
export class DialogForProject1 {
  constructor() {}
}


@Component({
  selector: 'pro2-dialog',
  templateUrl: 'pro2-dialog.html',
  standalone: true,
  imports: [MatButtonModule]
})
export class DialogForProject2 {
  constructor() {}
}
