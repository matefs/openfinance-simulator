import { type Context } from 'koa';
import { v4 as uuidv4 } from 'uuid';

export const paymentsPixPaymentsPost = async (ctx: Context) => {
  const paymentId = uuidv4();

  ctx.status = 201;
  ctx.body = {
    data: {
      paymentId,
      consentId: ctx.request.body.data.consentId,
      creationDateTime: new Date().toISOString(),
      statusUpdateDateTime: new Date().toISOString(),
      status: 'RCVD',
      endToEndId: `E${Math.floor(Math.random() * 10000000000)}`,
    },
    meta: {
      requestDateTime: new Date().toISOString(),
    },
    endpoint: '/open-banking/payments/v1/pix/payments',
  };
};
