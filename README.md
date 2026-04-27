# OpenFinance Simulator

Servidor mock que simula as APIs do Open Finance Brasil. Permite que devs integrem com o padrão Open Finance sem precisar de acesso a uma instituição financeira real.

---

## Stack

- **Runtime:** Node.js + TypeScript
- **Framework HTTP:** Koa.js
- **Roteamento:** `@koa/router`
- **Banco:** MongoDB via Mongoose
- **Execução:** `tsx` ou `node --experimental-strip-types`

---

## Como rodar

```bash
pnpm dev          # modo watch, carrega .env
pnpm dev:tsx      # modo watch via tsx
pnpm start        # produção com suporte nativo a TypeScript
pnpm start:tsx    # produção via tsx
```

```bash
docker compose up         # sobe app (porta 5681) + MongoDB (porta 27017)
docker compose up --build # reconstrói as imagens antes de subir
docker compose down       # derruba os containers
```

### Ver logs do docker: 
```bash
docker logs -f openfinance-simulator-app-1
```` 

Porta padrão: `5681` (configurável via `PORT`).

### Variáveis de ambiente

```
NODE_ENV=development
MONGO_URI=mongodb://mongo:27017/openfinance
PORT=5681
```

---

## Domínios de API

O simulador cobre todos os domínios do Open Finance Brasil. Cada pasta em `src/` corresponde a um domínio funcional:

| Domínio | O que representa |
|---|---|
| `accounts/` | Contas de pagamento e poupança — saldos, extratos, cheque especial |
| `payments/` | Iniciação de pagamento PIX — consentimento e disparo do pagamento |
| `consents/` | Ciclo de vida do consentimento de compartilhamento de dados |
| `customers/` | Dados cadastrais de PF (CPF, renda, endereço) e PJ (CNPJ, sócios, porte) |
| `credit-cards/` | Cartões de crédito — limites, faturas e transações |
| `loans/` | Contratos de empréstimo e financiamento — parcelas, garantias, histórico |
| `investments/` | Carteira de investimentos — renda fixa, variável, tesouro direto, fundos |
| `discovery/` | Metadados da instituição — status operacional e janelas de manutenção |
| `exchange/` | Operações de câmbio — taxas online e operações disponíveis |
| `insurances/` | Seguros contratados — patrimoniais (auto, residência) e de pessoas (vida, saúde) |
| `capitalization/` | Títulos de capitalização — sorteios, resgates e contribuições |
| `pension/` | Previdência privada (PGBL/VGBL) — planos, aportes e rentabilidade |
| `acquiring/` | Serviços de adquirência — maquininhas POS e contratos com a adquirente |
| `channels/` | Canais de atendimento — agências, ATMs, canais digitais, correspondentes bancários |

---

## Estrutura de resposta

A maioria dos endpoints retorna dados estáticos no formato padrão do Open Finance:

```json
{
  "data": {
    "brand": {
      "name": "Open Finance Bank",
      "companies": [{ "name": "Company A", "cnpjNumber": "12345678901234" }]
    }
  },
  "meta": {
    "totalRecords": 0,
    "totalPages": 1,
    "requestDateTime": "2025-04-10T04:17:02.908Z"
  }
}
```

O endpoint `POST /open-banking/payments/v1/pix/payments` é o único com lógica dinâmica: gera `paymentId` (UUID v4), ecoa o `consentId` do body e cria um `endToEndId` aleatório.
