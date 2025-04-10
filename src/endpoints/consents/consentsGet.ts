import { type Context } from 'koa';

export const consentsGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: [],
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: new Date().toISOString(),
    },
    endpoint: '/open-banking/consents/v1/consents',
  };
};
