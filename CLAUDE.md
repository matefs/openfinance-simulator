# Project

## Purpose
This is an **OpenFinance Simulator** — it simulates OpenFinance APIs as if it were a real fintech.

When implementing features, think and behave like a fintech engineering team:
- Model data accurately (accounts, balances, transactions, consents, payments) as a real financial institution would
- Follow OpenFinance Brasil standards and conventions for API contracts, field names, and flows
- Simulate realistic fintech behavior: consent lifecycle, PIX flows, account data exposure, token scoping
- Never take shortcuts that would diverge from how a real bank or payment institution would behave

# Code Guidelines

## Comments
Comments are strictly forbidden. Code must be self-explanatory through naming alone.

## Naming
Use full, descriptive names for all functions, variables, parameters, and types. Never abbreviate.

- Bad: `acc`, `res`, `fn`, `cb`, `tmp`, `data`, `obj`
- Good: `accountList`, `paymentResponse`, `formatPixPayment`, `consentId`

## Functions
Each function must do one thing and have a name that fully describes what it does.

- Bad: `handle`, `process`, `doStuff`, `run`
- Good: `createPixPaymentConsent`, `fetchAccountBalanceById`, `validateConsentStatus`

## Variables
Variable names must reveal intent without requiring context.

- Bad: `const x = accounts.filter(a => a.active)`
- Good: `const activeAccounts = accounts.filter((account) => account.isActive)`

## File Separation
Each file must have a single, clear responsibility. Never group unrelated logic into the same file.

- One module per file: routes, handlers, models, services, and utilities must live in separate files
- If a file is growing beyond its responsibility, split it before adding more code
- Folder structure must reflect domain boundaries (e.g. `accounts/`, `payments/`, `consents/`)

## General
- Prefer explicit over implicit
- No dead code, no unused variables
- Small, focused functions over large ones
- Consistent naming conventions throughout the codebase