import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Invoice, InvoiceStatus, ProcedureResponse } from '../models/invoice.model';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getInvoices(): Observable<Invoice[]> {
    if (environment.production) {
      return this.http
        .get<{ invoices: Invoice[] }>('/stockflow/assets/mock-data.json')
        .pipe(
          delay(600),
          map(data => data.invoices)
        );
    }
    return this.http.get<Invoice[]>(`${this.apiUrl}/invoices`);
  }

  getInvoice(id: string): Observable<Invoice> {
    if (environment.production) {
      return this.http
        .get<{ invoices: Invoice[] }>('/stockflow/assets/mock-data.json')
        .pipe(
          delay(600),
          map(data => {
            const invoice = data.invoices.find(inv => inv.id === id);
            if (!invoice) throw new Error(`Invoice ${id} not found`);
            return invoice;
          })
        );
    }
    return this.http.get<Invoice>(`${this.apiUrl}/invoices/${id}`);
  }

  markAsReviewed(id: string): Observable<ProcedureResponse> {
    if (environment.production) {
      return this.getInvoice(id).pipe(
        map(inv => ({
          success: true,
          message: 'Invoice marked as reviewed.',
          updatedInvoice: { ...inv, status: 'reviewed' as InvoiceStatus }
        }))
      );
    }
    return this.http
      .patch<Invoice>(`${this.apiUrl}/invoices/${id}`, { status: 'reviewed' })
      .pipe(
        map(updated => ({
          success: true,
          message: 'Invoice marked as reviewed.',
          updatedInvoice: updated
        }))
      );
  }

  commitInvoice(id: string): Observable<ProcedureResponse> {
    if (environment.production) {
      return this.getInvoice(id).pipe(
        delay(800),
        map(inv => ({
          success: true,
          message: 'Invoice committed to stock successfully.',
          updatedInvoice: { ...inv, status: 'committed' as InvoiceStatus }
        }))
      );
    }
    return this.http
      .patch<Invoice>(`${this.apiUrl}/invoices/${id}`, { status: 'committed' })
      .pipe(
        map(updated => ({
          success: true,
          message: 'Invoice committed to stock successfully.',
          updatedInvoice: updated
        }))
      );
  }

  rejectInvoice(id: string): Observable<ProcedureResponse> {
    if (environment.production) {
      return this.getInvoice(id).pipe(
        map(inv => ({
          success: true,
          message: 'Invoice rejected.',
          updatedInvoice: { ...inv, status: 'rejected' as InvoiceStatus }
        }))
      );
    }
    return this.http
      .patch<Invoice>(`${this.apiUrl}/invoices/${id}`, { status: 'rejected' })
      .pipe(
        map(updated => ({
          success: true,
          message: 'Invoice rejected.',
          updatedInvoice: updated
        }))
      );
  }
}
