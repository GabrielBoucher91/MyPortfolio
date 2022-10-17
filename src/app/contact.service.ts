import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  baseUrl =
    'https://us-central1-contactemail-934c2.cloudfunctions.net/sendMailOverHTTP';

  constructor(private http: HttpClient) {}

  sendContactForm(formData: any) {
    const { name, email, subject, message } = formData;
    return this.http.post<any>(this.baseUrl, {
      name,
      from: email,
      to: 'gab.boucher91@gmail.com',
      subject,
      text: message,
    });
  }
}
