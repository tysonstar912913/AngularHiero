import { Component, OnInit } from '@angular/core';
import { HireodataService } from '../hireodata.service'

@Component({
  selector: 'app-featuredcities',
  templateUrl: './featuredcities.component.html',
  styleUrls: ['./featuredcities.component.css']
})
export class FeaturedcitiesComponent implements OnInit {
  featured_cities: Object;

  constructor(private data: HireodataService) { }

  ngOnInit() {
    this.featured_cities = this.data.get_featured_cities();
  }

}
