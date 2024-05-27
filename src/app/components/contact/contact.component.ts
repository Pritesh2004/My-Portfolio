import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  mail: FormGroup;


  constructor(private emailService: EmailServiceService, private router: Router, private fb: FormBuilder) {
    this.mail = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  refreshPage() {
    window.location.href = "/"
  }

  sendEmail() {

    Swal.fire({
      title: "Service is temporarily unavailable",
      text: "Mail me directly to patilpritesh7277@gmail.com",
      icon: "error",
      confirmButtonText: 'OK',
    });

    this.emailService.sendEmail(this.mail.value).subscribe(

     

      (data) => {
        console.log('Email sent successfully:' + data);
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
        console.error('Error sending email:' + error);


      }

    );



  }




}
