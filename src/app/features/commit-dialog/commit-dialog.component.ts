import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CurrencyPipe } from '@angular/common';
import { InvoiceService } from '../../core/services/invoice.service';
import { Invoice } from '../../core/models/invoice.model';

export interface CommitDialogData {
  invoiceId: string;
  invoiceNumber: string;
  total: number;
}

@Component({
  selector: 'app-commit-dialog',
  imports: [MatDialogModule, MatButtonModule, MatProgressSpinnerModule, CurrencyPipe],
  template: `
    <h2 mat-dialog-title class="text-lg font-semibold">Commit Invoice</h2>
    <mat-dialog-content>
      <p class="text-slate-600 mb-2">
        Are you sure you want to commit invoice
        <strong class="text-slate-900">{{ data.invoiceNumber }}</strong>
        to stock?
      </p>
      <p class="text-slate-600">
        Total amount:
        <strong class="text-slate-900 text-lg">{{ data.total | currency }}</strong>
      </p>
      @if (errorMessage()) {
        <div class="mt-3 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {{ errorMessage() }}
        </div>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-stroked-button [mat-dialog-close]="null" [disabled]="isCommitting()">
        Cancel
      </button>
      <button
        mat-flat-button
        color="primary"
        (click)="confirm()"
        [disabled]="isCommitting()"
        class="ml-2 min-w-[100px]"
      >
        @if (isCommitting()) {
          <mat-spinner diameter="18" class="inline-block" />
        } @else {
          Confirm Commit
        }
      </button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommitDialogComponent {
  readonly data: CommitDialogData = inject(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<CommitDialogComponent>);
  private readonly invoiceService = inject(InvoiceService);

  isCommitting = signal(false);
  errorMessage = signal<string | null>(null);

  confirm(): void {
    this.isCommitting.set(true);
    this.errorMessage.set(null);

    this.invoiceService.commitInvoice(this.data.invoiceId).subscribe({
      next: (response) => {
        this.isCommitting.set(false);
        if (response.success) {
          this.dialogRef.close(response.updatedInvoice);
        } else {
          this.errorMessage.set(response.message || 'Commit failed. Please try again.');
        }
      },
      error: () => {
        this.isCommitting.set(false);
        this.errorMessage.set('An unexpected error occurred. Please try again.');
      },
    });
  }
}
