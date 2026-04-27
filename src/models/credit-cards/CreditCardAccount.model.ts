import { Schema, model } from 'mongoose';

const creditCardLimitSchema = new Schema(
  {
    creditLineLimitType: {
      type: String,
      enum: ['LIMITE_CREDITO_TOTAL', 'LIMITE_CREDITO_MODALIDADE_OPERACAO'],
      required: true,
    },
    consolidationType: {
      type: String,
      enum: ['CONSOLIDADO', 'INDIVIDUAL'],
      required: true,
    },
    identificationNumber: String,
    lineName: {
      type: String,
      enum: [
        'CREDITO_A_VISTA',
        'CREDITO_PARCELADO',
        'SAQUE_CREDITO_BRASIL',
        'SAQUE_CREDITO_EXTERIOR',
        'EMPRESTIMO_CARTAO_CONSIGNADO',
        'OUTROS',
      ],
    },
    lineNameAdditionalInfo: String,
    isLimitFlexible: Boolean,
    limitAmount: { type: Number, required: true },
    limitAmountCurrency: { type: String, required: true, default: 'BRL' },
    usedAmount: { type: Number, required: true },
    usedAmountCurrency: { type: String, required: true, default: 'BRL' },
    availableAmount: { type: Number, required: true },
    availableAmountCurrency: { type: String, required: true, default: 'BRL' },
  },
  { _id: false },
);

const creditCardAccountSchema = new Schema({
  creditCardAccountId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true, index: true },
  brandName: { type: String, required: true },
  companyCnpj: { type: String, required: true },
  name: { type: String, required: true },
  productType: {
    type: String,
    enum: ['CREDITO_A_VISTA', 'CREDITO_PARCELADO_LOJA', 'CREDITO_PARCELADO_EMISSOR', 'OUTROS'],
    required: true,
  },
  productAdditionalInfo: String,
  creditCardNetwork: {
    type: String,
    enum: ['MASTERCARD', 'VISA', 'ELO', 'AMERICAN_EXPRESS', 'HIPERCARD', 'DINERS_CLUB', 'CABAL', 'OUTROS'],
    required: true,
  },
  networkAdditionalInfo: String,
  status: {
    type: String,
    enum: ['ATIVA', 'BLOQUEADA', 'CANCELADA', 'ENCERRADA'],
    required: true,
  },
  limits: [creditCardLimitSchema],
});

export const CreditCardAccountModel = model('CreditCardAccount', creditCardAccountSchema);