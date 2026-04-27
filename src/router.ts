import Router from '@koa/router';
import { statusGet } from './endpoints/status/statusGet.ts';
import { discoveryStatusGet } from './endpoints/discovery/discoveryStatusGet.ts';
import { discoveryOutagesGet } from './endpoints/discovery/discoveryOutagesGet.ts';
import { discoveryResourcesGet } from './endpoints/discovery/discoveryResourcesGet.ts';
import { channelsBranchesGet } from './endpoints/channels/channelsBranchesGet.ts';
import { channelsElectronicChannelsGet } from './endpoints/channels/channelsElectronicChannelsGet.ts';
import { channelsPhoneChannelsGet } from './endpoints/channels/channelsPhoneChannelsGet.ts';
import { channelsBankingAgentsGet } from './endpoints/channels/channelsBankingAgentsGet.ts';
import { channelsSharedAutomatedTellerMachinesGet } from './endpoints/channels/channelsSharedAutomatedTellerMachinesGet.ts';
import { productsPersonalAccountsGet } from './endpoints/products/productsPersonalAccountsGet.ts';
import { adminMetricsGet } from './endpoints/admin/adminMetricsGet.ts';
import { productsPersonalLoansGet } from './endpoints/products/productsPersonalLoansGet.ts';
import { productsBusinessAccountsGet } from './endpoints/products/productsBusinessAccountsGet.ts';
import { productsBusinessLoansGet } from './endpoints/products/productsBusinessLoansGet.ts';
import { productsPersonalFinancingsGet } from './endpoints/products/productsPersonalFinancingsGet.ts';
import { productsBusinessFinancingsGet } from './endpoints/products/productsBusinessFinancingsGet.ts';
import { productsPersonalCreditCardsGet } from './endpoints/products/productsPersonalCreditCardsGet.ts';
import { productsBusinessCreditCardsGet } from './endpoints/products/productsBusinessCreditCardsGet.ts';
import { productsPersonalUnarrangedAccountOverdraftGet } from './endpoints/products/productsPersonalUnarrangedAccountOverdraftGet.ts';
import { productsBusinessUnarrangedAccountOverdraftGet } from './endpoints/products/productsBusinessUnarrangedAccountOverdraftGet.ts';
import { productsPersonalInvoiceFinancingsGet } from './endpoints/products/productsPersonalInvoiceFinancingsGet.ts';
import { productsBusinessInvoiceFinancingsGet } from './endpoints/products/productsBusinessInvoiceFinancingsGet.ts';
import { consentsGet } from './endpoints/consents/consentsGet.ts';
import { consentsConsentIdGet } from './endpoints/consents/consentsConsentIdGet.ts';
import { consentsConsentIdDelete } from './endpoints/consents/consentsConsentIdDelete.ts';
import { resourcesResourcesGet } from './endpoints/resources/resourcesResourcesGet.ts';
import { customersPersonalIdentificationsGet } from './endpoints/customers/customersPersonalIdentificationsGet.ts';
import { customersBusinessIdentificationsGet } from './endpoints/customers/customersBusinessIdentificationsGet.ts';
import { customersPersonalFinancialRelationsGet } from './endpoints/customers/customersPersonalFinancialRelationsGet.ts';
import { customersBusinessFinancialRelationsGet } from './endpoints/customers/customersBusinessFinancialRelationsGet.ts';
import { accountsAccountsGet } from './endpoints/accounts/accountsAccountsGet.ts';
import { accountsAccountIdGet } from './endpoints/accounts/accountsAccountIdGet.ts';
import { accountsAccountIdBalancesGet } from './endpoints/accounts/accountsAccountIdBalancesGet.ts';
import { accountsAccountIdTransactionsGet } from './endpoints/accounts/accountsAccountIdTransactionsGet.ts';
import { accountsAccountIdOverdraftLimitsGet } from './endpoints/accounts/accountsAccountIdOverdraftLimitsGet.ts';
import { creditCardsAccountsGet } from './endpoints/credit-cards/creditCardsAccountsGet.ts';
import { creditCardsAccountIdGet } from './endpoints/credit-cards/creditCardsAccountIdGet.ts';
import { creditCardsAccountIdBillsGet } from './endpoints/credit-cards/creditCardsAccountIdBillsGet.ts';
import { creditCardsAccountIdLimitsGet } from './endpoints/credit-cards/creditCardsAccountIdLimitsGet.ts';
import { creditCardsAccountIdTransactionsGet } from './endpoints/credit-cards/creditCardsAccountIdTransactionsGet.ts';
import { loansContractsGet } from './endpoints/loans/loansContractsGet.ts';
import { loansContractIdGet } from './endpoints/loans/loansContractIdGet.ts';
import { loansContractIdPaymentsGet } from './endpoints/loans/loansContractIdPaymentsGet.ts';
import { loansContractIdScheduledInstalmentsGet } from './endpoints/loans/loansContractIdScheduledInstalmentsGet.ts';
import { loansContractIdWarrantiesGet } from './endpoints/loans/loansContractIdWarrantiesGet.ts';
import { financingsContractsGet } from './endpoints/financings/financingsContractsGet.ts';
import { financingsContractIdGet } from './endpoints/financings/financingsContractIdGet.ts';
import { financingsContractIdPaymentsGet } from './endpoints/financings/financingsContractIdPaymentsGet.ts';
import { financingsContractIdScheduledInstalmentsGet } from './endpoints/financings/financingsContractIdScheduledInstalmentsGet.ts';
import { financingsContractIdWarrantiesGet } from './endpoints/financings/financingsContractIdWarrantiesGet.ts';
import { invoiceFinancingsContractsGet } from './endpoints/invoice-financings/invoiceFinancingsContractsGet.ts';
import { invoiceFinancingsContractIdGet } from './endpoints/invoice-financings/invoiceFinancingsContractIdGet.ts';
import { invoiceFinancingsContractIdPaymentsGet } from './endpoints/invoice-financings/invoiceFinancingsContractIdPaymentsGet.ts';
import { invoiceFinancingsContractIdScheduledInstalmentsGet } from './endpoints/invoice-financings/invoiceFinancingsContractIdScheduledInstalmentsGet.ts';
import { invoiceFinancingsContractIdWarrantiesGet } from './endpoints/invoice-financings/invoiceFinancingsContractIdWarrantiesGet.ts';
import { unarrangedAccountsOverdraftContractsGet } from './endpoints/unarranged-overdraft/unarrangedAccountsOverdraftContractsGet.ts';
import { unarrangedAccountsOverdraftContractIdGet } from './endpoints/unarranged-overdraft/unarrangedAccountsOverdraftContractIdGet.ts';
import { unarrangedAccountsOverdraftContractIdPaymentsGet } from './endpoints/unarranged-overdraft/unarrangedAccountsOverdraftContractIdPaymentsGet.ts';
import { unarrangedAccountsOverdraftContractIdScheduledInstalmentsGet } from './endpoints/unarranged-overdraft/unarrangedAccountsOverdraftContractIdScheduledInstalmentsGet.ts';
import { unarrangedAccountsOverdraftContractIdWarrantiesGet } from './endpoints/unarranged-overdraft/unarrangedAccountsOverdraftContractIdWarrantiesGet.ts';
import { paymentsConsentsPost } from './endpoints/payments/paymentsConsentsPost.ts';
import { paymentsConsentsConsentIdGet } from './endpoints/payments/paymentsConsentsConsentIdGet.ts';
import { paymentsConsentsConsentIdPut } from './endpoints/payments/paymentsConsentsConsentIdPut.ts';
import { investmentsFundsTitlesTypesGet } from './endpoints/investments/investmentsFundsTitlesTypesGet.ts';
import { investmentsBankFixedIncomesGet } from './endpoints/investments/investmentsBankFixedIncomesGet.ts';
import { investmentsCreditFixedIncomesGet } from './endpoints/investments/investmentsCreditFixedIncomesGet.ts';
import { investmentsVariableIncomesGet } from './endpoints/investments/investmentsVariableIncomesGet.ts';
import { investmentsTreasureTitlesGet } from './endpoints/investments/investmentsTreasureTitlesGet.ts';
import { exchangeOperationsCurrentGet } from './endpoints/exchange/exchangeOperationsCurrentGet.ts';
import { exchangeOperationsEventGet } from './endpoints/exchange/exchangeOperationsEventGet.ts';
import { exchangeOperationsFutureGet } from './endpoints/exchange/exchangeOperationsFutureGet.ts';
import { exchangeOnlineRatesGet } from './endpoints/exchange/exchangeOnlineRatesGet.ts';
import { acquiringServicesTerminalsGet } from './endpoints/acquiring/acquiringServicesTerminalsGet.ts';
import { acquiringServicesProductsServicesGet } from './endpoints/acquiring/acquiringServicesProductsServicesGet.ts';
import { acquiringServicesContractsGet } from './endpoints/acquiring/acquiringServicesContractsGet.ts';
import { acquiringServicesContractIdGet } from './endpoints/acquiring/acquiringServicesContractIdGet.ts';
import { acquiringServicesContractIdTransactionsGet } from './endpoints/acquiring/acquiringServicesContractIdTransactionsGet.ts';
import { insurancesPatrimonialGet } from './endpoints/insurances/insurancesPatrimonialGet.ts';
import { insurancesPensionGet } from './endpoints/insurances/insurancesPensionGet.ts';
import { insurancesDamagesAndPeopleGet } from './endpoints/insurances/insurancesDamagesAndPeopleGet.ts';
import { capitalizationBondsTitlesModalitiesGet } from './endpoints/capitalization/capitalizationBondsTitlesModalitiesGet.ts';
import { capitalizationBondsTitlesTypesGet } from './endpoints/capitalization/capitalizationBondsTitlesTypesGet.ts';
import { pensionPlansGet } from './endpoints/pension/pensionPlansGet.ts';

