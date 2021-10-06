import { Component, OnInit } from '@angular/core';
import { HireodataService } from '../hireodata.service'

@Component({
  selector: 'app-membershipplan',
  templateUrl: './membershipplan.component.html',
  styleUrls: ['./membershipplan.component.css']
})
export class MembershipplanComponent implements OnInit {
  membershipdata: Object;

  constructor(private data: HireodataService) { }

  ngOnInit() {
    this.membershipdata = this.data.get_membershipplan();
  }

}
