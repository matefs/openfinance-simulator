import { type Context } from 'koa';

export const paymentsPixPaymentsGet = async (ctx: Context) => {
  const paymentId = ctx.params.paymentId;

  ctx.status = 200;
  ctx.body = {
    data: {
      paymentId,
      consentId: 'urn:consent:1234',
      creationDateTime: new Date().toISOString(),
      statusUpdateDateTime: new Date().toISOString(),
      status: 'PDNG', // PDNG, ACSP, RJCT, SCHD, ACCC, PATC
      rejectionReason: null,
      localInstrument: 'DICT',
      payment: {
        amount: '100.00',
        currency: 'BRL',
      },
      endToEndId: `E${Math.floor(Math.random() * 10000000000)}`,
    },
    meta: {
      requestDateTime: new Date().toISOString(),
    },
    endpoint: `/open-banking/payments/v1/pix/payments/${paymentId}`,
  };
};
