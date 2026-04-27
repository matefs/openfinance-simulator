import { type Context } from 'koa';
import { CustomerModel } from '../../models/customers/Customer.model.ts';

export const customersCustomerIdPut = async (ctx: Context) => {
  const { customerId } = ctx.params as { customerId: string };
  const payload = ctx.request.body;
  try {
    const updated = await CustomerModel.findOneAndUpdate({ customerId }, payload, { new: true, runValidators: true }).lean();
    if (!updated) {
      ctx.status = 404;
      ctx.body = { errors: [{ code: 'NAO_ENCONTRADO', title: 'Not found', detail: 'Customer not found' }] };
      return;
    }
    ctx.status = 200;
    ctx.body = { data: updated, meta: { requestDateTime: new Date().toISOString() } };
  } catch (err: any) {
    ctx.status = 422;
    ctx.body = { errors: [{ code: 'INVALID_PAYLOAD', title: 'Invalid payload', detail: err.message }] };
  }
};
