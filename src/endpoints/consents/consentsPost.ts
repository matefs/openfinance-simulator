import { type Context } from 'koa';
import { v4 as uuidv4 } from 'uuid';

export const consentsPost = async (ctx: Context) => {
  const consentId = uuidv4();

  ctx.status = 201;
  ctx.body = {
    data: {
      consentId,
      creationDateTime: new Date().toISOString(),
      status: 'AWAITING_AUTHORISATION',
      statusUpdateDateTime: new Date().toISOString(),
      expirationDateTime: new Date(
        Date.now() + 90 * 24 * 60 * 60 * 1000,
      ).toISOString(), // 90 days in the future
      permissions: ctx.request.body.data.permissions || [],
    },
    meta: {
      requestDateTime: new Date().toISOString(),
    },
    endpoint: '/open-banking/consents/v1/consents',
  };
};
