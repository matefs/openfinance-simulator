import { type Context } from 'koa';

export const productsBusinessAccountsGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: {
      brand: {
        name: 'Open Finance Bank',
        companies: [
          {
            name: 'Company A',
            cnpjNumber: '12345678901234',
            businessAccounts: [],
          },
        ],
      },
    },
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: new Date().toISOString(),
    },
    endpoint: '/open-banking/products-services/v1/business-accounts',
  };
};
