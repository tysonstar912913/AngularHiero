import { Component, OnInit } from '@angular/core';
import { HireodataService } from '../hireodata.service'

@Component({
  selector: 'app-introbanner',
  templateUrl: './introbanner.component.html',
  styleUrls: ['./introbanner.component.css']
})
export class IntrobannerComponent implements OnInit {
  intro_count_data: Object;

  constructor(private data: HireodataService) { }

  ngOnInit() {
    this.intro_count_data = this.data.get_introbanner_countdata();
  }

}
