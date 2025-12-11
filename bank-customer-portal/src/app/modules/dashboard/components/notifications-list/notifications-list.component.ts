import { Component } from '@angular/core';

@Component({
    selector: 'notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['./notification-list.component.scss']
})

export class NotificationListComponent {
    notifications = [
        {message: 'Your EMI is due in 3 days'}, 
        {message: 'Low balance alert on checking Account'}
    ];
}