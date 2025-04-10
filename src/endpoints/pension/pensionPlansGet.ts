import { type Context } from 'koa';

export const pensionPlansGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: {},
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: '2025-04-10T04:17:02.912Z',
    },
    endpoint: `/open-banking/pension/v1/plans`,
  };
};
