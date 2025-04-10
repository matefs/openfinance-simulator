import { type Context } from 'koa';

export const paymentsConsentsPost = async (ctx: Context) => {
  ctx.status = 201;
  ctx.body = {
    data: {
      consentId: '1234-5678-9101-1121',
      creationDateTime: '2025-04-10T04:17:02.911Z',
      status: 'AWAITING_AUTHORISATION',
      statusUpdateDateTime: '2025-04-10T04:17:02.911Z',
    },
    meta: {
      requestDateTime: '2025-04-10T04:17:02.911Z',
    },
    endpoint: `/open-banking/payments/v1/consents`,
  };
};
