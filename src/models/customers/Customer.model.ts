import { Schema, model } from 'mongoose';

const contactPhoneSchema = new Schema(
  {
    isMain: Boolean,
    type: { type: String, enum: ['FIXO', 'MOVEL', 'OUTRO'] },
    additionalInfo: String,
    countryCallingCode: String,
    areaCode: String,
    number: String,
    phoneExtension: String,
  },
  { _id: false },
);

const contactEmailSchema = new Schema(
  {
    isMain: Boolean,
    email: String,
  },
  { _id: false },
);

const postalAddressSchema = new Schema(
  {
    isMain: Boolean,
    addressType: { type: String, enum: ['RESIDENCIAL', 'COMERCIAL', 'OUTRO'] },
    address: String,
    additionalInfo: String,
    districtName: String,
    townName: String,
    ibgeTownCode: String,
    countrySubDivision: String,
    postCode: String,
    country: String,
    countryCode: String,
  },
  { _id: false },
);

const contactSchema = new Schema(
  {
    postalAddresses: [postalAddressSchema],
    phones: [contactPhoneSchema],
    emails: [contactEmailSchema],
  },
  { _id: false },
);

const customerSchema = new Schema({
  customerId: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: ['PENDENTE', 'EM_ANALISE', 'APROVADO', 'REJEITADO'],
    required: true,
    default: 'PENDENTE',
  },
  customerType: { type: String, enum: ['PF', 'PJ'], required: true },
  brandName: { type: String, required: true },
  companyCnpj: { type: String, required: true },

  cpfNumber: String,
  civilName: String,
  socialName: String,
  birthDate: Date,
  maritalStatusCode: {
    type: String,
    enum: [
      'SOLTEIRO',
      'CASADO',
      'VIUVO',
      'SEPARADO_JUDICIALMENTE',
      'DIVORCIADO',
      'UNIAO_ESTAVEL',
      'OUTRO',
    ],
  },
  sex: { type: String, enum: ['MASCULINO', 'FEMININO', 'OUTRO', 'NAO_DISPONIVEL'] },

  cnpjNumber: String,
  companyName: String,
  tradeName: String,
  incorporationDate: Date,

  contacts: contactSchema,
});

export const CustomerModel = model('Customer', customerSchema);