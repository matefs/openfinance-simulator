import { type Context } from 'koa';

export const exchangeOperationsFutureGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: {},
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: '2025-04-10T04:17:02.911Z',
    },
    endpoint: `/open-banking/exchange/v1/operations/future`,
  };
};
