import mongoose from 'mongoose';

import { config } from './config.ts';
import { CustomerModel } from './models/customers/Customer.model.ts';
import { AccountModel } from './models/accounts/Account.model.ts';
import { AccountTransactionModel } from './models/accounts/AccountTransaction.model.ts';
import { ContractModel } from './models/contracts/Contract.model.ts';
import { DataSharingConsentModel } from './models/consents/DataSharingConsent.model.ts';
import { PaymentConsentModel } from './models/consents/PaymentConsent.model.ts';
import { CreditCardAccountModel } from './models/credit-cards/CreditCardAccount.model.ts';
import { CreditCardBillModel } from './models/credit-cards/CreditCardBill.model.ts';
import { CreditCardTransactionModel } from './models/credit-cards/CreditCardTransaction.model.ts';
import { InvestmentModel } from './models/investments/Investment.model.ts';
import { ExchangeOperationModel } from './models/exchange/ExchangeOperation.model.ts';
import { PixPaymentModel } from './models/payments/PixPayment.model.ts';

const institutionCnpj = '12345678000195';
const pfCustomerId = 'cust_pf_001';
const pjCustomerId = 'cust_pj_001';
const pfAccountId = 'acc_pf_001';
const pjAccountId = 'acc_pj_001';
const creditCardAccountId = 'ccacc_pf_001';
const creditCardBillId = 'bill_cc_001';
const dataConsentId = 'consent_data_001';
const paymentConsentId = 'consent_pix_001';
const pixPaymentId = 'pix_payment_001';
const loanContractId = 'contract_loan_001';
const financingContractId = 'contract_financing_001';

const getSeedMongoUriCandidates = () => {
  const explicitSeedMongoUri = process.env.SEED_MONGO_URI;

  if (explicitSeedMongoUri) {
    return [explicitSeedMongoUri];
  }

  if (config.MONGO_URI.includes('mongo:27017')) {
    return [config.MONGO_URI, config.MONGO_URI.replace('mongo:27017', '127.0.0.1:27017')];
  }

  return [config.MONGO_URI];
};

const customers = [
  {
    customerId: pfCustomerId,
    customerType: 'PF',
    brandName: 'Open Finance Bank',
    companyCnpj: institutionCnpj,
    cpfNumber: '12345678901',
    civilName: 'Maria Fernanda Souza',
    socialName: 'Maria F. Souza',
    birthDate: new Date('1990-05-18T00:00:00.000Z'),
    maritalStatusCode: 'SOLTEIRO',
    sex: 'FEMININO',
    contacts: {
      postalAddresses: [
        {
          isMain: true,
          addressType: 'RESIDENCIAL',
          address: 'Rua das Flores, 120',
          additionalInfo: 'Apto 42',
          districtName: 'Centro',
          townName: 'São Paulo',
          ibgeTownCode: '3550308',
          countrySubDivision: 'SP',
          postCode: '01001000',
          country: 'Brasil',
          countryCode: 'BR',
        },
      ],
      phones: [
        {
          isMain: true,
          type: 'MOVEL',
          additionalInfo: 'WhatsApp',
          countryCallingCode: '55',
          areaCode: '11',
          number: '988887777',
          phoneExtension: '1',
        },
      ],
      emails: [{ isMain: true, email: 'maria.souza@example.com' }],
    },
  },
  {
    customerId: pjCustomerId,
    customerType: 'PJ',
    brandName: 'Open Finance Bank',
    companyCnpj: institutionCnpj,
    cnpjNumber: '98765432000109',
    companyName: 'Acme Tecnologia Ltda',
    tradeName: 'Acme Tech',
    incorporationDate: new Date('2018-11-12T00:00:00.000Z'),
    contacts: {
      postalAddresses: [
        {
          isMain: true,
          addressType: 'COMERCIAL',
          address: 'Avenida Paulista, 1000',
          additionalInfo: 'Conjunto 1201',
          districtName: 'Bela Vista',
          townName: 'São Paulo',
          ibgeTownCode: '3550308',
          countrySubDivision: 'SP',
          postCode: '01310000',
          country: 'Brasil',
          countryCode: 'BR',
        },
      ],
      phones: [
        {
          isMain: true,
          type: 'FIXO',
          additionalInfo: 'Recepção',
          countryCallingCode: '55',
          areaCode: '11',
          number: '40028922',
          phoneExtension: '220',
        },
      ],
      emails: [{ isMain: true, email: 'contato@acmetecnologia.com.br' }],
    },
  },
];

