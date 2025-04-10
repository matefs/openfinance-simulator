import { type Context } from 'koa';

export const acquiringServicesContractIdTransactionsGet = async (
  ctx: Context,
) => {
  ctx.status = 200;
  ctx.body = {
    data: {
      brand: {
        name: 'Open Finance Bank',
        companies: [
          {
            name: 'Company A',
            cnpjNumber: '12345678901234',
            transactions: [],
          },
        ],
      },
    },
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: '2025-04-10T04:17:02.912Z',
    },
    endpoint: `/open-banking/acquiring-services/v1/contracts/${ctx.params.contractId}/transactions`,
  };
};
