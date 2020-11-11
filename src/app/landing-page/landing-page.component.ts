import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

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

    constructor(private router: Router) {}

    ngOnInit(): void {
    }

  // tslint:disable-next-line:typedef
    routing() {
        this.router.navigate(['appListing']);
    }

}