const accounts = [
  {
    accountId: pfAccountId,
    customerId: pfCustomerId,
    brandName: 'Open Finance Bank',
    companyCnpj: institutionCnpj,
    type: 'CONTA_DEPOSITO_A_VISTA',
    subtype: 'INDIVIDUAL',
    currency: 'BRL',
    compeCode: '001',
    ispb: '12345678',
    branchCode: '0001',
    number: '123456',
    checkDigit: '7',
    status: 'ATIVA',
    overdraftContractedLimit: 3000,
    overdraftContractedLimitCurrency: 'BRL',
    overdraftUsedLimit: 450,
    overdraftUsedLimitCurrency: 'BRL',
    unarrangedOverdraftAmount: 0,
    unarrangedOverdraftAmountCurrency: 'BRL',
    balance: {
      availableAmount: 15240.75,
      availableAmountCurrency: 'BRL',
      blockedAmount: 320,
      blockedAmountCurrency: 'BRL',
      automaticallyInvestedAmount: 2500,
      automaticallyInvestedAmountCurrency: 'BRL',
    },
  },
  {
    accountId: pjAccountId,
    customerId: pjCustomerId,
    brandName: 'Open Finance Bank',
    companyCnpj: institutionCnpj,
    type: 'CONTA_PAGAMENTO',
    subtype: 'INDIVIDUAL',
    currency: 'BRL',
    compeCode: '001',
    ispb: '12345678',
    branchCode: '0098',
    number: '998877',
    checkDigit: '5',
    status: 'ATIVA',
    balance: {
      availableAmount: 88420.11,
      availableAmountCurrency: 'BRL',
      blockedAmount: 0,
      blockedAmountCurrency: 'BRL',
      automaticallyInvestedAmount: 0,
      automaticallyInvestedAmountCurrency: 'BRL',
    },
  },
];

const accountTransactions = [
  {
    transactionId: 'acctx_001',
    accountId: pfAccountId,
    completedAuthorisedPaymentType: 'TRANSACAO_EFETIVADA',
    creditDebitType: 'CREDITO',
    transactionName: 'Salário mensal',
    type: 'PIX',
    transactionAdditionalInfo: 'Crédito recebido do empregador',
    amount: 4500,
    currency: 'BRL',
    transactionDate: new Date('2026-04-05T12:10:00.000Z'),
    partieCnpjCpf: '11222333000181',
    partiePersonType: 'PESSOA_JURIDICA',
    partieCompeCode: '001',
    partieBranchCode: '0001',
    partieNumber: '778899',
    partieCheckDigit: '4',
  },
  {
    transactionId: 'acctx_002',
    accountId: pfAccountId,
    completedAuthorisedPaymentType: 'TRANSACAO_EFETIVADA',
    creditDebitType: 'DEBITO',
    transactionName: 'Pagamento de boleto',
    type: 'BOLETO',
    transactionAdditionalInfo: 'Conta de consumo',
    amount: 320,
    currency: 'BRL',
    transactionDate: new Date('2026-04-15T09:30:00.000Z'),
    partieCnpjCpf: '44556677000100',
    partiePersonType: 'PESSOA_JURIDICA',
    partieCompeCode: '033',
    partieBranchCode: '0001',
    partieNumber: '123123',
    partieCheckDigit: '9',
  },
  {
    transactionId: 'acctx_003',
    accountId: pjAccountId,
    completedAuthorisedPaymentType: 'TRANSACAO_EFETIVADA',
    creditDebitType: 'CREDITO',
    transactionName: 'Recebimento de contrato',
    type: 'TED',
    transactionAdditionalInfo: 'Pagamento de cliente corporate',
    amount: 18500,
    currency: 'BRL',
    transactionDate: new Date('2026-04-11T16:00:00.000Z'),
    partieCnpjCpf: '55667788000155',
    partiePersonType: 'PESSOA_JURIDICA',
    partieCompeCode: '237',
    partieBranchCode: '0001',
    partieNumber: '555444',
    partieCheckDigit: '2',
  },
  {
    transactionId: 'acctx_004',
    accountId: pjAccountId,
    completedAuthorisedPaymentType: 'TRANSACAO_EFETIVADA',
    creditDebitType: 'DEBITO',
    transactionName: 'Pacote de tarifas',
    type: 'PACOTE_TARIFA_SERVICOS',
    transactionAdditionalInfo: 'Cobrança mensal do pacote',
    amount: 49.9,
    currency: 'BRL',
    transactionDate: new Date('2026-04-20T03:00:00.000Z'),
    partieCnpjCpf: institutionCnpj,
    partiePersonType: 'PESSOA_JURIDICA',
    partieCompeCode: '001',
    partieBranchCode: '0098',
    partieNumber: '998877',
    partieCheckDigit: '5',
  },
];

