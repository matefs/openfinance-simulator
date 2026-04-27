import { Schema, model } from 'mongoose';

const rejectionReasonSchema = new Schema(
  {
    code: String,
    additionalInformation: String,
  },
  { _id: false },
);

const dataSharingConsentSchema = new Schema({
  consentId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true, index: true },
  status: {
    type: String,
    enum: ['AWAITING_AUTHORISATION', 'AUTHORISED', 'REJECTED', 'REVOKED', 'CONSUMED'],
    required: true,
  },
  creationDateTime: { type: Date, required: true },
  statusUpdateDateTime: { type: Date, required: true },
  expirationDateTime: { type: Date, required: true },
  permissions: [{ type: String }],
  rejectionReason: rejectionReasonSchema,
});

export const DataSharingConsentModel = model('DataSharingConsent', dataSharingConsentSchema);