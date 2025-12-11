import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { AccountSummaryCardComponent } from './components/account-summary-card/account-summary-card.component';
import { RecentTransactionsListComponent } from './components/recent-transactions-list/recent-transactions-list.component';
import { LoanHighlightsComponent } from './components/loan-highlights/loan-highlights.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({

    declarations: [
        DashboardHomeComponent,
        DashboardHeaderComponent,
        AccountSummaryCardComponent,
        RecentTransactionsListComponent,
        NotificationsListComponent,
        LoanHighlightsComponent   
    ],

    imports: [
        CommonModule,
        DashboardRoutingModule
    ]
})

export class DashboardModule {}