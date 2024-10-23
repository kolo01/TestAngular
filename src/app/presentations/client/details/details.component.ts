import { Component } from '@angular/core';
import { Property } from '../../../domain/interfaces/property';
import { ActivatedRoute } from '@angular/router';
import { BaseServiceService } from '../../../core/services/baseService/base-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  visited = "https://my.matterport.com/show/?m=phCH7aCWGPR&play=1"

  property: Property[] = []
  id :number = 0
  slug :any = null
  constructor(private route: ActivatedRoute, private baseServices: BaseServiceService) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.slug= params.get('slug');
      // console.log("slug",this.slug);
      this.id = parseInt(this.slug);
      this.baseServices.getOne(this.id,`properties`).subscribe((data) => {
        this.property = Object.values(data);
        console.log("this property ::::::",this.property)
      },
      (error) => {
        console.error('Error fetching properties:', error);
      });

    });




}
}
