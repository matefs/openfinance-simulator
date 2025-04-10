import { type Context } from 'koa';

export const consentsConsentIdDelete = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    meta: {
      requestDateTime: '2025-04-10T04:17:02.908Z',
    },
    endpoint: `/open-banking/consents/v1/consents/${ctx.params.consentId}`,
  };
};
