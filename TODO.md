# OpenFinance Simulator — TODO

## Correções imediatas

- [x] **#1** Registrar as 2 rotas ausentes no router
  - `GET /open-banking/consents/v1/consents` → `consentsGet.ts`
  - `GET /open-banking/investments/v1/treasure-titles` → `investmentsTreasureTitlesGet.ts`

---

## Fundação (pré-requisito para todo o resto)

- [ ] **#2** Criar Mongoose schemas para todos os domínios
  - Consent (data sharing + payment consent)
  - Account, AccountBalance, AccountTransaction
  - CreditCardAccount, CreditCardBill, CreditCardTransaction
  - Customer (personal + business)
  - Loan / Financing / InvoiceFinancing / UnarrangedOverdraft Contract
  - PixPayment
  - Investment (bank-fixed-income, credit-fixed-income, variable-income, treasure-title)
  - Exchange Operation
  - Cada model em `src/models/<domain>/<Entity>.model.ts`

- [ ] **#3** Implementar seed de dados realistas no MongoDB
  - 2–3 clientes PF e PJ com CPF/CNPJ válidos
  - Contas corrente e poupança com saldos
  - Cartões de crédito com faturas e transações
  - Contratos de empréstimo com parcelas
  - Investimentos variados
  - Histórico de transações dos últimos 90 dias
  - Rodar via `npm run seed`

---

## Fluxos financeiros principais

- [ ] **#4** Implementar ciclo de vida completo do Consent (data sharing)
  - Estados: `AWAITING_AUTHORISATION` → `AUTHORISED` | `REJECTED` → `REVOKED`
  - `POST /consents` → cria com status `AWAITING_AUTHORISATION`
  - `GET /consents/:id` → retorna estado atual
  - `DELETE /consents/:id` → transiciona para `REVOKED`
  - `GET /consents` → listar (endpoint não registrado, incluir aqui)
  - Criar `src/services/consentLifecycleService.ts`

- [ ] **#5** Implementar fluxo completo de pagamento PIX
  - `POST /payments/v1/consents` → cria PaymentConsent `AWAITING_AUTHORISATION`
  - `PUT /payments/v1/consents/:id` → transiciona para `AUTHORISED`
  - `POST /payments/v1/pix/payments` → cria PixPayment `PDNG` → `ACCP` → `ACSC`
  - `GET /payments/v1/pix/payments/:id` → retorna estado atual
  - Simular transição assíncrona de status
  - Criar `src/services/pixPaymentService.ts` e `src/services/paymentConsentService.ts`

---

## Conectar domínios ao MongoDB

- [ ] **#6** Conectar endpoints de Accounts
  - `GET /accounts` — listar contas do cliente
  - `GET /accounts/:id` — detalhe
  - `GET /accounts/:id/balances` — saldo atual
  - `GET /accounts/:id/transactions` — histórico com filtro por data
  - `GET /accounts/:id/overdraft-limits` — limite do cheque especial
  - Criar `src/services/accountService.ts`

- [ ] **#7** Conectar endpoints de Credit Cards
  - `GET /credit-cards-accounts` — listar cartões
  - `GET /credit-cards-accounts/:id` — detalhe
  - `GET /credit-cards-accounts/:id/bills` — faturas
  - `GET /credit-cards-accounts/:id/limits` — limites por tipo
  - `GET /credit-cards-accounts/:id/transactions` — transações com filtro
  - Criar `src/services/creditCardService.ts`

- [ ] **#8** Conectar endpoints de Customers
  - `GET /customers/personal/identifications`
  - `GET /customers/business/identifications`
  - `GET /customers/personal/financial-relations`
  - `GET /customers/business/financial-relations`
  - Criar `src/services/customerService.ts`

- [ ] **#9** Conectar endpoints de Loans, Financings e Invoice Financings
  - Loans (5 endpoints): contratos, detalhe, pagamentos, parcelas, garantias
  - Financings (5 endpoints): mesma estrutura
  - Invoice Financings (5 endpoints): mesma estrutura
  - Criar `src/services/loanContractService.ts` reutilizável entre os 3 domínios

- [ ] **#10** Conectar endpoints de Investments
  - `GET /investments/v1/bank-fixed-incomes`
  - `GET /investments/v1/credit-fixed-incomes`
  - `GET /investments/v1/variable-incomes`
  - `GET /investments/v1/treasure-titles`
  - Criar `src/services/investmentService.ts`

---

## Infraestrutura transversal

- [ ] **#11** Implementar middleware de autenticação OAuth2
  - `src/middleware/validateAccessToken.ts` — validar Bearer token
  - `src/middleware/requireScopes.ts` — checar escopos por domínio
  - `src/services/tokenService.ts` — emitir e validar JWTs simulados
  - `POST /oauth/token` — endpoint para geração de tokens de teste
  - Aplicar apenas em rotas de dados (não em discovery/channels/products que são públicas)

- [ ] **#12** Implementar validação de request body e query params
  - Validar campos obrigatórios em `POST /payments/v1/consents`
  - Validar dados do PIX em `POST /payments/v1/pix/payments`
  - Validar query params de paginação em endpoints de lista
  - Retornar `422` com erros no formato OpenFinance quando inválido
  - Criar `src/middleware/validateRequestBody.ts`

- [ ] **#13** Implementar paginação real em todos os endpoints de lista
  - Query params: `page` (default 1), `page-size` (default 25, max 1000)
  - Retornar apenas os registros da página solicitada
  - Preencher `meta.totalRecords` e `meta.totalPages` corretamente
  - Criar `src/utils/paginateMongooseQuery.ts` como helper reutilizável

- [ ] **#14** Padronizar respostas de erro no formato OpenFinance Brasil
  - Formato: `{ errors: [{ code, title, detail }] }`
  - Códigos: `NAO_INFORMADO`, `PARAMETRO_NAO_PERMITIDO`, `NAO_ENCONTRADO`, `RECURSO_EXPIRADO`, etc.
  - Criar `src/middleware/errorHandler.ts`
  - Criar `src/errors/OpenFinanceError.ts` com tipos de erro
  - Aplicar: `404` para IDs inexistentes, `403` para consent inválido, `422` para dados inválidos

- [ ] **#15** Adicionar testes de integração para os fluxos principais
  - Configurar Vitest + `mongodb-memory-server`
  - Fluxo completo de consent (criar → autorizar → revogar)
  - Fluxo completo de pagamento PIX (consent → payment → status)
  - CRUD de accounts com dados reais
  - Validação de erros `404`, `422`, `403`
  - Testes em `src/__tests__/<domain>/`

---

## Ordem recomendada

```
#1 → #2 → #3 → #14 → #4 → #5 → #6 → #7 → #8 → #9 → #10 → #11 → #12 → #13 → #15
```