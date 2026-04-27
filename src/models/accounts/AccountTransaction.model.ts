import { Schema, model } from 'mongoose';

const accountTransactionSchema = new Schema({
  transactionId: { type: String, required: true, unique: true },
  accountId: { type: String, required: true },
  completedAuthorisedPaymentType: {
    type: String,
    enum: ['TRANSACAO_EFETIVADA', 'LANCAMENTO_FUTURO'],
    required: true,
  },
  creditDebitType: {
    type: String,
    enum: ['CREDITO', 'DEBITO'],
    required: true,
  },
  transactionName: { type: String, required: true },
  type: {
    type: String,
    enum: [
      'PIX',
      'TED',
      'DOC',
      'TRANSFERENCIA_MESMA_INSTITUICAO',
      'BOLETO',
      'CONVENIO_ARRECADACAO',
      'PACOTE_TARIFA_SERVICOS',
      'OUTROS',
    ],
    required: true,
  },
  transactionAdditionalInfo: String,
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: 'BRL' },
  transactionDate: { type: Date, required: true },
  partieCnpjCpf: String,
  partiePersonType: { type: String, enum: ['PESSOA_NATURAL', 'PESSOA_JURIDICA'] },
  partieCompeCode: String,
  partieBranchCode: String,
  partieNumber: String,
  partieCheckDigit: String,
});

accountTransactionSchema.index({ accountId: 1, transactionDate: -1 });

export const AccountTransactionModel = model('AccountTransaction', accountTransactionSchema);