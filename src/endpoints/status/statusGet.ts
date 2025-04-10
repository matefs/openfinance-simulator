import { type Context } from 'koa';

export const statusGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    status: 'UP',
    timestamp: new Date().toISOString(),
  };
};
