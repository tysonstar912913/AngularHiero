import { Component, OnInit } from '@angular/core';
import { HireodataService } from '../hireodata.service'

@Component({
  selector: 'app-featuredjobs',
  templateUrl: './featuredjobs.component.html',
  styleUrls: ['./featuredjobs.component.css']
})
export class FeaturedjobsComponent implements OnInit {
  featured_jobs: Object;

  constructor(private data: HireodataService) { }

  ngOnInit() {
    this.featured_jobs = this.data.get_featured_jobs();
  }

}
