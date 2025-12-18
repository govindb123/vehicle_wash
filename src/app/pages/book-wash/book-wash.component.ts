import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './book-wash.component.html',
  styleUrls: ['./book-wash.component.scss']
})
export class BookWashComponent {

  form = this.fb.group({
    name: [''], // optional
    mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // ✅ REQUIRED
    houseNo: [''], // optional
    address: ['', Validators.required], // ✅ REQUIRED
    vehicleNumber: [''], // optional
    vehicle: [''], // optional
    mapLink: [''] // optional Google Maps link
  });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = this.form.value;

    const message = `🚗 Vehicle Wash Booking

    Name: ${data.name || 'N/A'}
    Mobile: ${data.mobile}
    House No: ${data.houseNo || 'N/A'}
    Address: ${data.address}
    Vehicle: ${data.vehicle || 'N/A'}
    Vehicle No: ${data.vehicleNumber || 'N/A'}
    📍 Location: ${data.mapLink || 'Not shared'}`;

    const whatsappNumber = '917057591559';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
