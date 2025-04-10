import { type Context } from 'koa';

export const discoveryOutagesGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: [],
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: new Date().toISOString(),
    },
    endpoint: '/open-banking/discovery/v1/outages',
  };
};
