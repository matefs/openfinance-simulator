import { Schema, model } from 'mongoose';

const accountBalanceSchema = new Schema(
  {
    availableAmount: { type: Number, required: true },
    availableAmountCurrency: { type: String, required: true, default: 'BRL' },
    blockedAmount: { type: Number, required: true },
    blockedAmountCurrency: { type: String, required: true, default: 'BRL' },
    automaticallyInvestedAmount: { type: Number, required: true },
    automaticallyInvestedAmountCurrency: { type: String, required: true, default: 'BRL' },
  },
  { _id: false },
);

const accountSchema = new Schema({
  accountId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true, index: true },
  brandName: { type: String, required: true },
  companyCnpj: { type: String, required: true },
  type: {
    type: String,
    enum: ['CONTA_DEPOSITO_A_VISTA', 'CONTA_POUPANCA', 'CONTA_PAGAMENTO', 'CONTA_SALARIO'],
    required: true,
  },
  subtype: {
    type: String,
    enum: ['INDIVIDUAL', 'CONJUNTA_SIMPLES', 'CONJUNTA_SOLIDARIA'],
    required: true,
  },
  currency: { type: String, required: true, default: 'BRL' },
  compeCode: { type: String, required: true },
  ispb: { type: String, required: true },
  branchCode: { type: String, required: true },
  number: { type: String, required: true },
  checkDigit: { type: String, required: true },
  status: {
    type: String,
    enum: ['ATIVA', 'INATIVA', 'PENDENTE_APROVACAO', 'ENCERRADA', 'BLOQUEADA'],
    required: true,
  },
  overdraftContractedLimit: Number,
  overdraftContractedLimitCurrency: String,
  overdraftUsedLimit: Number,
  overdraftUsedLimitCurrency: String,
  unarrangedOverdraftAmount: Number,
  unarrangedOverdraftAmountCurrency: String,
  balance: { type: accountBalanceSchema, required: true },
});

export const AccountModel = model('Account', accountSchema);