import { type Context } from 'koa';

export const consentsConsentIdGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: {},
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: '2025-04-10T04:17:02.908Z',
    },
    endpoint: `/open-banking/consents/v1/consents/${ctx.params.consentId}`,
  };
};
