import { type Context } from 'koa';

export const productsBusinessInvoiceFinancingsGet = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    data: {
      brand: {
        name: 'Open Finance Bank',
        companies: [
          {
            name: 'Company A',
            cnpjNumber: '12345678901234',
            businessInvoiceFinancings: [],
          },
        ],
      },
    },
    meta: {
      totalRecords: 0,
      totalPages: 1,
      requestDateTime: '2025-04-10T04:17:02.908Z',
    },
    endpoint: `/open-banking/products-services/v1/business-invoice-financings`,
  };
};
