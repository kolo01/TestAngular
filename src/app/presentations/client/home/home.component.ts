import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseServiceService } from '../../../core/services/baseService/base-service.service';
import { Property } from '../../../domain/interfaces/property';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  properties : Property[] = []
//   constructor(  private baseService: BaseServiceService) {

//   }

// ngOnInit(): void {
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   //Add 'implements OnInit' to the class.
//   this.baseService.getAll("properties/").subscribe( (data) => {
//     this.properties = data;
//     this.properties = this.properties.reverse().slice(0,6)
//     console.log(this.properties)
//   },
//   (error) => {
//     console.error('Error fetching properties:', error);
//   });
// }

// saveTolocalstorage(data:any): void {
//   localStorage.setItem('property', JSON.stringify(data));

// }
}
