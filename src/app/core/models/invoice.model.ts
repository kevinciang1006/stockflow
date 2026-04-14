export type InvoiceStatus = 'pending' | 'reviewed' | 'committed' | 'rejected';

export interface LineItem {
  id: string;
  sku: string;
  description: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  supplierName: string;
  supplierContact: string;
  supplierAddress: string;
  date: string;
  status: InvoiceStatus;
  subtotal: number;
  tax: number;
  total: number;
  lineItems: LineItem[];
}

export interface ProcedureResponse {
  success: boolean;
  message: string;
  updatedInvoice?: Invoice;
}
