import { Schema, model } from 'mongoose';

const financingChargeSchema = new Schema(
  {
    type: {
      type: String,
      enum: ['JUROS_ROTATIVOS', 'MULTA', 'JUROS_MORA', 'IOF', 'OUTROS'],
      required: true,
    },
    additionalInfo: String,
    CET: String,
  },
  { _id: false },
);

const creditCardBillSchema = new Schema({
  billId: { type: String, required: true, unique: true },
  creditCardAccountId: { type: String, required: true, index: true },
  dueDate: { type: Date, required: true },
  billTotalAmount: { type: Number, required: true },
  billTotalAmountCurrency: { type: String, required: true, default: 'BRL' },
  billMinimumAmount: { type: Number, required: true },
  billMinimumAmountCurrency: { type: String, required: true, default: 'BRL' },
  isInstalment: { type: Boolean, required: true },
  financingCharges: [financingChargeSchema],
});

export const CreditCardBillModel = model('CreditCardBill', creditCardBillSchema);