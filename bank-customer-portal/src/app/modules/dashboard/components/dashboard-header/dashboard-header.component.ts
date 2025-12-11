import { Component } from '@angular/core';

@Component({
    selector: 'dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: ['./dashboard-header.component.scss']
})

export class DashboardHeaderComponent{
    user = {name: 'John Doe'};
}