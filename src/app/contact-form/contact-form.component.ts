import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [
    trigger('slide', [
      transition(':leave', [
        style({}),
        animate('0.3s ease-in', style({ opacity: 0 })),
      ]),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ContactFormComponent implements OnInit {
  showForm = false;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private contact: ContactService) {}

  ngOnInit(): void {}

  onShowForm() {
    this.showForm = true;
  }

  sendEmail() {
    this.contact.sendContactForm(this.contactForm.value).subscribe();
    this.resetForm();
    this.showForm = false;
  }

  resetForm() {
    this.contactForm.patchValue({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    this.contactForm.get('name');
  }
}
