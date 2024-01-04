import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EmailServiceService } from 'src/app/email-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  
  ngOnInit(): void {

  
  }

  public mail = {
    email: '',
    subject: '',
    message: '',
    name: '',

  };

  constructor(private emailService: EmailServiceService, private router: Router) {}

  refreshPage() {
    location.reload();
  }

 

  sendEmail() {
    this.emailService.sendEmail(this.mail).subscribe(
     
      (data) => {
        console.log('Email sent successfully:'+ data);
        console.log(this.mail);
        
        Swal.fire({
          title: "Email Recieved",
          text: "Wait for my reply",
          icon: "success",
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            this.refreshPage();
          }
        });
      },

      (error) => {
        console.error('Error sending email:'+ error);
      
        
      }
      
    );
  }
}
