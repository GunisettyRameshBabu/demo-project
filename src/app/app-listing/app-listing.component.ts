import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-listing',
  templateUrl: './app-listing.component.html',
  styleUrls: ['./app-listing.component.css']
})
export class AppListingComponent implements OnInit {

  searchText = '';

  searchItems: any[] = [
    {id: '1', name: 'EPay'},
    {id: '2', name: 'ATP'},
    {id: '3', name: 'JDE'},
    {id: '4', name: 'Invoice Tracking'},
    {id: '5', name: 'HR Portal'},
    {id: '6', name: 'Medical Benefits'},
    {id: '7', name: 'Customer Portal'},
    {id: '8', name: 'Time Card Tracking'},
    {id: '9', name: 'Mentoring'},
    {id: '10', name: 'Budget Tracking'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  singleRouting() {
    this.router.navigate(['singleApp']);
  }


}
