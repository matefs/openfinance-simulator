import { type Context } from 'koa';

export const channelsSharedAutomatedTellerMachinesGet = async (
  ctx: Context,
) => {
  ctx.status = 200;
  ctx.body = {
    data: {
      brand: {
        name: 'Open Finance Bank',
        companies: [
          {
            name: 'Company A',
            cnpjNumber: '12345678901234',
            sharedAutomatedTellerMachines: [],
          },
        ],
      },
    },
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: new Date().toISOString(),
    },
    endpoint: '/open-banking/channels/v1/shared-automated-teller-machines',
  };
};
