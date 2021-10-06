import { Component, OnInit } from '@angular/core';
import { HireodataService } from '../hireodata.service'

@Component({
  selector: 'app-freelancerlist',
  templateUrl: './freelancerlist.component.html',
  styleUrls: ['./freelancerlist.component.css']
})
export class FreelancerlistComponent implements OnInit {
  freelancers: Object;

  constructor(private data: HireodataService) { }

  ngOnInit() {
    this.freelancers = this.data.get_rated_freelancers();
  }

}
