import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-wash.component.html',
  styleUrls: ['./book-wash.component.scss']
})
export class BookWashComponent {
  form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      houseNo: ['', Validators.required],
      address: ['', Validators.required],
      vehicleNumber: ['', Validators.required],
      mapLink: ['', Validators.required], // ✅ added
      vehicle: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const data = this.form.value;

      const message = `🚗 Vehicle Wash Booking

Name: ${data.name}
Mobile: ${data.mobile}
House No: ${data.houseNo}
Address: ${data.address}
Vehicle: ${data.vehicle}
Vehicle No: ${data.vehicleNumber}
📍 Location: ${data.mapLink}`;

      const whatsappNumber = '917057591559'; // your WhatsApp number
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(url, '_blank');
    }
  }
}
