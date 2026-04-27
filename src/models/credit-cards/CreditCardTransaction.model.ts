import { Schema, model } from 'mongoose';

const creditCardTransactionSchema = new Schema({
  transactionId: { type: String, required: true, unique: true },
  creditCardAccountId: { type: String, required: true },
  billId: { type: String, index: true },
  identificationNumber: String,
  transactionName: { type: String, required: true },
  billIdentificationNumber: String,
  creditDebitType: {
    type: String,
    enum: ['CREDITO', 'DEBITO'],
    required: true,
  },
  transactionType: {
    type: String,
    enum: [
      'PAGAMENTO',
      'TARIFA',
      'OPERACOES_CREDITO_CONTRATADAS_CARTAO',
      'ESTORNO',
      'CASHBACK',
      'OUTROS',
    ],
    required: true,
  },
  chargeIdentificator: String,
  chargeNumber: Number,
  brazilianAmount: { type: Number, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: 'BRL' },
  transactionDate: { type: Date, required: true },
  billPostDate: Date,
  payeeMCC: Number,
});

creditCardTransactionSchema.index({ creditCardAccountId: 1, transactionDate: -1 });

export const CreditCardTransactionModel = model('CreditCardTransaction', creditCardTransactionSchema);