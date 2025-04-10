import { type Context } from 'koa';

export const discoveryStatusGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    status: 'UP',
    timestamp: new Date().toISOString(),
    endpoint: '/open-banking/discovery/v1/status',
  };
};
