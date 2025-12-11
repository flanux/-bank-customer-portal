import { Component } from '@angular/core'

@Component({
    selector: 'account-summary-card',
    templateUrl: './account-summary-card.component.html',
    styleUrls: ['./account-summary-card.component.scss']
})

export class AccountSummaryCardComponent{
    accounts = [
        {name: 'savings Account', balance: 15000},
        {name: 'checking Account', balance: 2500}
    ];
}