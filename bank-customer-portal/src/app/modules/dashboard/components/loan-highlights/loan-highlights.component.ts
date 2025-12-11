import { Component } from '@angular/core';

@Component({
    selector: 'loan-highlights',
    templateUrl: './loan-highlights.component.html',
    styleUrls: ['./loan-highlights.component.scss']
})

export class LoanHighlightsComponent {
    loans = [
        {name: 'home loan', nextEMI: 15000}, 
        {name: 'Education Loan', nextEMI: 5000}
    ];
}