export const router = new Router();

// Root endpoint with list of available APIs
router.all('/', async (ctx: { status: number; body: string }) => {
  ctx.status = 200;
  ctx.body = `            
    GET /status
    
    # Discovery APIs
    GET /open-banking/discovery/v1/status
    GET /open-banking/discovery/v1/outages
    GET /open-banking/discovery/v1/resources
    
    # Channels APIs
    GET /open-banking/channels/v1/branches
    GET /open-banking/channels/v1/electronic-channels
    GET /open-banking/channels/v1/phone-channels
    GET /open-banking/channels/v1/banking-agents
    GET /open-banking/channels/v1/shared-automated-teller-machines
    
    # Products and Services APIs
    GET /open-banking/products-services/v1/personal-accounts
    GET /open-banking/products-services/v1/business-accounts
    GET /open-banking/products-services/v1/personal-loans
    GET /open-banking/products-services/v1/business-loans
    GET /open-banking/products-services/v1/personal-financings
    GET /open-banking/products-services/v1/business-financings
    GET /open-banking/products-services/v1/personal-credit-cards
    GET /open-banking/products-services/v1/business-credit-cards
    GET /open-banking/products-services/v1/personal-unarranged-account-overdraft
    GET /open-banking/products-services/v1/business-unarranged-account-overdraft
    GET /open-banking/products-services/v1/personal-invoice-financings
    GET /open-banking/products-services/v1/business-invoice-financings
    
    # Admin APIs
    GET /open-banking/admin/v1/metrics
    
    # Consents APIs
    GET /open-banking/consents/v1/consents
    POST /open-banking/consents/v1/consents
    GET /open-banking/consents/v1/consents/{consentId}
    DELETE /open-banking/consents/v1/consents/{consentId}
    
    # Resources APIs
    GET /open-banking/resources/v1/resources
    
    # Customers APIs
    GET /open-banking/customers/v1/personal/identifications
    GET /open-banking/customers/v1/business/identifications
    GET /open-banking/customers/v1/personal/financial-relations
    GET /open-banking/customers/v1/business/financial-relations
    
    # Accounts APIs
    GET /open-banking/accounts/v1/accounts
    GET /open-banking/accounts/v1/accounts/{accountId}
    GET /open-banking/accounts/v1/accounts/{accountId}/balances
    GET /open-banking/accounts/v1/accounts/{accountId}/transactions
    GET /open-banking/accounts/v1/accounts/{accountId}/overdraft-limits
    
    # Credit Card APIs
    GET /open-banking/credit-cards-accounts/v1/accounts
    GET /open-banking/credit-cards-accounts/v1/accounts/{creditCardAccountId}
    GET /open-banking/credit-cards-accounts/v1/accounts/{creditCardAccountId}/bills
    GET /open-banking/credit-cards-accounts/v1/accounts/{creditCardAccountId}/limits
    GET /open-banking/credit-cards-accounts/v1/accounts/{creditCardAccountId}/transactions
    
    # Loans APIs
    GET /open-banking/loans/v1/contracts
    GET /open-banking/loans/v1/contracts/{contractId}
    GET /open-banking/loans/v1/contracts/{contractId}/payments
    GET /open-banking/loans/v1/contracts/{contractId}/scheduled-instalments
    GET /open-banking/loans/v1/contracts/{contractId}/warranties
    
    # Financings APIs
    GET /open-banking/financings/v1/contracts
    GET /open-banking/financings/v1/contracts/{contractId}
    GET /open-banking/financings/v1/contracts/{contractId}/payments
    GET /open-banking/financings/v1/contracts/{contractId}/scheduled-instalments
    GET /open-banking/financings/v1/contracts/{contractId}/warranties
    
    # Invoice Financings APIs
    GET /open-banking/invoice-financings/v1/contracts
    GET /open-banking/invoice-financings/v1/contracts/{contractId}
    GET /open-banking/invoice-financings/v1/contracts/{contractId}/payments
    GET /open-banking/invoice-financings/v1/contracts/{contractId}/scheduled-instalments
    GET /open-banking/invoice-financings/v1/contracts/{contractId}/warranties
    
    # Unarranged Accounts Overdraft APIs
    GET /open-banking/unarranged-accounts-overdraft/v1/contracts
    GET /open-banking/unarranged-accounts-overdraft/v1/contracts/{contractId}
    GET /open-banking/unarranged-accounts-overdraft/v1/contracts/{contractId}/payments
    GET /open-banking/unarranged-accounts-overdraft/v1/contracts/{contractId}/scheduled-instalments
    GET /open-banking/unarranged-accounts-overdraft/v1/contracts/{contractId}/warranties
    
    # Payments APIs
    POST /open-banking/payments/v1/consents
    GET /open-banking/payments/v1/consents/{consentId}
    PUT /open-banking/payments/v1/consents/{consentId}
    POST /open-banking/payments/v1/pix/payments
    GET /open-banking/payments/v1/pix/payments/{paymentId}
    
    # Exchange APIs
    GET /open-banking/exchange/v1/operations/current
    GET /open-banking/exchange/v1/operations/event
    GET /open-banking/exchange/v1/operations/future
    GET /open-banking/exchange/v1/online-rates
    
    # Acquiring Services APIs
    GET /open-banking/acquiring-services/v1/terminals
    GET /open-banking/acquiring-services/v1/products-services
    GET /open-banking/acquiring-services/v1/contracts
    GET /open-banking/acquiring-services/v1/contracts/{contractId}
    GET /open-banking/acquiring-services/v1/contracts/{contractId}/transactions
    
    # Insurances APIs
    GET /open-banking/insurances/v1/patrimonial
    GET /open-banking/insurances/v1/pension
    GET /open-banking/insurances/v1/damages-and-people
    
    # Capitalization Bonds APIs
    GET /open-banking/capitalization-bonds/v1/titles/modalities
    GET /open-banking/capitalization-bonds/v1/titles/types
    
    # Pension APIs
    GET /open-banking/pension/v1/plans
    
    # Investments APIs
    GET /open-banking/investments/v1/funds/titles/types
    GET /open-banking/investments/v1/bank-fixed-incomes
    GET /open-banking/investments/v1/credit-fixed-incomes
    GET /open-banking/investments/v1/variable-incomes
    GET /open-banking/investments/v1/treasure-titles
  `;
});

