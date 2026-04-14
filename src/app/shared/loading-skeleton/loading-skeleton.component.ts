import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-skeleton',
  template: `
    @for (row of rows(); track $index) {
      <div class="flex gap-4 px-4 py-3 border-b border-slate-100">
        <div class="h-4 bg-slate-200 rounded animate-pulse w-24"></div>
        <div class="h-4 bg-slate-200 rounded animate-pulse w-36"></div>
        <div class="h-4 bg-slate-200 rounded animate-pulse w-24"></div>
        <div class="h-4 bg-slate-200 rounded animate-pulse w-20"></div>
        <div class="h-4 bg-slate-200 rounded animate-pulse w-16"></div>
        <div class="h-4 bg-slate-200 rounded animate-pulse w-28 ml-auto"></div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSkeletonComponent {
  count = input<number>(5);

  rows = () => Array.from({ length: this.count() });
}