const contracts = [
  {
    contractId: loanContractId,
    customerId: pfCustomerId,
    contractType: 'EMPRESTIMOS',
    brandName: 'Open Finance Bank',
    companyCnpj: institutionCnpj,
    productName: 'Crédito Pessoal Flex',
    productType: 'EMPRESTIMO_PESSOAL',
    productSubType: 'SEM GARANTIA',
    contractDate: new Date('2025-01-10T00:00:00.000Z'),
    disbursementDate: new Date('2025-01-13T00:00:00.000Z'),
    contractAmount: 25000,
    currency: 'BRL',
    dueDate: new Date('2029-01-10T00:00:00.000Z'),
    instalmentPeriodicity: 'MENSAL',
    instalmentPeriodicityAdditionalInfo: '48 parcelas mensais',
    firstInstalmentDueDate: new Date('2025-02-10T00:00:00.000Z'),
    CET: '2.15',
    amortizationScheduled: 'PRICE',
    amortizationScheduledAdditionalInfo: 'Parcelas fixas',
    interestRates: [
      {
        taxType: 'EFETIVA',
        interestRateType: 'COMPOSTO',
        taxPeriodicity: 'AA',
        calculation: '30/365',
        referentialRateIndexer: 'CDI',
        referentialRateIndexerSubType: 'DI',
        referentialRateIndexerAdditionalInfo: 'Indexado ao CDI',
        preFixedRate: '2.15',
        additionalInfo: 'Taxa anual efetiva estimada',
      },
    ],
    contractedFees: [
      {
        feeName: 'Tarifa de abertura de crédito',
        feeCode: 'TAC',
        feeChargeType: 'FIXO',
        feeCharge: 'COBRADO',
        feeAmount: 450,
        feeRate: '1.8',
      },
    ],
    contractedFinanceCharges: [
      {
        chargeType: 'IOF',
        chargeAdditionalInfo: 'Imposto sobre operacao financeira',
        chargeRate: '0.38',
      },
    ],
    instalments: {
      typeNumberOfInstalments: 'REGULAR',
      totalNumberOfInstalments: 48,
      typeContractRemaining: 'PAGAS',
      contractRemainingNumber: 36,
      paidInstalments: 12,
      dueInstalments: 1,
      pastDueInstalments: 0,
      balloonPayments: [
        {
          dueDate: new Date('2029-01-10T00:00:00.000Z'),
          currency: 'BRL',
          amount: 1200,
        },
      ],
    },
    payments: {
      paidInstalments: 12,
      contractOutstandingBalance: 19350.22,
      releases: [
        {
          paymentId: 'loan_release_001',
          isOverParcelPayment: false,
          instalmentId: 'inst_001',
          paidDate: new Date('2026-04-10T00:00:00.000Z'),
          currency: 'BRL',
          paidAmount: 742.11,
          overParcelPayment: {
            fees: [{ feeName: 'Atraso', feeCode: 'ATR', feeAmount: 0 }],
            charges: [{ chargeType: 'JUROS_MORA', chargeAdditionalInfo: 'Cobrança por atraso', chargeAmount: 0 }],
          },
        },
      ],
    },
    warranties: [
      {
        currency: 'BRL',
        warrantyType: 'FIDUCIARIA',
        warrantySubType: 'NAO_APLICAVEL',
        warrantyAmount: 0,
      },
    ],
  },
  {
    contractId: financingContractId,
    customerId: pjCustomerId,
    contractType: 'FINANCIAMENTOS',
    brandName: 'Open Finance Bank',
    companyCnpj: institutionCnpj,
    productName: 'Financiamento Equipamentos',
    productType: 'FINANCIAMENTO_BENS',
    productSubType: 'TECNOLOGIA',
    contractDate: new Date('2024-08-20T00:00:00.000Z'),
    disbursementDate: new Date('2024-08-23T00:00:00.000Z'),
    contractAmount: 120000,
    currency: 'BRL',
    dueDate: new Date('2029-08-20T00:00:00.000Z'),
    instalmentPeriodicity: 'MENSAL',
    instalmentPeriodicityAdditionalInfo: '60 parcelas',
    firstInstalmentDueDate: new Date('2024-09-20T00:00:00.000Z'),
    CET: '1.92',
    amortizationScheduled: 'SAC',
    amortizationScheduledAdditionalInfo: 'Saldo devedor decrescente',
    interestRates: [
      {
        taxType: 'NOMINAL',
        interestRateType: 'SIMPLES',
        taxPeriodicity: 'AA',
        calculation: '30/360',
        referentialRateIndexer: 'PREFIXADO',
        preFixedRate: '1.92',
        additionalInfo: 'Taxa prefixada ao ano',
      },
    ],
    contractedFees: [
      {
        feeName: 'Tarifa de cadastro',
        feeCode: 'CAD',
        feeChargeType: 'FIXO',
        feeCharge: 'COBRADO',
        feeAmount: 680,
        feeRate: '0.57',
      },
    ],
    contractedFinanceCharges: [
      {
        chargeType: 'IOF',
        chargeAdditionalInfo: 'Imposto sobre operacao financeira',
        chargeRate: '0.38',
      },
    ],
    instalments: {
      typeNumberOfInstalments: 'REGULAR',
      totalNumberOfInstalments: 60,
      typeContractRemaining: 'ABERTA',
      contractRemainingNumber: 39,
      paidInstalments: 21,
      dueInstalments: 1,
      pastDueInstalments: 0,
      balloonPayments: [],
    },
    payments: {
      paidInstalments: 21,
      contractOutstandingBalance: 74200.8,
      releases: [],
    },
    warranties: [
      {
        currency: 'BRL',
        warrantyType: 'ALIENACAO_FIDUCIARIA',
        warrantySubType: 'EQUIPAMENTOS_TI',
        warrantyAmount: 120000,
      },
    ],
  },
];

