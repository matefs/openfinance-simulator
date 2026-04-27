import { Schema, model } from 'mongoose';

const pixPaymentAmountSchema = new Schema(
  {
    amount: { type: Number, required: true },
    currency: { type: String, required: true, default: 'BRL' },
  },
  { _id: false },
);

const pixCreditorAccountSchema = new Schema(
  {
    ispb: { type: String, required: true },
    issuer: String,
    number: { type: String, required: true },
    accountType: { type: String, enum: ['CACC', 'SLRY', 'SVGS', 'TRAN'], required: true },
  },
  { _id: false },
);

const pixPaymentSchema = new Schema({
  paymentId: { type: String, required: true, unique: true },
  consentId: { type: String, required: true, index: true },
  endToEndId: { type: String, required: true },
  creationDateTime: { type: Date, required: true },
  statusUpdateDateTime: { type: Date, required: true },
  status: {
    type: String,
    enum: ['PDNG', 'SASP', 'SASC', 'ACSP', 'ACSC', 'ACCC', 'RJCT', 'SCHD', 'PATC', 'RCVD'],
    required: true,
  },
  localInstrument: {
    type: String,
    enum: ['MANU', 'DICT', 'PRVT', 'INIC'],
    required: true,
  },
  payment: { type: pixPaymentAmountSchema, required: true },
  creditorAccount: pixCreditorAccountSchema,
  remittanceInformation: String,
  cnpjInitiator: String,
  transactionIdentification: String,
  rejectionReason: String,
});

export const PixPaymentModel = model('PixPayment', pixPaymentSchema);