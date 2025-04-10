// Template for endpoint handlers
import { type Context } from 'koa';

export const endpointHandler = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    message: 'This is a dummy endpoint, to be implemented',
    endpoint: 'Replace with endpoint name',
  };
};
