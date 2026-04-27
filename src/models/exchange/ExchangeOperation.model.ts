import { Schema, model } from 'mongoose';

const exchangeOperationSchema = new Schema({
  operationId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true, index: true },
  operationType: { type: String, enum: ['COMPRA', 'VENDA'], required: true },
  operationDate: { type: Date, required: true },
  dueDateOperation: Date,
  foreignCurrencyCode: { type: String, required: true },
  foreignCurrencyAmount: { type: Number, required: true },
  localCurrencyAmount: { type: Number, required: true },
  exchangeContractRate: { type: String, required: true },
  vetAmount: Number,
  localCurrencyAdvancePercentage: String,
  deliveryForeignCurrency: {
    type: String,
    enum: [
      'CONTA_DEPOSITO_MOEDA_ESTRANGEIRA_PAIS',
      'CONTA_DEPOSITO_MOEDA_ESTRANGEIRA_EXTERIOR',
      'ESPECIE',
      'CARTAO_PRE_PAGO',
      'TRAVELERSCHECK',
      'OUTROS',
    ],
  },
  operationCategoryCode: String,
  foreignPartieName: String,
  foreignPartieCountryCode: String,
  operationStatus: {
    type: String,
    enum: ['ABERTA', 'LIQUIDADA', 'CANCELADA'],
    required: true,
  },
});

export const ExchangeOperationModel = model('ExchangeOperation', exchangeOperationSchema);