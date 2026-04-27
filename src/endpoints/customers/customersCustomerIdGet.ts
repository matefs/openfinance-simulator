import { type Context } from 'koa';
import { CustomerModel } from '../../models/customers/Customer.model.ts';

export const customersCustomerIdGet = async (ctx: Context) => {
  const { customerId } = ctx.params as { customerId: string };
  const customer = await CustomerModel.findOne({ customerId }).lean();
  if (!customer) {
    ctx.status = 404;
    ctx.body = { errors: [{ code: 'NAO_ENCONTRADO', title: 'Not found', detail: 'Customer not found' }] };
    return;
  }
  ctx.status = 200;
  ctx.body = { data: customer, meta: { requestDateTime: new Date().toISOString() } };
};
