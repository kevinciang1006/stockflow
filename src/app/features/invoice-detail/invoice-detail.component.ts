import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { InvoiceService } from '../../core/services/invoice.service';
import { Invoice } from '../../core/models/invoice.model';
import { StatusBadgeComponent } from '../../shared/status-badge/status-badge.component';
import {
  CommitDialogComponent,
  CommitDialogData,
} from '../commit-dialog/commit-dialog.component';

@Component({
  selector: 'app-invoice-detail',
  imports: [
    CurrencyPipe,
    DatePipe,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    StatusBadgeComponent,
  ],
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly invoiceService = inject(InvoiceService);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  invoice = signal<Invoice | null>(null);
  isLoading = signal(true);
  isActioning = signal(false);
  error = signal<string | null>(null);

  readonly lineItemColumns = ['sku', 'description', 'quantity', 'unitPrice', 'lineTotal'];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.loadInvoice(id);
  }

  loadInvoice(id: string): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.invoiceService.getInvoice(id).subscribe({
      next: inv => {
        this.invoice.set(inv);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Failed to load invoice. Please try again.');
        this.isLoading.set(false);
      },
    });
  }

  markAsReviewed(): void {
    const inv = this.invoice();
    if (!inv) return;
    this.isActioning.set(true);
    this.invoiceService.markAsReviewed(inv.id).subscribe({
      next: response => {
        this.isActioning.set(false);
        if (response.updatedInvoice) {
          this.invoice.set(response.updatedInvoice);
        }
        this.snackBar.open('Invoice marked as reviewed.', 'Dismiss', {
          duration: 3000,
          panelClass: ['snack-success'],
        });
      },
      error: () => {
        this.isActioning.set(false);
        this.snackBar.open('Failed to update invoice.', 'Dismiss', {
          duration: 5000,
          panelClass: ['snack-error'],
        });
      },
    });
  }

  openCommitDialog(): void {
    const inv = this.invoice();
    if (!inv) return;
    const data: CommitDialogData = {
      invoiceId: inv.id,
      invoiceNumber: inv.invoiceNumber,
      total: inv.total,
    };
    const ref = this.dialog.open(CommitDialogComponent, { data, width: '420px' });
    ref.afterClosed().subscribe((updatedInvoice: Invoice | null | undefined) => {
      if (updatedInvoice) {
        this.invoice.set(updatedInvoice);
        this.snackBar.open('Invoice committed successfully.', 'Dismiss', {
          duration: 3000,
          panelClass: ['snack-success'],
        });
      }
    });
  }

  rejectInvoice(): void {
    const inv = this.invoice();
    if (!inv) return;
    this.isActioning.set(true);
    this.invoiceService.rejectInvoice(inv.id).subscribe({
      next: response => {
        this.isActioning.set(false);
        if (response.updatedInvoice) {
          this.invoice.set(response.updatedInvoice);
        }
        this.snackBar.open('Invoice rejected.', 'Dismiss', {
          duration: 3000,
          panelClass: ['snack-success'],
        });
      },
      error: () => {
        this.isActioning.set(false);
        this.snackBar.open('Failed to reject invoice.', 'Dismiss', {
          duration: 5000,
          panelClass: ['snack-error'],
        });
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/invoices']);
  }
}