// Status endpoint
router.get('/status', statusGet);

// Discovery APIs
router.get('/open-banking/discovery/v1/status', discoveryStatusGet);
router.get('/open-banking/discovery/v1/outages', discoveryOutagesGet);
router.get('/open-banking/discovery/v1/resources', discoveryResourcesGet);

// Channels APIs
router.get('/open-banking/channels/v1/branches', channelsBranchesGet);
router.get(
  '/open-banking/channels/v1/electronic-channels',
  channelsElectronicChannelsGet,
);
router.get(
  '/open-banking/channels/v1/phone-channels',
  channelsPhoneChannelsGet,
);
router.get(
  '/open-banking/channels/v1/banking-agents',
  channelsBankingAgentsGet,
);
router.get(
  '/open-banking/channels/v1/shared-automated-teller-machines',
  channelsSharedAutomatedTellerMachinesGet,
);

// Products and Services APIs
router.get(
  '/open-banking/products-services/v1/personal-accounts',
  productsPersonalAccountsGet,
);
router.get('/open-banking/admin/v1/metrics', adminMetricsGet);
router.get(
  '/open-banking/products-services/v1/personal-loans',
  productsPersonalLoansGet,
);
router.get(
  '/open-banking/products-services/v1/business-accounts',
  productsBusinessAccountsGet,
);
router.get(
  '/open-banking/products-services/v1/business-loans',
  productsBusinessLoansGet,
);
router.get(
  '/open-banking/products-services/v1/personal-financings',
  productsPersonalFinancingsGet,
);
router.get(
  '/open-banking/products-services/v1/business-financings',
  productsBusinessFinancingsGet,
);
router.get(
  '/open-banking/products-services/v1/personal-credit-cards',
  productsPersonalCreditCardsGet,
);
router.get(
  '/open-banking/products-services/v1/business-credit-cards',
  productsBusinessCreditCardsGet,
);
router.get(
  '/open-banking/products-services/v1/personal-unarranged-account-overdraft',
  productsPersonalUnarrangedAccountOverdraftGet,
);
router.get(
  '/open-banking/products-services/v1/business-unarranged-account-overdraft',
  productsBusinessUnarrangedAccountOverdraftGet,
);
router.get(
  '/open-banking/products-services/v1/personal-invoice-financings',
  productsPersonalInvoiceFinancingsGet,
);
router.get(
  '/open-banking/products-services/v1/business-invoice-financings',
  productsBusinessInvoiceFinancingsGet,
);
router.get('/open-banking/consents/v1/consents', consentsGet);
router.get(
  '/open-banking/consents/v1/consents/:consentId',
  consentsConsentIdGet,
);
router.delete(
  '/open-banking/consents/v1/consents/:consentId',
  consentsConsentIdDelete,
);
router.get('/open-banking/resources/v1/resources', resourcesResourcesGet);
router.get(
  '/open-banking/customers/v1/personal/identifications',
  customersPersonalIdentificationsGet,
);
router.get(
  '/open-banking/customers/v1/business/identifications',
  customersBusinessIdentificationsGet,
);
router.get(
  '/open-banking/customers/v1/personal/financial-relations',
  customersPersonalFinancialRelationsGet,
);
router.get(
  '/open-banking/customers/v1/business/financial-relations',
  customersBusinessFinancialRelationsGet,
);
router.get('/open-banking/accounts/v1/accounts', accountsAccountsGet);
router.get(
  '/open-banking/accounts/v1/accounts/:accountId',
  accountsAccountIdGet,
);
router.get(
  '/open-banking/accounts/v1/accounts/:accountId/balances',
  accountsAccountIdBalancesGet,
);
router.get(
  '/open-banking/accounts/v1/accounts/:accountId/transactions',
  accountsAccountIdTransactionsGet,
);
router.get(
  '/open-banking/accounts/v1/accounts/:accountId/overdraft-limits',
  accountsAccountIdOverdraftLimitsGet,
);
router.get(
  '/open-banking/credit-cards-accounts/v1/accounts',
  creditCardsAccountsGet,
);
router.get(
  '/open-banking/credit-cards-accounts/v1/accounts/:creditCardAccountId',
  creditCardsAccountIdGet,
);
router.get(
  '/open-banking/credit-cards-accounts/v1/accounts/:creditCardAccountId/bills',
  creditCardsAccountIdBillsGet,
);
router.get(
  '/open-banking/credit-cards-accounts/v1/accounts/:creditCardAccountId/limits',
  creditCardsAccountIdLimitsGet,
);
router.get(
  '/open-banking/credit-cards-accounts/v1/accounts/:creditCardAccountId/transactions',
  creditCardsAccountIdTransactionsGet,
);
router.get('/open-banking/loans/v1/contracts', loansContractsGet);
router.get('/open-banking/loans/v1/contracts/:contractId', loansContractIdGet);
router.get(
  '/open-banking/loans/v1/contracts/:contractId/payments',
  loansContractIdPaymentsGet,
);
router.get(
  '/open-banking/loans/v1/contracts/:contractId/scheduled-instalments',
  loansContractIdScheduledInstalmentsGet,
);
router.get(
  '/open-banking/loans/v1/contracts/:contractId/warranties',
  loansContractIdWarrantiesGet,
);
router.get('/open-banking/financings/v1/contracts', financingsContractsGet);
router.get(
  '/open-banking/financings/v1/contracts/:contractId',
  financingsContractIdGet,
);
router.get(
  '/open-banking/financings/v1/contracts/:contractId/payments',
  financingsContractIdPaymentsGet,
);
router.get(
  '/open-banking/financings/v1/contracts/:contractId/scheduled-instalments',
  financingsContractIdScheduledInstalmentsGet,
);
router.get(
  '/open-banking/financings/v1/contracts/:contractId/warranties',
  financingsContractIdWarrantiesGet,
);
router.get(
  '/open-banking/invoice-financings/v1/contracts',
  invoiceFinancingsContractsGet,
);
router.get(
  '/open-banking/invoice-financings/v1/contracts/:contractId',
  invoiceFinancingsContractIdGet,
);
router.get(
  '/open-banking/invoice-financings/v1/contracts/:contractId/payments',
  invoiceFinancingsContractIdPaymentsGet,
);
router.get(
  '/open-banking/invoice-financings/v1/contracts/:contractId/scheduled-instalments',
  invoiceFinancingsContractIdScheduledInstalmentsGet,
);
router.get(
  '/open-banking/invoice-financings/v1/contracts/:contractId/warranties',
  invoiceFinancingsContractIdWarrantiesGet,
);
router.get(
  '/open-banking/unarranged-accounts-overdraft/v1/contracts',
  unarrangedAccountsOverdraftContractsGet,
);
router.get(
  '/open-banking/unarranged-accounts-overdraft/v1/contracts/:contractId',
  unarrangedAccountsOverdraftContractIdGet,
);
router.get(
  '/open-banking/unarranged-accounts-overdraft/v1/contracts/:contractId/payments',
  unarrangedAccountsOverdraftContractIdPaymentsGet,
);
router.get(
  '/open-banking/unarranged-accounts-overdraft/v1/contracts/:contractId/scheduled-instalments',
  unarrangedAccountsOverdraftContractIdScheduledInstalmentsGet,
);
router.get(
  '/open-banking/unarranged-accounts-overdraft/v1/contracts/:contractId/warranties',
  unarrangedAccountsOverdraftContractIdWarrantiesGet,
);
router.post('/open-banking/payments/v1/consents', paymentsConsentsPost);
router.get(
  '/open-banking/payments/v1/consents/:consentId',
  paymentsConsentsConsentIdGet,
);
router.put(
  '/open-banking/payments/v1/consents/:consentId',
  paymentsConsentsConsentIdPut,
);
router.get(
  '/open-banking/investments/v1/funds/titles/types',
  investmentsFundsTitlesTypesGet,
);
router.get(
  '/open-banking/investments/v1/bank-fixed-incomes',
  investmentsBankFixedIncomesGet,
);
router.get(
  '/open-banking/investments/v1/credit-fixed-incomes',
  investmentsCreditFixedIncomesGet,
);
router.get(
  '/open-banking/investments/v1/variable-incomes',
  investmentsVariableIncomesGet,
);
router.get(
  '/open-banking/investments/v1/treasure-titles',
  investmentsTreasureTitlesGet,
);
router.get(
  '/open-banking/exchange/v1/operations/current',
  exchangeOperationsCurrentGet,
);
router.get(
  '/open-banking/exchange/v1/operations/event',
  exchangeOperationsEventGet,
);
router.get(
  '/open-banking/exchange/v1/operations/future',
  exchangeOperationsFutureGet,
);
router.get('/open-banking/exchange/v1/online-rates', exchangeOnlineRatesGet);
router.get(
  '/open-banking/acquiring-services/v1/terminals',
  acquiringServicesTerminalsGet,
);
router.get(
  '/open-banking/acquiring-services/v1/products-services',
  acquiringServicesProductsServicesGet,
);
router.get(
  '/open-banking/acquiring-services/v1/contracts',
  acquiringServicesContractsGet,
);
router.get(
  '/open-banking/acquiring-services/v1/contracts/:contractId',
  acquiringServicesContractIdGet,
);
router.get(
  '/open-banking/acquiring-services/v1/contracts/:contractId/transactions',
  acquiringServicesContractIdTransactionsGet,
);
router.get('/open-banking/insurances/v1/patrimonial', insurancesPatrimonialGet);
router.get('/open-banking/insurances/v1/pension', insurancesPensionGet);
router.get(
  '/open-banking/insurances/v1/damages-and-people',
  insurancesDamagesAndPeopleGet,
);
router.get(
  '/open-banking/capitalization-bonds/v1/titles/modalities',
  capitalizationBondsTitlesModalitiesGet,
);
router.get(
  '/open-banking/capitalization-bonds/v1/titles/types',
  capitalizationBondsTitlesTypesGet,
);
router.get('/open-banking/pension/v1/plans', pensionPlansGet);
