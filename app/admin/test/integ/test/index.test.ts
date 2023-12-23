import { test, expect } from 'test/integration/index.ts';
import { api1Mock } from '../../../src/gql/mock.ts';

test.describe.parallel('main page', () => {
  test('show user info', async ({ page, worker }) => {
    await worker.use(
      api1Mock.mockGetUserQuery((req, res, ctx) => {
        const { id } = req.variables;
        return res(ctx.data({ user: api1Mock.aUser({ id }) }));
      })
    );

    await page.goto('/');

    const targetUser = api1Mock.aUser();

    await expect(page.getByText(targetUser.name)).toBeVisible();
    await expect(page.getByText(targetUser.email)).toBeVisible();
  });

  test('search user by manually input id', () => {});
});
