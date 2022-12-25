import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  
  constructor(private http: HttpClient) { }

  sendEmail(to: string, subject: string, message: string){
    // Configura los encabezados de la solicitud
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    // Prepara la solicitud POST con los datos del correo
    const body = `from=ju4nc4rrill00@gmail.com&to=${to}&subject=${subject}&text=${message}`;

    // Envía la solicitud POST a la API de Mailgun
    this.http.post('https://api.mailgun.net/v3/tu-dominio.com/messages', body, { headers }).subscribe(
      response => console.log('Correo enviado'),
      error => console.error('Error al enviar el correo:', error)
    );
  }

}
