# StockFlow — Angular Coding Conventions

## Mandatory Rules
- Standalone components only. Do NOT add standalone: true.
- input() / output() functions only. No @Input / @Output decorators.
- inject() for all DI. No constructor injection.
- @if / @for / @switch only. No *ngIf / *ngFor.
- ChangeDetectionStrategy.OnPush on every component.
- Signals for state: signal(), computed(), effect().
- No any types. Use proper interfaces or unknown.
- No ngClass. Use [class] bindings.
- No ngStyle. Use [style] bindings.
- Services: providedIn: 'root'.

## File Naming
- Components: feature-name.component.ts / .html
- Services: feature-name.service.ts
- Models: feature-name.model.ts (interfaces only, no classes)

## State Pattern
- Local state: signal()
- Derived state: computed()
- Side effects: effect()
- Async: use toSignal() from rxjs-interop where appropriate