const dataSharingConsents = [
  {
    consentId: dataConsentId,
    customerId: pfCustomerId,
    status: 'AUTHORISED',
    creationDateTime: new Date('2026-04-01T10:00:00.000Z'),
    statusUpdateDateTime: new Date('2026-04-01T10:05:00.000Z'),
    expirationDateTime: new Date('2026-07-01T10:00:00.000Z'),
    permissions: [
      'ACCOUNTS_READ',
      'ACCOUNTS_BALANCES_READ',
      'CREDIT_CARDS_ACCOUNTS_READ',
      'CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ',
    ],
  },
];

const paymentConsents = [
  {
    consentId: paymentConsentId,
    customerId: pfCustomerId,
    status: 'AUTHORISED',
    creationDateTime: new Date('2026-04-15T09:20:00.000Z'),
    statusUpdateDateTime: new Date('2026-04-15T09:21:00.000Z'),
    expirationDateTime: new Date('2026-04-15T10:20:00.000Z'),
    creditor: {
      personType: 'PESSOA_JURIDICA',
      cpfCnpj: '11223344000199',
      name: 'Acme Tecnologia Ltda',
    },
    payment: {
      type: 'PIX',
      date: '2026-04-15',
      currency: 'BRL',
      amount: 320,
      details: {
        localInstrument: 'DICT',
        proxy: 'pagamentos@acme.com',
        creditorAccount: {
          ispb: '12345678',
          issuer: '0001',
          number: '99887766',
          accountType: 'CACC',
        },
      },
    },
    debtorAccount: {
      ispb: '12345678',
      issuer: '0001',
      number: '123456',
      accountType: 'CACC',
    },
    businessEntity: {
      document: {
        identification: institutionCnpj,
        rel: 'SAME_BANK_GROUP',
      },
    },
  },
];

