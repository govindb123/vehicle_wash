import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  selectedService: any = null;

  services: any = {
    carExterior: {
      title: 'Car Wash – Exterior Cleaning',
      description:
        '✨ Foam wash + shampoo. Removes dirt, mud & stains for a shiny car.'
    },
    carInterior: {
      title: 'Car Wash – Interior Cleaning',
      description:
        '🧹 Vacuum, dashboard & mats cleaning for a fresh interior.'
    },
    bikeWash: {
      title: 'Bike Wash',
      description:
        '🏍 Safe shampoo wash for bike body & wheels.'
    },
    polish: {
      title: '3M Polish',
      description:
        '✨ Premium 3M polish for long-lasting shine & protection.'
    }
  };

  openService(key: string): void {
    this.selectedService = this.services[key];
  }

  closeService(): void {
    this.selectedService = null;
  }
}
