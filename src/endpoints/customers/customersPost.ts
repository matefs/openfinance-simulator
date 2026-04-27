import { type Context } from 'koa';
import { CustomerModel } from '../../models/customers/Customer.model.ts';

export const customersPost = async (ctx: Context) => {
  const payload = ctx.request.body;

  try {
    const created = await CustomerModel.create(payload);
    ctx.status = 201;
    ctx.body = {
      data: created,
      meta: { requestDateTime: new Date().toISOString() },
      endpoint: '/open-banking/customers/v1/customers',
    };
  } catch (err: any) {
    ctx.status = 422;
    ctx.body = { errors: [{ code: 'INVALID_PAYLOAD', title: 'Invalid payload', detail: err.message }] };
  }
};