const pixPayments = [
  {
    paymentId: pixPaymentId,
    consentId: paymentConsentId,
    endToEndId: 'E1234567820260415123456789012345',
    creationDateTime: new Date('2026-04-15T09:22:00.000Z'),
    statusUpdateDateTime: new Date('2026-04-15T09:22:10.000Z'),
    status: 'ACSC',
    localInstrument: 'DICT',
    payment: {
      amount: 320,
      currency: 'BRL',
    },
    creditorAccount: {
      ispb: '12345678',
      issuer: '0001',
      number: '99887766',
      accountType: 'CACC',
    },
    remittanceInformation: 'Pagamento de mensalidade',
    cnpjInitiator: institutionCnpj,
    transactionIdentification: 'TX123456789',
  },
];

const creditCardAccounts = [
  {
    creditCardAccountId: creditCardAccountId,
    customerId: pfCustomerId,
    brandName: 'Open Finance Bank',
    companyCnpj: institutionCnpj,
    name: 'Cartao Open Finance Platinum',
    productType: 'CREDITO_PARCELADO_EMISSOR',
    productAdditionalInfo: 'Programa de beneficios com cashback',
    creditCardNetwork: 'VISA',
    networkAdditionalInfo: 'Signature',
    status: 'ATIVA',
    limits: [
      {
        creditLineLimitType: 'LIMITE_CREDITO_TOTAL',
        consolidationType: 'CONSOLIDADO',
        identificationNumber: '1',
        lineName: 'CREDITO_A_VISTA',
        lineNameAdditionalInfo: 'Compras a vista',
        isLimitFlexible: true,
        limitAmount: 15000,
        limitAmountCurrency: 'BRL',
        usedAmount: 4200,
        usedAmountCurrency: 'BRL',
        availableAmount: 10800,
        availableAmountCurrency: 'BRL',
      },
    ],
  },
];

const creditCardBills = [
  {
    billId: creditCardBillId,
    creditCardAccountId: creditCardAccountId,
    dueDate: new Date('2026-05-10T00:00:00.000Z'),
    billTotalAmount: 2580.45,
    billTotalAmountCurrency: 'BRL',
    billMinimumAmount: 258.05,
    billMinimumAmountCurrency: 'BRL',
    isInstalment: false,
    financingCharges: [
      {
        type: 'JUROS_ROTATIVOS',
        additionalInfo: 'Aplicado apenas em rotativo',
        CET: '15.90',
      },
    ],
  },
];

const creditCardTransactions = [
  {
    transactionId: 'cctx_001',
    creditCardAccountId: creditCardAccountId,
    billId: creditCardBillId,
    identificationNumber: 'id-001',
    transactionName: 'Compra supermercado',
    billIdentificationNumber: 'bill-ident-001',
    creditDebitType: 'DEBITO',
    transactionType: 'PAGAMENTO',
    chargeIdentificator: 'charge-001',
    chargeNumber: 1,
    brazilianAmount: 420.3,
    amount: 420.3,
    currency: 'BRL',
    transactionDate: new Date('2026-04-06T18:40:00.000Z'),
    billPostDate: new Date('2026-04-07T00:00:00.000Z'),
    payeeMCC: 5411,
  },
  {
    transactionId: 'cctx_002',
    creditCardAccountId: creditCardAccountId,
    billId: creditCardBillId,
    identificationNumber: 'id-002',
    transactionName: 'Cashback promoção',
    billIdentificationNumber: 'bill-ident-001',
    creditDebitType: 'CREDITO',
    transactionType: 'CASHBACK',
    chargeIdentificator: 'charge-002',
    chargeNumber: 2,
    brazilianAmount: 35.5,
    amount: 35.5,
    currency: 'BRL',
    transactionDate: new Date('2026-04-08T14:00:00.000Z'),
    billPostDate: new Date('2026-04-09T00:00:00.000Z'),
    payeeMCC: 5499,
  },
];

