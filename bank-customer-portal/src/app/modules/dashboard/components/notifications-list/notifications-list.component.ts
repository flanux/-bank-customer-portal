import { Component } from '@angular/core';

@Component({
    selector: 'notifications-list',
    templateUrl: './notifications-list.component.html',
    styleUrls: ['./notifications-list.component.scss']
})

export class NotificationsListComponent {
    notifications = [
        {message: 'Your EMI is due in 3 days'}, 
        {message: 'Low balance alert on checking Account'}
    ];
}