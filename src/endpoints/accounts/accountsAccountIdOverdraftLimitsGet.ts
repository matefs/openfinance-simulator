import { type Context } from 'koa';

export const accountsAccountIdOverdraftLimitsGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: {
      brand: {
        name: 'Open Finance Bank',
        companies: [
          {
            name: 'Company A',
            cnpjNumber: '12345678901234',
            overdraftLimits: [],
          },
        ],
      },
    },
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: '2025-04-10T04:17:02.909Z',
    },
    endpoint: `/open-banking/accounts/v1/accounts/${ctx.params.accountId}/overdraft-limits`,
  };
};
