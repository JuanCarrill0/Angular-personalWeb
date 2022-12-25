import { Component, OnInit } from '@angular/core';
import { SendEmailService } from 'src/app/services/send-email.service';

@Component({
  selector: 'contacto',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.scss']
})
export class ContactameComponent {

  constructor(private sendEmailService: SendEmailService) { }

    // Propiedades del formulario
    correo = {
      to: '',
      subject: '',
      message: ''
    };

    sendEmail() {
      // Valida que se hayan ingresado todos los campos
      if (!this.correo.to || !this.correo.subject || !this.correo.message) {
        return;
      }
  
      // Envía el correo utilizando el servicio de Mailgun
      this.sendEmailService.sendEmail(this.correo.to, this.correo.subject, this.correo.message)
    }

}

