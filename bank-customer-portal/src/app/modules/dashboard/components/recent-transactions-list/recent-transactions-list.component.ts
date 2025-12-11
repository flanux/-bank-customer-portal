import { Component } from '@angular/core';

@Component({
    selector: 'recent-transactions-list',
    templateUrl: './recent-transactions-list.component.html',
    styleUrls: ['./recent-transactions-list.component.scss']
})

export class RecentTransactionsListComponent {
    transactions = [
        {date: 'jan 01', description: 'NEFT Transfer', amount: -500},
        {date: 'jan 02', description: 'Salary', amount: 2000},
        {date: 'jan 03', description: 'ATM Withdrawl', amount: -300}
    ];
}