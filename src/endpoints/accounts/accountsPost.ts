import { type Context } from 'koa';
import { AccountModel } from '../../models/accounts/Account.model.ts';
import { CustomerModel } from '../../models/customers/Customer.model.ts';

export const accountsPost = async (ctx: Context) => {
  const payload = ctx.request.body;
  const { customerId } = payload;
  if (!customerId) {
    ctx.status = 422;
    ctx.body = { errors: [{ code: 'NAO_INFORMADO', title: 'Missing customerId', detail: 'customerId is required' }] };
    return;
  }
  const customer = await CustomerModel.findOne({ customerId }).lean();
  if (!customer) {
    ctx.status = 404;
    ctx.body = { errors: [{ code: 'NAO_ENCONTRADO', title: 'Customer not found', detail: 'customerId not found' }] };
    return;
  }
  if (customer.status !== 'APROVADO') {
    ctx.status = 403;
    ctx.body = { errors: [{ code: 'RECURSO_NAO_PERMITIDO', title: 'Customer not approved', detail: 'Customer must be approved to create accounts' }] };
    return;
  }
  try {
    const created = await AccountModel.create(payload);
    ctx.status = 201;
    ctx.body = { data: created, meta: { requestDateTime: new Date().toISOString() } };
  } catch (err: any) {
    ctx.status = 422;
    ctx.body = { errors: [{ code: 'INVALID_PAYLOAD', title: 'Invalid payload', detail: err.message }] };
  }
};
