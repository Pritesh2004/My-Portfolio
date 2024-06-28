import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { EmailServiceService } from 'src/app/email-service.service';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  ngOnInit(): void {


  }

  mail: FormGroup;


  constructor(private emailService: EmailServiceService, private router: Router, private fb: FormBuilder, private ngxService: NgxUiLoaderService) {
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
    this.ngxService.start();

    this.emailService.sendEmail(this.mail.value).subscribe(

     

      (data) => {
        console.log('Email sent successfully:', data);
        console.log(this.mail);
        this.ngxService.stop();
        Swal.fire({
            title: "Email Received",
            text: "Thank you for reaching out. I will respond shortly.",
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
