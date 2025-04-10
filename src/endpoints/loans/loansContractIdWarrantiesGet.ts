import { type Context } from 'koa';

export const loansContractIdWarrantiesGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: {
      brand: {
        name: 'Open Finance Bank',
        companies: [
          {
            name: 'Company A',
            cnpjNumber: '12345678901234',
            warranties: [],
          },
        ],
      },
    },
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: '2025-04-10T04:17:02.910Z',
    },
    endpoint: `/open-banking/loans/v1/contracts/${ctx.params.contractId}/warranties`,
  };
};
