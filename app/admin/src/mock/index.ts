import { api1Mock, api2Mock } from '@/gql/mock';

export const handlers = [
  api1Mock.mockGetUserQuery((req, res, ctx) => {
    const { id } = req.variables;
    return res(ctx.data({ user: api1Mock.aUser({ id }) }));
  }),
  api2Mock.mockGetProductQuery((req, res, ctx) => {
    const { id } = req.variables;
    return res(
      ctx.data({
        product: api2Mock.aProduct({ id }),
      })
    );
  }),
];
