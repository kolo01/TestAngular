import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Property } from '../../../domain/interfaces/property';
import { BaseServiceService } from '../../../core/services/baseService/base-service.service';

@Component({
  selector: 'app-all-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-properties.component.html',
  styleUrl: './all-properties.component.scss'
})
export class AllPropertiesComponent {
  property: Property[] = [];

  constructor(private baseServices: BaseServiceService) {}

  ngOnInit(): void {
    this.baseServices.getAll(`properties/`).subscribe(
      (data) => {
        this.property = data;
        console.log('all product ::::::', this.property);
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }
}
