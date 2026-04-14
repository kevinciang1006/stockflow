import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { InvoiceStatus } from '../../core/models/invoice.model';

@Component({
  selector: 'app-status-badge',
  template: `
    <span [class]="badgeClass()">{{ label() }}</span>
  `,
  styles: [`
    span {
      display: inline-flex;
      align-items: center;
      padding: 2px 10px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.025em;
      text-transform: capitalize;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBadgeComponent {
  status = input.required<InvoiceStatus>();

  badgeClass = computed(() => {
    const map: Record<InvoiceStatus, string> = {
      pending:   'bg-amber-100 text-amber-800',
      reviewed:  'bg-blue-100 text-blue-800',
      committed: 'bg-green-100 text-green-800',
      rejected:  'bg-red-100 text-red-800',
    };
    return map[this.status()];
  });

  label = computed(() => this.status());
}
