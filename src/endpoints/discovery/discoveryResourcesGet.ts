import { type Context } from 'koa';

export const discoveryResourcesGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: {
      resources: [
        {
          resourceId: 'channels',
          version: '1.0.0',
          endpoint: '/channels',
        },
        {
          resourceId: 'products-services',
          version: '1.0.0',
          endpoint: '/products-services',
        },
      ],
    },
    meta: {
      requestDateTime: new Date().toISOString(),
    },
    endpoint: '/open-banking/discovery/v1/resources',
  };
};
