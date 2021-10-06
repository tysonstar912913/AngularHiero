import { Component, OnInit } from '@angular/core';
import { HireodataService } from '../hireodata.service'

@Component({
  selector: 'app-jobcategories',
  templateUrl: './jobcategories.component.html',
  styleUrls: ['./jobcategories.component.css']
})
export class JobcategoriesComponent implements OnInit {
  job_categories: Object;

  constructor(private data: HireodataService) { }

  ngOnInit() {
    this.job_categories = this.data.get_popular_job_categories();
  }

}
