import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  showForm = false;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  onShowForm() {
    this.showForm = true;
  }

  sendEmail() {
    console.log(this.contactForm.value);
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
