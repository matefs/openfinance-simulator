import { Schema, model } from 'mongoose';

const accountSchema = new Schema(
  {
    ispb: { type: String, required: true },
    issuer: String,
    number: { type: String, required: true },
    accountType: { type: String, enum: ['CACC', 'SLRY', 'SVGS', 'TRAN'], required: true },
  },
  { _id: false },
);

const paymentDetailsSchema = new Schema(
  {
    localInstrument: { type: String, enum: ['MANU', 'DICT', 'PRVT', 'INIC'], required: true },
    proxy: String,
    creditorAccount: accountSchema,
  },
  { _id: false },
);

const paymentDataSchema = new Schema(
  {
    type: { type: String, required: true, default: 'PIX' },
    date: { type: String, required: true },
    currency: { type: String, required: true, default: 'BRL' },
    amount: { type: Number, required: true },
    details: paymentDetailsSchema,
  },
  { _id: false },
);

const creditorSchema = new Schema(
  {
    personType: { type: String, enum: ['PESSOA_NATURAL', 'PESSOA_JURIDICA'], required: true },
    cpfCnpj: { type: String, required: true },
    name: { type: String, required: true },
  },
  { _id: false },
);

const businessEntitySchema = new Schema(
  {
    document: {
      identification: String,
      rel: String,
    },
  },
  { _id: false },
);

const paymentConsentSchema = new Schema({
  consentId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true, index: true },
  status: {
    type: String,
    enum: ['AWAITING_AUTHORISATION', 'AUTHORISED', 'REJECTED', 'CONSUMED'],
    required: true,
  },
  creationDateTime: { type: Date, required: true },
  statusUpdateDateTime: { type: Date, required: true },
  expirationDateTime: { type: Date, required: true },
  creditor: { type: creditorSchema, required: true },
  payment: { type: paymentDataSchema, required: true },
  debtorAccount: accountSchema,
  businessEntity: businessEntitySchema,
});

export const PaymentConsentModel = model('PaymentConsent', paymentConsentSchema);