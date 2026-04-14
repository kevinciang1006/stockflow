# StockFlow — Stock Feed Module Demo

A focused Angular 21 portfolio demo showcasing a Stock Feed module for store owners to receive, review, and commit supplier invoices into a stock management system. Built to demonstrate production-quality Angular development patterns for an Upwork contract demo.

The module mirrors a real workflow: incoming supplier invoices arrive, are reviewed by staff, then committed via a structured call/response pattern — analogous to calling stored database procedures.

**Live demo:** https://kevinciang1006.github.io/stockflow

---

## Tech Stack

![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Angular Material](https://img.shields.io/badge/Angular_Material-21-757575?logo=angular)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)
![json-server](https://img.shields.io/badge/json--server-mock_API-brightgreen)

## Features

- **Invoice List** — filterable by status (Pending / Reviewed / Committed), searchable by supplier or invoice number
- **Invoice Detail** — supplier info, line items table, summary panel, sticky action bar
- **Commit Flow** — Angular Material dialog with loading state and graceful error handling
- **Status transitions** — Pending → Reviewed → Committed, with Reject at any stage
- **Mock stored procedure pattern** — each action maps to a typed `ProcedureResponse` call/response
- **Production fallback** — GitHub Pages build uses static mock data (no backend required)

## Getting Started

```bash
npm install

# Run with live API (Angular dev server + json-server on :3000)
npm run dev

# Angular dev server only
npm start

# json-server only
npm run api
```

## Production Build

```bash
npm run build:prod
# Output: dist/stockflow/browser/
```

## Angular Patterns Demonstrated

- Standalone components (Angular 21 default)
- `signal()` / `computed()` for all state — no NgRx
- `inject()` function DI — no constructor injection
- `input()` / `output()` functions — no `@Input` / `@Output` decorators
- `@if` / `@for` control flow — no `*ngIf` / `*ngFor`
- `ChangeDetectionStrategy.OnPush` on every component
- Lazy-loaded routes with `loadComponent`
- Typed HTTP responses — zero `any` types

## Stored Procedure Pattern

Each action (mark reviewed, commit, reject) calls a dedicated service method that returns an `Observable<ProcedureResponse>`. This mirrors how enterprise stock systems invoke stored procedures and handle typed responses:

```ts
interface ProcedureResponse {
  success: boolean;
  message: string;
  updatedInvoice?: Invoice;
}
```

In development, calls hit `json-server`. In production (GitHub Pages), the service detects `environment.production` and returns static mock data via `of()` with a simulated 600ms delay — keeping the demo fully interactive without a backend.
