import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-app',
  templateUrl: './single-app.component.html',
  styleUrls: ['./single-app.component.css']
})
export class SingleAppComponent implements OnInit {

  item: any;
  showEdit:boolean = true;
  shortDescription ;

  assetType ;

  status = true;
  strategy;
  businessCreiticality;
  vendor;
  constructor() { }

  ngOnInit(): void {
    this.item = JSON.parse( sessionStorage.getItem('app'));
    this.shortDescription = this.item.shortDescription;
    this.assetType = this.item.assetType;
    this.status = this.item.status;
    this.strategy = this.item.strtegy;
    this.businessCreiticality = this.item.businessCriticality;
    this.vendor = this.item.Vendor;
  }

  edit() {
    this.showEdit = false;
  }

}
