import { Schema, model } from 'mongoose';

const investmentSchema = new Schema({
  investmentId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true, index: true },
  investmentType: {
    type: String,
    enum: ['RENDA_FIXA_BANCARIA', 'RENDA_FIXA_CREDITO', 'RENDA_VARIAVEL', 'TITULO_PUBLICO'],
    required: true,
  },
  brandName: { type: String, required: true },
  companyCnpj: { type: String, required: true },
  productName: { type: String, required: true },
  isinCode: String,
  ticker: String,
  indexer: { type: String, enum: ['CDI', 'SELIC', 'IPCA', 'IGPM', 'PREFIXADO'] },
  indexerAdditionalInfo: String,
  rate: String,
  investmentDate: { type: Date, required: true },
  dueDate: Date,
  investedAmount: { type: Number, required: true },
  grossAmount: { type: Number, required: true },
  netAmount: { type: Number, required: true },
  incomeTaxAmount: { type: Number, required: true },
  financialTransactionTaxAmount: Number,
  currency: { type: String, required: true, default: 'BRL' },
  status: { type: String, enum: ['ATIVO', 'ENCERRADO'], required: true },
});

investmentSchema.index({ customerId: 1, investmentType: 1 });

export const InvestmentModel = model('Investment', investmentSchema);