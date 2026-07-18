import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SectionTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  messageSent = false;
  isSubmitting = false;
  submitError = '';

  contactForm;

  constructor(
    private formBuilder: FormBuilder,
    private portfolioDataService: PortfolioDataService
  ) {
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

    this.isSubmitting = true;
    this.messageSent = false;
    this.submitError = '';

    const contactMessage = {
      name: this.contactForm.value.name ?? '',
      email: this.contactForm.value.email ?? '',
      message: this.contactForm.value.message ?? '',
    };

    this.portfolioDataService.sendContactMessage(contactMessage).subscribe({
      next: () => {
        this.messageSent = true;
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Error sending contact message:', error);
        this.submitError = 'Something went wrong. Please try again later.';
        this.isSubmitting = false;
      },
    });
  }
}