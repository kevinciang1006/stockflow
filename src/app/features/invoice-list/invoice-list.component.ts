import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

import { InvoiceService } from '../../core/services/invoice.service';
import { Invoice, InvoiceStatus } from '../../core/models/invoice.model';
import { StatusBadgeComponent } from '../../shared/status-badge/status-badge.component';
import { LoadingSkeletonComponent } from '../../shared/loading-skeleton/loading-skeleton.component';
import {
  CommitDialogComponent,
  CommitDialogData,
} from '../commit-dialog/commit-dialog.component';

type FilterTab = InvoiceStatus | 'all';

@Component({
  selector: 'app-invoice-list',
  imports: [
    RouterLink,
    CurrencyPipe,
    DatePipe,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    StatusBadgeComponent,
    LoadingSkeletonComponent,
  ],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceListComponent implements OnInit {
  private readonly invoiceService = inject(InvoiceService);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);

  invoices = signal<Invoice[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);
  activeFilter = signal<FilterTab>('all');
  searchQuery = signal('');

  readonly displayedColumns = [
    'invoiceNumber',
    'supplierName',
    'date',
    'total',
    'status',
    'actions',
  ];

  readonly filterTabs: { label: string; value: FilterTab }[] = [
    { label: 'All', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Reviewed', value: 'reviewed' },
    { label: 'Committed', value: 'committed' },
  ];

  filteredInvoices = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    return this.invoices().filter(inv => {
      const matchesFilter =
        this.activeFilter() === 'all' || inv.status === this.activeFilter();
      const matchesSearch =
        !q ||
        inv.invoiceNumber.toLowerCase().includes(q) ||
        inv.supplierName.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  });

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices(): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.invoiceService.getInvoices().subscribe({
      next: invoices => {
        this.invoices.set(invoices);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Failed to load invoices. Please try again.');
        this.isLoading.set(false);
      },
    });
  }

  setFilter(filter: FilterTab): void {
    this.activeFilter.set(filter);
  }

  onSearchChange(value: string): void {
    this.searchQuery.set(value);
  }

  openCommitDialog(invoice: Invoice): void {
    const data: CommitDialogData = {
      invoiceId: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      total: invoice.total,
    };
    const ref = this.dialog.open(CommitDialogComponent, { data, width: '420px' });
    ref.afterClosed().subscribe((updatedInvoice: Invoice | null | undefined) => {
      if (updatedInvoice) {
        this.invoices.update(list =>
          list.map(inv => (inv.id === updatedInvoice.id ? updatedInvoice : inv))
        );
        this.snackBar.open('Invoice committed successfully.', 'Dismiss', {
          duration: 3000,
          panelClass: ['snack-success'],
        });
      }
    });
  }

  rejectInvoice(invoice: Invoice): void {
    this.invoiceService.rejectInvoice(invoice.id).subscribe({
      next: response => {
        if (response.updatedInvoice) {
          this.invoices.update(list =>
            list.map(inv =>
              inv.id === response.updatedInvoice!.id ? response.updatedInvoice! : inv
            )
          );
        }
        this.snackBar.open('Invoice rejected.', 'Dismiss', {
          duration: 3000,
          panelClass: ['snack-success'],
        });
      },
      error: () => {
        this.snackBar.open('Failed to reject invoice.', 'Dismiss', {
          duration: 5000,
          panelClass: ['snack-error'],
        });
      },
    });
  }
}
