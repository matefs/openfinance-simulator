import { Schema, model } from 'mongoose';

const interestRateSchema = new Schema(
  {
    taxType: { type: String, enum: ['NOMINAL', 'EFETIVA'], required: true },
    interestRateType: { type: String, enum: ['SIMPLES', 'COMPOSTO'], required: true },
    taxPeriodicity: { type: String, enum: ['AM', 'AA'], required: true },
    calculation: { type: String, enum: ['21/252', '30/360', '30/365'], required: true },
    referentialRateIndexer: { type: String, required: true },
    referentialRateIndexerSubType: String,
    referentialRateIndexerAdditionalInfo: String,
    preFixedRate: String,
    postFixedRate: String,
    additionalInfo: String,
  },
  { _id: false },
);

const contractedFeeSchema = new Schema(
  {
    feeName: { type: String, required: true },
    feeCode: { type: String, required: true },
    feeChargeType: { type: String, enum: ['MINIMO', 'MAXIMO', 'FIXO', 'PERCENTUAL'], required: true },
    feeCharge: { type: String, enum: ['COBRADO', 'ISENTO', 'INCLUIDO_CAPITAL', 'INCLUIDO_TAXA'], required: true },
    feeAmount: Number,
    feeRate: String,
  },
  { _id: false },
);

const financeChargeSchema = new Schema(
  {
    chargeType: { type: String, required: true },
    chargeAdditionalInfo: String,
    chargeRate: String,
  },
  { _id: false },
);

const balloonPaymentSchema = new Schema(
  {
    dueDate: Date,
    currency: String,
    amount: Number,
  },
  { _id: false },
);

const instalmentsSchema = new Schema(
  {
    typeNumberOfInstalments: String,
    totalNumberOfInstalments: Number,
    typeContractRemaining: String,
    contractRemainingNumber: Number,
    paidInstalments: Number,
    dueInstalments: Number,
    pastDueInstalments: Number,
    balloonPayments: [balloonPaymentSchema],
  },
  { _id: false },
);

const overParcelFeeSchema = new Schema(
  { feeName: String, feeCode: String, feeAmount: Number },
  { _id: false },
);

const overParcelChargeSchema = new Schema(
  { chargeType: String, chargeAdditionalInfo: String, chargeAmount: Number },
  { _id: false },
);

const paymentReleaseSchema = new Schema(
  {
    paymentId: String,
    isOverParcelPayment: Boolean,
    instalmentId: String,
    paidDate: Date,
    currency: String,
    paidAmount: Number,
    overParcelPayment: {
      fees: [overParcelFeeSchema],
      charges: [overParcelChargeSchema],
    },
  },
  { _id: false },
);

const contractPaymentsSchema = new Schema(
  {
    paidInstalments: Number,
    contractOutstandingBalance: Number,
    releases: [paymentReleaseSchema],
  },
  { _id: false },
);

const warrantySchema = new Schema(
  {
    currency: String,
    warrantyType: String,
    warrantySubType: String,
    warrantyAmount: Number,
  },
  { _id: false },
);

const contractSchema = new Schema({
  contractId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true, index: true },
  contractType: {
    type: String,
    enum: [
      'EMPRESTIMOS',
      'FINANCIAMENTOS',
      'DIREITOS_CREDITORIOS_DESCONTADOS',
      'ADIANTAMENTO_A_DEPOSITANTES',
    ],
    required: true,
    index: true,
  },
  brandName: { type: String, required: true },
  companyCnpj: { type: String, required: true },
  productName: { type: String, required: true },
  productType: { type: String, required: true },
  productSubType: String,
  contractDate: Date,
  disbursementDate: Date,
  settlementDate: Date,
  contractAmount: { type: Number, required: true },
  currency: { type: String, required: true, default: 'BRL' },
  dueDate: Date,
  instalmentPeriodicity: {
    type: String,
    enum: [
      'SEM_PERIODICIDADE_REGULAR',
      'SEMANAL',
      'QUINZENAL',
      'MENSAL',
      'BIMESTRAL',
      'TRIMESTRAL',
      'SEMESTRAL',
      'ANUAL',
    ],
    required: true,
  },
  instalmentPeriodicityAdditionalInfo: String,
  firstInstalmentDueDate: Date,
  CET: String,
  amortizationScheduled: {
    type: String,
    enum: ['SAC', 'PRICE', 'SAM', 'SEM_SISTEMA_AMORTIZACAO', 'OUTROS'],
  },
  amortizationScheduledAdditionalInfo: String,
  interestRates: [interestRateSchema],
  contractedFees: [contractedFeeSchema],
  contractedFinanceCharges: [financeChargeSchema],
  instalments: instalmentsSchema,
  payments: contractPaymentsSchema,
  warranties: [warrantySchema],
});

contractSchema.index({ customerId: 1, contractType: 1 });

export const ContractModel = model('Contract', contractSchema);