const investments = [
  {
    investmentId: 'inv_001',
    customerId: pfCustomerId,
    investmentType: 'RENDA_FIXA_BANCARIA',
    brandName: 'Open Finance Bank',
    companyCnpj: institutionCnpj,
    productName: 'CDB Liquidez Diaria',
    isinCode: 'BRABCDEFS001',
    ticker: 'CDBDI01',
    indexer: 'CDI',
    indexerAdditionalInfo: '100% do CDI',
    rate: '100% CDI',
    investmentDate: new Date('2025-10-10T00:00:00.000Z'),
    dueDate: new Date('2027-10-10T00:00:00.000Z'),
    investedAmount: 12000,
    grossAmount: 13120.55,
    netAmount: 12980.11,
    incomeTaxAmount: 140.44,
    financialTransactionTaxAmount: 0,
    currency: 'BRL',
    status: 'ATIVO',
  },
  {
    investmentId: 'inv_002',
    customerId: pjCustomerId,
    investmentType: 'TITULO_PUBLICO',
    brandName: 'Open Finance Bank',
    companyCnpj: institutionCnpj,
    productName: 'Tesouro Selic 2029',
    isinCode: 'BRSTNSELIC29',
    ticker: 'TESOURO29',
    indexer: 'SELIC',
    indexerAdditionalInfo: 'Selic diária',
    rate: 'SELIC + 0,10%',
    investmentDate: new Date('2024-03-02T00:00:00.000Z'),
    dueDate: new Date('2029-03-01T00:00:00.000Z'),
    investedAmount: 50000,
    grossAmount: 62300.2,
    netAmount: 61100.85,
    incomeTaxAmount: 1199.35,
    financialTransactionTaxAmount: 0,
    currency: 'BRL',
    status: 'ATIVO',
  },
];

const exchangeOperations = [
  {
    operationId: 'fx_001',
    customerId: pjCustomerId,
    operationType: 'COMPRA',
    operationDate: new Date('2026-02-18T13:30:00.000Z'),
    dueDateOperation: new Date('2026-02-21T13:30:00.000Z'),
    foreignCurrencyCode: 'USD',
    foreignCurrencyAmount: 1000,
    localCurrencyAmount: 5100,
    exchangeContractRate: '5.10',
    vetAmount: 5200,
    localCurrencyAdvancePercentage: '0.00',
    deliveryForeignCurrency: 'CONTA_DEPOSITO_MOEDA_ESTRANGEIRA_EXTERIOR',
    operationCategoryCode: '1',
    foreignPartieName: 'Global Bank LLC',
    foreignPartieCountryCode: 'US',
    operationStatus: 'LIQUIDADA',
  },
];

const seedDatabase = async () => {
  const mongoUriCandidates = getSeedMongoUriCandidates();
  let lastConnectionError: unknown;

  for (const mongoUri of mongoUriCandidates) {
    try {
      await mongoose.connect(mongoUri);
      lastConnectionError = undefined;
      break;
    } catch (error) {
      lastConnectionError = error;

      if (mongoUri !== mongoUriCandidates[mongoUriCandidates.length - 1]) {
        await mongoose.disconnect();
        continue;
      }

      throw error;
    }
  }

  if (lastConnectionError) {
    throw lastConnectionError;
  }

  try {
    await CustomerModel.deleteMany({});
    await AccountModel.deleteMany({});
    await AccountTransactionModel.deleteMany({});
    await ContractModel.deleteMany({});
    await DataSharingConsentModel.deleteMany({});
    await PaymentConsentModel.deleteMany({});
    await PixPaymentModel.deleteMany({});
    await CreditCardAccountModel.deleteMany({});
    await CreditCardBillModel.deleteMany({});
    await CreditCardTransactionModel.deleteMany({});
    await InvestmentModel.deleteMany({});
    await ExchangeOperationModel.deleteMany({});

    await CustomerModel.insertMany(customers);
    await AccountModel.insertMany(accounts);
    await AccountTransactionModel.insertMany(accountTransactions);
    await ContractModel.insertMany(contracts);
    await DataSharingConsentModel.insertMany(dataSharingConsents);
    await PaymentConsentModel.insertMany(paymentConsents);
    await PixPaymentModel.insertMany(pixPayments);
    await CreditCardAccountModel.insertMany(creditCardAccounts);
    await CreditCardBillModel.insertMany(creditCardBills);
    await CreditCardTransactionModel.insertMany(creditCardTransactions);
    await InvestmentModel.insertMany(investments);
    await ExchangeOperationModel.insertMany(exchangeOperations);

    console.log('Seed concluido com sucesso');
  } finally {
    await mongoose.disconnect();
  }
};

seedDatabase().catch(async (error: unknown) => {
  console.error('Falha ao executar seed:', error);
  await mongoose.disconnect();
  process.exitCode = 1;
});