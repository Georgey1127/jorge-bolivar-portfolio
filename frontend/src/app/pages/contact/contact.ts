import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SectionTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  messageSent = false;

  contactForm;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Contact form submitted:', this.contactForm.value);

    this.messageSent = true;
    this.contactForm.reset();
  }
}